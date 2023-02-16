import { createContext, useState, useContext } from "react";

export const Context = createContext()

function getContext() {
    const context = useContext(Context)

    if(!context) {
        throw new Error("useCart needs to be used within Cart Context")
    }
    return context
}

export function useCart() {
    const context = getContext()

    const {cart, setCart} = context

    const addToCart = (id) => {
        const indexOfProduct = cart.findIndex(el => el.id == id)
        if(indexOfProduct >= 0) {
            cart[indexOfProduct]["amount"] += 1 
        } else {
            cart.push({
                id, amount: 1
            })
        }

        setCart([
            ...cart,
        ])
    }

    const removeItem = (id) => {
        const newCart = cart.filter((el) => el.id != id)
        setCart(newCart)
    }

    const increaseAmount = (id) => {
        const indexOfProduct = cart.findIndex(el => el.id == id)
        cart[indexOfProduct]["amount"] += 1

        setCart([...cart])
    }

    const decreaseAmount = (id) => {
        const indexOfProduct = cart.findIndex(el => el.id == id)
        if(cart[indexOfProduct]["amount"] == 1) return
        cart[indexOfProduct]["amount"] -= 1

        setCart([...cart])
    }

    return {
        ...context,
        addToCart,
        removeItem,
        increaseAmount,
        decreaseAmount
    }
}

export function useRecords() {
    const context = getContext()

    const {records, setRecords} = context

    const putRecords = (data) => {
        setRecords(data)
    }

    return {
        records,
        putRecords
    }
}

export function useUser() {
    const context = getContext()

    const {loggedInUser, setLoggedInUser} = context

    const putLoggedInUser = (id) => {
        setLoggedInUser(id)
    }

    return {
        loggedInUser,
        putLoggedInUser
    }
}

export default function ContextProvider({children}) {

    const [cart, setCart] = useState([])
    const [records, setRecords] = useState([])
    const [loggedInUser, setLoggedInUser] = useState("")

    return (
        <Context.Provider
            value={{
                cart, 
                setCart,
                records,
                setRecords,
                loggedInUser,
                setLoggedInUser,
            }}
        >
            {children}
        </Context.Provider>
    )
}