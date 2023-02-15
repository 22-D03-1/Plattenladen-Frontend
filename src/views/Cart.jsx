import { useCart } from "../context/CartProvider"
import CartItem from "../components/CartItem/CartItem"

export default function({records}) {

    const {cart} = useCart()

    const sumCart = cart.reduce((acc, el)=>{
        const { price } = records.find((r)=> r.id == el.id)
        return acc += (el.amount * price)
    }, 0)

    const shipping = 5.95
    console.log(cart)
    return (
        <>
        {cart.length ?
            <> 
            <h2>Warenkorb</h2>
            {cart.map((c,i)=> (
                <CartItem 
                    key={i} 
                    item={records.find((r)=> r.id == c.id)} 
                    amount={c.amount}
                />
            ))}
            <hr/>
            <div className="cart-sum">
                <span>Versandkosten</span>
                <span>{shipping} €</span>
            </div>
            <div className="cart-sum">
                <span>Gesamtkosten</span>
                <span>{(sumCart + shipping).toFixed(2)} €</span>
            </div>
            </>
        : <p>Ziemlich leer hier</p>}
        </>
    )
}