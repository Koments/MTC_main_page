import {HeaderSmall} from "../../molecules/header-small/HeaderSmall";
import {HeaderContainer} from "./HeaderWrapper.modules";
import {HeaderDesktop} from "../../molecules/header-desktop/Header";

export const HeaderWrapper = () => {
    return (
        <HeaderContainer>
            <HeaderSmall />
            <HeaderDesktop />
        </HeaderContainer>
    );
};