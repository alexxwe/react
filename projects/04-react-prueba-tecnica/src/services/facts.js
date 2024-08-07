const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

//convert to async function
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

export const getRandomImage = (fact) => {
    if(!fact) return Promise.resolve(null)

        // const threeFirstWords = fact.split(' ').slice(0,3).join(' ')
        const threeFirstWords = fact.split(' ', 3).join(' ')

        return fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${threeFirstWords}`
                return url
            })
}