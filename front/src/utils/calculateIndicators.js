//VAN
export function calculateVAN({Q, r, j, Inv}){
    return ( ( Q / Math.pow((1 + r), j) ) -Inv).toFixed(2)
}

export function calculateQ({IA, GA}){
    return (parseFloat(IA) - parseFloat(GA)).toFixed(2)
}

export function calculateIA({BP, CP, Fc, BF, PE}){
    return (parseFloat(BP) * parseFloat(CP) * parseFloat(Fc) * parseFloat(BF) * parseFloat(PE)).toFixed(2)
}
//END VAN

//TIR
export function calculateTIR({Q, Inv, n}){
    return ((Math.pow((Q / Inv), (1 / n)) - 1) * 100).toFixed(4)
}

//TRI
export function calculateTRI({Inv, Q}){
    return ( parseFloat(Inv) / parseFloat(Q) ).toFixed(2)
}

//LEC
export function calculateLEC({Inv, OyM, n, E}){
    return ( parseFloat(calculateCA({Inv:Inv, OyM:OyM, n:n})) / parseFloat(calculateEA({E:E, n:n})) ).toFixed(2)
}

function calculateCA({Inv, OyM, n}){
    let partialResults = []
    //calculate CA n times
    for(let j = 1; j <= n; j++) {
        partialResults.push(parseFloat(
            ( parseFloat(Inv) + parseFloat(OyM) ) / calculateCAandEADenominator({n:n, j:j})
        ))
    }
    //add all CA values
    return partialResults.reduce((acumulator, value) => acumulator + value, 0).toFixed(2)
}

function calculateEA({E, n}){
    let partialResults = []
    //calculate EA n times
    for(let j = 1; j <= n; j++) {
        partialResults.push(parseFloat(
            parseFloat(E) / calculateCAandEADenominator({n:n, j:j})
        ))
    }
    //add all EA values
    return partialResults.reduce((acumulator, value) => acumulator + value, 0).toFixed(2)
}

function calculateCAandEADenominator({n, j}){
    return Math.pow((1 + parseFloat(n)), j*-1)
}
//END LEC

//BPM
export function calculateBPM({Qs, DQOi, f_DQO, Efp, T, VH2S}){
    return ( ( Qs * DQOi * ( 1 - (f_DQO/100) ) * Efp * 0.35 * ( (T + 273) / 273 ) ) - VH2S ).toFixed(2)
}

//Z
export function calculateZ({VAN, TRI, TIR, LEC, BPM, n, VAN_d, TRI_d, TIR_d, LEC_d, BPM_d, n_d}){
    return Math.max(...[
        Math.abs(VAN - VAN_d) / VAN_d, 
        Math.abs(TIR - TIR_d) / TIR_d, 
        Math.abs(TRI - TRI_d) / TRI_d, 
        Math.abs(LEC - LEC_d) / LEC_d, 
        Math.abs(BPM - BPM_d) / BPM_d, 
        Math.abs(n - n_d) / n_d
    ]).toFixed(2)
}