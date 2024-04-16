import {Button} from "../../../../atoms/button/Button";
import {NavLinksContainer} from "../HeaderLeft/HeaderLeft.mudule";
import {HeaderLeftLinks, HeaderRightLinks} from "../../Data";
import {NavLink} from "../../../../atoms/nav-link/NavLink";
import {HeaderRightContainer} from "./HeaderRight.module";

export const HeaderRight = () => {
    return (
        <HeaderRightContainer className="header__right">
            <NavLinksContainer>
                {HeaderRightLinks.map(el => <NavLink title={el} />)}
            </NavLinksContainer>

            <Button type={"outline"} label={"My Order"} icon={"fal fa-shopping-cart"}/>
        </HeaderRightContainer>
    );
};