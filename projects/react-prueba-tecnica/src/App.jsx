import { useEffect, useState } from "react"
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App(){
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [factError, setFactError] = useState()

    //efecto para recuperar la petición al renderizar la pagina
    useEffect(()=>{
         fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => {
                if(!res.ok){
                    setFactError('No se ha podido recuperar la petición')
                }
                return res.json()
            })
            .then(data => {
                const { fact } = data
                setFact(fact)

                
            })
    }, [])

    //efecto para recuperar la imagen cada vez que tenemos una petición nueva
    useEffect(()=>{
        if(!fact) return
        // const threeFirstWords = fact.split(' ').slice(0,3).join(' ')
        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${threeFirstWords}`
                setImageUrl(url)
            })
    }, [fact])

    return(
        <main>
            <h1>Cats</h1>
            <section>
            {fact && <p> {fact} </p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )
}