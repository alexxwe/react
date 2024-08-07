import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'


export function App(){
    const {fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => { 
        refreshFact()
    }

    return(
        <main>
            <h1>Cats</h1>
            <button onClick={handleClick}>Get new info</button>
            <section>
            {fact && <p> {fact} </p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )
}