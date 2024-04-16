import {HeaderComponentContainer} from "./Header.modules";
import {InputCheckbox} from "../../atoms/input-checkbox/InputCheckbox";
import {Header} from "../../molecules/header/Header";
import {HeaderSmall} from "../../molecules/header-small/HeaderSmall";

export const HeaderComponent = () => {
    return (
        <HeaderComponentContainer>
            <InputCheckbox />
            <HeaderSmall />
            <Header />
        </HeaderComponentContainer>
    );
};