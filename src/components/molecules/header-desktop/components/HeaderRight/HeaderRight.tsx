import {Button} from "../../../../atoms/button/Button";
import {HeaderRightLinks} from "../../Data";
import {NavLink} from "../../../../atoms/nav-link/NavLink";
import {HeaderRightContainer} from "./HeaderRight.module";
import {NavLinksContainer} from "../HeaderLeft/HeaderLeft.module";

export const HeaderRight = () => {
    return (
        <HeaderRightContainer>
            <NavLinksContainer>
                {HeaderRightLinks.map(el => <NavLink key={el} title={el} />)}
            </NavLinksContainer>

            <Button type={"outline"} label={"My Order"} icon={"fal fa-shopping-cart"}/>
        </HeaderRightContainer>
    );
};