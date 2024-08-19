import { useId, useState } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filters () {
    const { setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Min Price</label>
                <input 
                type="range"
                id={minPriceFilterId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='beauty'>Beauty</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='furniture'>Furniture</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </section>
    )
}