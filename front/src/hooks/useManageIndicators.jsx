import { useState, useEffect, useContext } from "react";
import { getIndicators } from "../services/ProjectIndicators/getIndicators";
import { updateIndicators } from "../services/ProjectIndicators/updateIndicators";
import AuthenticationContext from '../contexts/authenticationContext'

export function useManageIndicators({projectId}) {
    const [indicators, setIndicators] = useState(null)
    const [loadingIndicators, setLoading] = useState(false)
    const [hasFetched, setHasFetched] = useState(false);
    const {auth} = useContext(AuthenticationContext)

    //get project indicators
    useEffect(() => {
        setLoading(true)
        getIndicators({projectId: projectId, token:auth.token})
        .then(data => {
            setIndicators(data[0])
            setHasFetched(true)
        })
        .catch(err => {})
        .finally(() => {setLoading(false)})
    },[projectId])

    //every time the indicator's values change, save them in database
    useEffect(() => {
        //evoid effect execution in first fetch
        if (hasFetched) {
            saveIndicatorsValuesInDatabase();
        }
    }, [indicators]);

    //save project indicator values in database 
    function saveIndicatorsValuesInDatabase(){
        updateIndicators({indicatorsId:indicators?.id, token:auth.token, indicators:indicators})
        .then(res => {})
        .catch(err => {})
    }

    //update indicator value
    function updateIndicatorValue({indicatorName, newValue}){
        setIndicators((prev) => ({...prev, [indicatorName]:newValue}))
    }

    return ( {indicators, updateIndicatorValue, loadingIndicators} );
}
