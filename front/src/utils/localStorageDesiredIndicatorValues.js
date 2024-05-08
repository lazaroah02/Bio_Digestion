export function saveInLocalStorageDesiredIndicatorValues({projectId, VAN_d, TRI_d, TIR_d, LEC_d, BPM_d, n_d}){
    localStorage.setItem(`VAN_d-${projectId}`, VAN_d);
    localStorage.setItem(`TRI_d-${projectId}`, TRI_d);
    localStorage.setItem(`TIR_d-${projectId}`, TIR_d);
    localStorage.setItem(`LEC_d-${projectId}`, LEC_d);
    localStorage.setItem(`BPM_d-${projectId}`, BPM_d);
    localStorage.setItem(`n_d-${projectId}`, n_d);
}

export function getFromLocalStorageDesiredIndicatorValues({projectId}){
    return {
        VAN_d: localStorage.getItem(`VAN_d-${projectId}`),
        TRI_d: localStorage.getItem(`TRI_d-${projectId}`),
        TIR_d: localStorage.getItem(`TIR_d-${projectId}`),
        LEC_d: localStorage.getItem(`LEC_d-${projectId}`),
        BPM_d: localStorage.getItem(`BPM_d-${projectId}`),
        n_d: localStorage.getItem(`n_d-${projectId}`)
    }
}