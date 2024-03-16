import {INDICATORS_MANAGMENT_URL} from '../../settings'

export function getIndicators({projectId, token}){
    return fetch(`${INDICATORS_MANAGMENT_URL}?project=${projectId}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    })
    .then(res => res.json())
    .then(data => {
        return data
    })
}