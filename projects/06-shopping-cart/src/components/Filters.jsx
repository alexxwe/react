import { useState } from "react"

export function Filters () {
    const [minPrice, setMinPrice] = useState(0)
    
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Min Price</label>
                <input 
                type="range"
                id="price"
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
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