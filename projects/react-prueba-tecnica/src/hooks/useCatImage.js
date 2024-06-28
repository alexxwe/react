import { useEffect, useState } from "react"
import { getRandomImage } from "../services/facts"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(()=>{
        getRandomImage(fact).then(url => setImageUrl(url))
    }, [fact])
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}