import {HeaderLeftContainer, NavLinksContainer, SocialLinks} from "./HeaderLeft.mudule";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons/faFacebookF';
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {HeaderLeftLinks} from "../../Data";
import {NavLink} from "../../../../atoms/nav-link/NavLink";

export const HeaderLeft = () => {
    return (
        <HeaderLeftContainer>
            <SocialLinks>
                <a href="/company_kitchens/public">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="/company_kitchens/public">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="/company_kitchens/public">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </SocialLinks>

            <NavLinksContainer>
                {HeaderLeftLinks.map(el => <NavLink title={el} />)}
            </NavLinksContainer>
        </HeaderLeftContainer>
    );
};