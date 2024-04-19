//VAN
export function calculateVAN({Q, r, Inv, j}){
    return ( ( Q / Math.pow((1 + r), j) ) - Inv ).toFixed(2)
}

export function calculateQ({IA, GA}){
    return (parseFloat(IA) - parseFloat(GA)).toFixed(2)
}

export function calculateIA({CP, Fc, Ve, PE}){
    return (parseFloat(CP) * parseFloat(Fc) * parseFloat(Ve) * parseFloat(PE)).toFixed(2)
}
//END VAN

//TIR
export function calculateTIR(){
    return 0
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
export function calculateBPM(){
    return 0
}