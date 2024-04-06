export function calculateVAN({Q, r, Inv, j}){
    return ( ( Q / Math.pow((1 + r), j) ) - Inv ).toFixed(2)
}

export function calculateQ({IA, GA}){
    return (parseFloat(IA) - parseFloat(GA)).toFixed(2)
}

export function calculateIA({CP, Fc, Ve, PE}){
    return (parseFloat(CP) * parseFloat(Fc) * parseFloat(Ve) * parseFloat(PE)).toFixed(2)
}

export function calculateTIR(){
    return 0
}

export function calculateTRI(){
    return 0
}

export function calculateLEC(){
    return 0
}

export function calculateBPM(){
    return 0
}