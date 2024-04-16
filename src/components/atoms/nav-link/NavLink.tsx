import {NavLinkProps} from "./Types";

export const NavLink = ({title}: NavLinkProps) => {
    return (
        <a href="/">{title}</a>
    );
};