export function calculateTotalVolumeValidations({Qinf, DQOv, COV}){
    return new Promise((resolve, reject) => {
        if(COV === 0){
            reject("COV no puede ser cero")
        }
        else if(COV > 99999){
            reject("COV es demasiado grande")
        }
        else if(Qinf > 99999){
            reject("Qinf es demasiado grande")
        }
        else if(DQOv > 99999){
            reject("DQOv es demasiado grande")
        }else{
            resolve()
        }
    })
}