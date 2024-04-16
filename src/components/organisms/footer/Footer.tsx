import {Logo} from "../../atoms/logo/Logo";
import {FooterDetail} from "./components/footer-detail/FooterDetail";
import {FooterContainer} from "./Footer.module";

export const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer__background">
                <Logo
                    src={"/assets/footer.png"}
                    alt={"MTC Home Kitchens"}
                />
            </div>

            <FooterDetail/>
        </FooterContainer>
    );
};