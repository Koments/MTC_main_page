import {Logo} from "../../../../atoms/logo/Logo";
import {footerLinks} from "../../Data";
import {FacebookIcon} from "../../../../atoms/icons/FacebookIcon";
import {TwitterIcon} from "../../../../atoms/icons/TwitterIcon";
import {InstagramIcon} from "../../../../atoms/icons/InstagramIcon";
import {FooterDetailContainer} from "./FooterDetail.module";
export const FooterDetail = () => {
    return (
        <FooterDetailContainer>
            <div className="footer__logo">
                <hr/>
                <Logo src={"./assets/logo.svg"} alt={"MTK Logo"}/>
                <hr/>
            </div>

            <div className="footer__nav">
                {footerLinks.map(({title, links}) => (
                    <div key={title} className="nav__column">
                        <div className="footer__title">
                            <h4>{title}</h4>
                        </div>
                        <div className="footer__links">
                            {links.map((link) => (
                                <div key={link}>
                                    <a href="/">{link}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="nav__column">
                    <div className="footer__title">
                        <h4>Follow</h4>
                    </div>
                    <div className="footer__social">
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>

            <div className="footer__copyright">
                <p>Copyright Online MTC Home Kitchens 2021 - All rights reserved.</p>
                <p>Responsive website design, Development & Hosting by mtc.</p>
            </div>
            <hr/>
        </FooterDetailContainer>
    );
};