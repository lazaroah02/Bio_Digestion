export function calculateTotalVolume({Qinf, DQOv, COV}){
    return (( parseFloat(Qinf) * parseFloat(DQOv) ) / parseFloat(COV)).toFixed(2)
}

export function calculateHidraulicRetentionTime({VT, Qinf}){
    return (parseFloat(VT) /parseFloat(Qinf) ).toFixed(1)
}

export function getNumberOfReactorsNeeded({Qinf}){
    return Math.ceil(parseFloat(Qinf) / 300 )
}

export function calculateVolumeOfEachReactor({VT, n}){
    return (parseFloat(VT) / parseFloat(n)).toFixed(2)
}

export function calculateArea({Hr, volume}){
    return ( parseFloat(volume) / parseFloat(Hr) ).toFixed(2)
}

export function calculateReactorSide({AR}){
    return Math.sqrt(parseFloat(AR)).toFixed(2)
}

export function calculateVasc({Hr, TRH}){
    return ( parseFloat(Hr) / parseFloat(TRH) ).toFixed(2)
}