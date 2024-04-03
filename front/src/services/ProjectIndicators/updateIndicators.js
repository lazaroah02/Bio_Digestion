import {INDICATORS_MANAGMENT_URL} from '../../settings'
export function updateIndicators({indicatorsId, token, indicators}){
    return fetch(`${INDICATORS_MANAGMENT_URL}${indicatorsId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(indicators)
    })
    .then(res => res.json())
    .then(data => {return data})
}