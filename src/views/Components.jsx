import { useState } from "react"
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input"
import Form from "../components/molecules/Form";
import InputIcon from "../components/molecules/InputIcon";

export default function ({ records }) {
    const [password, setPassword] = useState("");
    const [search1, setSearch1] = useState("");
    const [search2, setSearch2] = useState("");
    const [search3, setSearch3] = useState("");

    const handlePassword = event => setPassword(event.target.value);

    const handleNext = () => alert("Weiter");
    const handleLogin = () => console.log("Anmelden");

    const handleSearch1 = event => setSearch1(event.target.value);
    const handleSearch2 = event => setSearch2(event.target.value);
    const handleSearch3 = event => setSearch3(event.target.value);

    const handleClickSearch1 = () => alert(search1);
    const handleClickSearch2 = () => alert(search2);
    const handleClickSearch3 = () => alert(search3);

    const handleFormSubmit = () => {
        alert("Submit!");
        console.log({ password });
    };

    console.log({ search1, search2, search3 });

    return (
        <>
            <InputIcon label="Suche 1" name="search1" value={search1} onChange={handleSearch1} onClick={handleClickSearch1} />
            <InputIcon label="Suche 2" name="search2" value={search2} onChange={handleSearch2} onClick={handleClickSearch2} />
            <InputIcon label="Suche 3" name="search3" value={search3} onChange={handleSearch3} onClick={handleClickSearch3} />

            <Button label="Zum Warenkorb hinzufügen" />
            <Button label="Weiter" onClick={handleNext} />
            <Button label="Anmelden" onClick={handleLogin} />

            <Form label="Suche starten" onSubmit={handleFormSubmit}>
                <Input label="Suche" name="search" /><br />
                <Input label="E-Mail-Adresse" name="email" /><br />
                <Input label="Passwort" name="password" type="password" value={password} onChange={handlePassword} /><br />
            </Form>
        </>
    )
}
