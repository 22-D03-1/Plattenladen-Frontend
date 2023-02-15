import { useCart } from "../../context/CartProvider"
import { FiHeart } from "react-icons/fi"
import Button from "../atoms/Button"

import "./Product.scss"

export default function({record}) {

    const { addToCart } = useCart()

    return (
        <div className="product">
            <div className="product-img-container">
                <img className="product-img" src={record.picture}/>
                <FiHeart className="button-wishlist"/>
            </div>
            <h5>{record.artist}</h5>
            <p>{record.title}</p>
            <div className="product-row">
                <span>{record.year}</span>
                <span className="price">{record.price} €</span>
            </div>
            <div>
                <Button onClick={() => addToCart(record.id)} label={"Zum Warenkorb hinzufügen"}/>
            </div>
        </div>
    )
}