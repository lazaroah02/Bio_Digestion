import { useState, useEffect, useContext } from "react";
import { getIndicators } from "../services/ProjectIndicators/getIndicators";
import AuthenticationContext from '../contexts/authenticationContext'

export function useManageIndicators({projectId}) {
    const [indicators, setIndicators] = useState(null)
    const [loadingIndicators, setLoading] = useState(false)
    const {auth} = useContext(AuthenticationContext)

    //get project indicators
    useEffect(() => {
        setLoading(true)
        getIndicators({projectId: projectId, token:auth.token})
        .then(data => {
            setIndicators(data[0])
        })
        .catch(err => {})
        .finally(() => {setLoading(false)})
    },[projectId])

    return ( {indicators, loadingIndicators} );
}
