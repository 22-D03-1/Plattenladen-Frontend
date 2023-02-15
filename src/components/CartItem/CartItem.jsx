import {BiTrash} from "react-icons/bi"
import Counter from "./Counter"
import { useCart } from "../../context/CartProvider"

import "./CartItem.scss"

export default function({item, amount}) {

    const {removeItem} = useCart()

    return (
        <div>
            <div className="cart-item-row">
                <img className="cart-item-img" src={item?.picture}/>
                <div className="cart-item-description">
                    <h5>{item?.artist}</h5>
                    <p>{item?.title}</p>
                </div>
                <div>
                    <p>{(amount * item.price).toFixed(2)}</p>
                </div>
            </div>
            <div className="cart-item-row">
                <p>{item?.price} €</p>
                <Counter amount={amount} id={item.id}/>
                <BiTrash onClick={()=> removeItem(item.id)} size={30}/>
            </div>
        </div>
    )
}