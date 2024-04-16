import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons/faFacebookF';
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {HeaderLeftLinks} from "../../Data";
import {NavLink} from "../../../../atoms/nav-link/NavLink";
import {HeaderLeftContainer, NavLinksContainer, SocialLinks} from "./HeaderLeft.module";

export const HeaderLeft = () => {
    return (
        <HeaderLeftContainer>
            <SocialLinks>
                <a href="/">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </SocialLinks>

            <NavLinksContainer>
                {HeaderLeftLinks.map(el => <NavLink key={el} title={el} />)}
            </NavLinksContainer>
        </HeaderLeftContainer>
    );
};