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

export function calculateAreaValidations({Hr, volume, volumenCalculationId}){
    return new Promise((resolve, reject) => {
        if(Hr === 0){
            reject("Hr no puede ser cero")
        }
        else if(volume == null){
            reject("Debes calcular el Volumen")
            //focus on volume calculation section to improve the UX
            document.getElementById(volumenCalculationId).scrollIntoView({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }
        else{
            resolve()
        }
    })
}

export function calculateVascValidations({Hr, TRH, TRHCalculationId}){
    return new Promise((resolve, reject) => {
        if(Hr === 0){
            reject("Hr no puede ser cero")
        }
        else if(TRH == null){
            reject("Debes calcular el TRH")
            //focus on volume calculation section to improve the UX
            document.getElementById(TRHCalculationId).scrollIntoView({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }
        else{
            resolve()
        }
    })
}
