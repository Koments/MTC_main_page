import {Logo} from "../../atoms/logo/Logo";
import {HeaderLeft} from "./components/HeaderLeft/HeaderLeft";
import {HeaderRight} from "./components/HeaderRight/HeaderRight";
import {HeaderDesktopContainer} from "./Header.module";

export const HeaderDesktop = () => {
    return (
        <HeaderDesktopContainer>
            <HeaderLeft />
            <Logo src={"./assets/logo.svg"} alt={"MTK Logo"}/>
            <HeaderRight />
        </HeaderDesktopContainer>
    );
};