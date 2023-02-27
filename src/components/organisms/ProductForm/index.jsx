import { useState } from "react";
import Input from "../../atoms/Input";
import Form from "../../molecules/Form";

function ProductForm({ product, label = "Produkt hinzufügen", action }) {
    const initialState = {
        title: product?.title || "",
        artist: product?.artist || "",
        year: product?.year || 0,
        picture: product?.picture || "",
        price: product?.price || 0,
    };

    const [formValues, setFormValues] = useState(initialState);

    const handleSubmit = async () => {
        const success = await action({ 
            ...formValues,
            id: product?.id, 
            year: parseInt(formValues.year), 
            price: parseFloat(formValues.price)
        });
        if (!success) return alert("huch! da ist etwas schiefgegangen...");

        setFormValues(initialState);
    };

    const handleChangeFormValues = (event) => {
        setFormValues((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <Form label={label} onSubmit={handleSubmit}>
            <Input label="Titel" name="title" value={formValues.title} onChange={handleChangeFormValues} />
            <Input label="Künstler" name="artist" value={formValues.artist} onChange={handleChangeFormValues} />
            <Input label="Jahr" name="year" type="number" value={formValues.year} onChange={handleChangeFormValues} />
            <Input label="Bild" name="picture" value={formValues.picture} onChange={handleChangeFormValues} />
            <Input label="Preis" name="price" type="number" value={formValues.price} onChange={handleChangeFormValues} />
        </Form>
    );
}

export default ProductForm;
