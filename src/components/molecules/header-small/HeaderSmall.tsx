import { Logo } from "../../atoms/logo/Logo";
import { HeaderSmallContainer, SmallScreen } from "./HeaderSmall.module";
import { useState } from "react";

export const HeaderSmall = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <HeaderSmallContainer>
            <SmallScreen>
                <Logo src={'./assets/logo.svg'} alt={'MTK Logo'} />
            </SmallScreen>

            <label className="header__menuIcon" htmlFor="menu-btn" onClick={toggleMenu}>
                <span className="menu__icon"></span>
            </label>

            <div className={`menu__overlay ${isMenuOpen ? 'open' : ''}`}>
                <button className="menu__closeButton" onClick={closeMenu}></button>

                <div className={`center`}>
                    <Logo src={'./assets/logo.svg'} alt={'MTK Logo'} />
                </div>

                <nav className="menu__nav">
                    <a href="/" className="menu__link">Shop</a>
                    <a href="/" className="menu__link">Plan My Kitchen</a>
                    <a href="/" className="menu__link">MTK Logo</a>
                    <a href="/" className="menu__link">Gallery</a>
                </nav>
            </div>
        </HeaderSmallContainer>
    );
};