import "./style.scss";

function Input({ label, name, type = "text", onChange, value }) {
    return (
        <label className="Input">
            {label}
            <input type={type} placeholder={label} name={name} onChange={onChange} value={value} />
        </label>
    );
}

export default Input;
