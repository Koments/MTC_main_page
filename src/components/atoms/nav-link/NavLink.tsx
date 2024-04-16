import {NavLinksContainer} from "./NavLinks.mudule";
import {NavLinksProps} from "../../molecules/header/Types";

export const NavLinks = ({title}: NavLinksProps) => {
    return (
        <NavLinksContainer>
            <a href="/">{title}</a>
        </NavLinksContainer>
    );
};