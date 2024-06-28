import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact, getRandomImage } from "./services/facts"


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App(){
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [factError, setFactError] = useState()

    //efecto para recuperar la petición al renderizar la pagina
    //getRandomFact using .then
    useEffect(()=>{
         getRandomFact().then(setFact)
    }, [])

    //efecto para recuperar la imagen cada vez que tenemos una petición nueva
    useEffect(()=>{
            getRandomImage(fact).then(url => setImageUrl(url))
    }, [fact])

    //getRandomFact using async await
    const handleClick = async () => { 
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return(
        <main>
            <h1>Cats</h1>
            <button onClick={handleClick}>Get new info</button>
            <section>
            {fact && <p> {fact} </p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )
}