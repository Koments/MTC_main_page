import {ImageProps} from "./Types";
import {LogoContainer, LogoElement} from "./Logo.module";

export const Logo = ({src, alt}: ImageProps) => {
    return (
        <LogoContainer>
            <LogoElement src={src} alt={alt}/>
        </LogoContainer>
    );
};