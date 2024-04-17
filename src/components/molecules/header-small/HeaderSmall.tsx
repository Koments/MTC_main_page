import {Logo} from "../../atoms/logo/Logo";
import {HeaderSmallContainer, SmallScreen} from "./HeaderSmall.module";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {changeBurgerActiveStatus} from "../../../store/burgerSlice";
import {stateProps} from "../../../store/types";

export const HeaderSmall = () => {
    const activeStatus = useSelector((state: stateProps) => state.burgerState.burgerStatus)
    const dispatch = useDispatch()
    const toggleMenu = () => {
        dispatch(changeBurgerActiveStatus(activeStatus))
    }

    return (
        <HeaderSmallContainer>
            <SmallScreen>
                <Logo src={'./assets/logo.svg'} alt={'MTK Logo'} />
            </SmallScreen>

            <label className="header__menuIcon" htmlFor="menu-btn" onClick={toggleMenu}>
                <span className="menu__icon"></span>
            </label>

            {/*<div className={`menu__overlay ${isMenuOpen ? 'open' : ''}`}>*/}
            {/*    <button className="menu__closeButton" onClick={closeMenu}></button>*/}

            {/*    <div className={`center`}>*/}
            {/*        <Logo src={'./assets/logo.svg'} alt={'MTK Logo'} />*/}
            {/*    </div>*/}

            {/*    <nav className="menu__nav">*/}
            {/*        <a href="/" className="menu__link">Shop</a>*/}
            {/*        <a href="/" className="menu__link">Plan My Kitchen</a>*/}
            {/*        <a href="/" className="menu__link">MTK Logo</a>*/}
            {/*        <a href="/" className="menu__link">Gallery</a>*/}
            {/*    </nav>*/}
            {/*</div>*/}
        </HeaderSmallContainer>
    );
};