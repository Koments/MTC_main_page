import {Button} from "../../atoms/button/Button";
import {Logo} from "../../atoms/logo/Logo";
import {HeaderContainer} from "../../organisms/header-wrapper/HeaderWrapper.modules";
import {HeaderLeft} from "./components/HeaderLeft/HeaderLeft";
import {HeaderRight} from "./components/HeaderRight/HeaderRight";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft />
            <Logo src={"/assets/logo.svg"} alt={"MTK Logo"}/>
            <HeaderRight />
        </HeaderContainer>
    );
};