import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, } = useCart()

    return(
        <>
        <label className="cart-button" htmlFor={ cartCheckboxId }>
            <CartIcon />
        </label>
        <input id={ cartCheckboxId } type="checkbox" hidden />
        
        <aside className="cart">
            <ul>
                <li>
                    <img src="https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png" alt="Apple"/>
                    <div>
                        <strong>Apple</strong> $1.99
                    </div>
                    <footer>
                        <small>
                            Qty:1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
        <button onClick={clearCart} >
            <ClearCartIcon />
        </button>
        </aside>
        </>
    )
}