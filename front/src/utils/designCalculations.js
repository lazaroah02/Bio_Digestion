export function calculateTotalVolume({Qinf, DQOv, COV}){
    return (( parseFloat(Qinf) * parseFloat(DQOv) ) / parseFloat(COV)).toFixed(2)
}

export function calculateHidraulicRetentionTime({VT, Qinf}){
    return (parseFloat(VT) /parseFloat(Qinf) ).toFixed(1)
}