export function saveInLocalStorageDesiredIndicatorValues({VAN_d, TRI_d, TIR_d, LEC_d, BPM_d, n_d}){
    localStorage.setItem("VAN_d", VAN_d);
    localStorage.setItem("TRI_d", TRI_d);
    localStorage.setItem("TIR_d", TIR_d);
    localStorage.setItem("LEC_d", LEC_d);
    localStorage.setItem("BPM_d", BPM_d);
    localStorage.setItem("n_d", n_d);
}

export function getFromLocalStorageDesiredIndicatorValues(){
    return {
        VAN_d: localStorage.getItem("VAN_d"),
        TRI_d: localStorage.getItem("TRI_d"),
        TIR_d: localStorage.getItem("TIR_d"),
        LEC_d: localStorage.getItem("LEC_d"),
        BPM_d: localStorage.getItem("BPM_d"),
        n_d: localStorage.getItem("n_d")
    }
}