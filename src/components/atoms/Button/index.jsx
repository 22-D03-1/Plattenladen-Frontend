import "./style.scss";

function Button({ onClick, label }) {
    return (
        <button className="Button" onClick={onClick}>{label}</button>
    );
}

export default Button;
