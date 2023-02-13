import Button from "../../atoms/Button";

function Form({ label = "Absenden", onSubmit, children }) {
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
            <Button onClick={handleSubmit} label={label} />
        </form>
    );
}

export default Form;
