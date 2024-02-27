import './index.css'
import {useState, useEffect} from 'react'
import { CURIOUS_DATA } from './curiousData.js'

function CuriousData() {
    const [data, setData] = useState([CURIOUS_DATA[0], CURIOUS_DATA[1]])

    useEffect(() => {
        const interval = setInterval(() => randomData(), 5000)
        return () => clearInterval(interval)
    },[])

    function randomData(){
        let randomNumber = Math.random()
        let randomIndex = Math.floor(randomNumber * (CURIOUS_DATA.length - 1))
        setData([CURIOUS_DATA[randomIndex], CURIOUS_DATA[randomIndex + 1]])
    }

    return ( 
        <article className = "datos-curiosos-component">
            <header>
                Datos Curiosos
            </header>
            <section>
                <div className = "curious-data-card">
                    <div></div>
                    <div></div>
                    {data[0]}
                </div>
                <div className = "curious-data-card">
                    <div></div>
                    <div></div>
                    {data[1]}
                </div>
            </section>
        </article>
     );
}

export default CuriousData;