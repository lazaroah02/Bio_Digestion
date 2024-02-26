import {useState, useEffect} from 'react'
import img1 from "../../assets/bioImages/01.webp"
import img2 from "../../assets/bioImages/02.webp"
import img3 from "../../assets/bioImages/03.webp"
import img4 from "../../assets/bioImages/04.webp"
import img5 from "../../assets/bioImages/05.webp"

const images = [
    img1, img2, img3, img4, img5
]

function RandomImagesSlider() {
    const [image, setImage] = useState(img1)

    useEffect(() => {
        const interval = setInterval(() => randomImage(), 5000)
        return () => clearInterval(interval)
    },[])

    function randomImage(){
        let randomNumber = Math.random()
        let randomIndex = Math.floor(randomNumber * images.length)
        setImage(images[randomIndex])
    }

    return ( 
        <img style = {{width: '100%', height: '100%', objectFit:'cover', borderRadius:'15px'}} alt = "image" src = {image}/>
     );
}

export default RandomImagesSlider;