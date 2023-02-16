import "./Counter.scss"
import { useCart } from "../../context/ContextProvider"

export default function({amount, id}) {
    const {increaseAmount, decreaseAmount} = useCart()
    return (
        <>
            <div className="counter">
                <span onClick={()=> decreaseAmount(id)}>-</span>
                <span>{amount}</span>
                <span onClick={()=> increaseAmount(id)}>+</span>
            </div>
        </>
    )
}