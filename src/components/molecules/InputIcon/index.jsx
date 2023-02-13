import { GoSearch } from "react-icons/go";
import Input from "../../atoms/Input";
import "./style.scss";

function InputIcon({ label, name, value, onChange, onClick }) {
    return (
        <div className="InputIcon">
            <Input label={label} name={name} onChange={onChange} value={value} />
            <div className="InputIcon__Icon" onClick={onClick}>
                <GoSearch />
            </div>
        </div>
    );
}

export default InputIcon;
