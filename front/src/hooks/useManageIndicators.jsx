import { useState, useEffect } from "react";

function useManageIndicators({projectId}) {
    const [indicators, setIndicators] = useState(null)
    const [loadingIndicators, setLoading] = useState(false)

    //get project indicators
    useEffect(() => {
        
    },[projectId])

    return ( {indicators} );
}

export default useManageIndicators;