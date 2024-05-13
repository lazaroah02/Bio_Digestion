import {useEffect, useState} from 'react'

export function useLazyLoad({rootId = null, lazyReferenceId = null}) {
    const [showLazyElement, setShow] = useState(false)

    useEffect(() => {
        if(rootId != null && lazyReferenceId != null) {
            const onChange = (entries) => {
                const element = entries[0]
                if(element.isIntersecting){
                    setShow(true)
                }
            }    
    
            const observer = new IntersectionObserver(onChange, {root: document.getElementById(rootId), rootMargin: '50px'}) 
            observer.observe(document.getElementById(lazyReferenceId))
            return () => observer.disconnect()   
        }
    })
    return ( {showLazyElement} );
}

