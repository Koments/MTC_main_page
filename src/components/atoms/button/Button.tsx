import {ButtonProps} from "./Types";
import {ButtonElement} from "./Button.module";

export const Button = ({type, label, icon, onClick}: ButtonProps) => {
    return (
        <ButtonElement className={`btn ${type}`} onClick={onClick}>
            {label}
            {icon && <i className={icon}></i>}
        </ButtonElement>
    );
};