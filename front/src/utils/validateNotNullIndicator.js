export function validateNotNullIndicator({VAN, TRI, TIR, LEC, BPM, n}){
    return new Promise((resolve, reject) => {
        if(VAN == null || VAN === "" || VAN === NaN){
            reject("El indicador VAN no tiene un valor válido")
        }else if(TRI == null || TRI == "" || TRI == NaN){
            reject("El indicador TRI no tiene un valor válido")
        }else if(TIR == null || TIR == "" || TIR == NaN){
            reject("El indicador TIR no tiene un valor válido")
        }else if(LEC == null || LEC == "" || LEC == NaN){
            reject("El indicador LEC no tiene un valor válido")
        }else if(BPM == null || BPM == "" || BPM == NaN){
            reject("El indicador BPM no tiene un valor válido")
        }else if(n == null || n == "" || n == NaN){
            reject("El indicador n no tiene un valor válido")
        }
        else{
            resolve("Ok")
        }
    })
}