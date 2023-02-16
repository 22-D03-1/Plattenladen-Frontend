import Form from "../molecules/Form"
import Input from "../atoms/Input"

import { useState } from "react"

import { useUser } from "../../context/ContextProvider"

import { login } from "../../api"

export default function() {
    const initialState = {
        email: "",
        password: ""
    }
    const [inputValues, setInputValues] = useState(initialState)

    const {putLoggedInUser} = useUser()

    const handleChangeFormValues = (event) => {
        setInputValues((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmit = async () => {
        const user = await login(inputValues)
        if (!user) return alert("huch! da ist etwas schiefgegangen...");

        putLoggedInUser(user.id)

    }

    const loginInputs = [
        (<Input 
            name="email"
            label="Email" 
            type="email" 
            value={inputValues.email}
            onChange={handleChangeFormValues}
        />),
        (<Input
            name="password"
            label="Passwort" 
            type="password" 
            value={inputValues.password}
            onChange={handleChangeFormValues}
        />)
    ]

    return (
        <>
            <Form label="Anmelden" children={loginInputs} onSubmit={handleSubmit}/>
        </>
    )
}