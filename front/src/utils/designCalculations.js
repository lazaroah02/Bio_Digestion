export function calculateTotalVolume({Qinf, DQOv, COV}){
    return (( parseFloat(Qinf) * parseFloat(DQOv) ) / parseFloat(COV)).toFixed(2)
}