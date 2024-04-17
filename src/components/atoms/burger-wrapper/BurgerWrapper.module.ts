import styled from "@emotion/styled"

export const BurgerContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    transition: opacity 0.3s ease 0s, visibility 0.3s ease 0s;
    z-index: 1;
    
    .menu__overlay.open {

    
    }

    .center {
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    
    .menu__closeButton {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #fff;
        font-size: 24px;
        line-height: 1;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu__closeButton:hover {
        color: #FF4500; /* Цвет при наведении */
    }

    .menu__closeButton::before,
    .menu__closeButton::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: currentColor;
    }

    .menu__closeButton::before {
        transform: rotate(45deg);
    }

    .menu__closeButton::after {
        transform: rotate(-45deg);
    }

    /* Удаление стандартного фокусного эффекта */
    .menu__closeButton:focus {
        outline: none;
    }

    .menu__link {
        font-size: 1.5rem;
        margin: 1rem 0;
        color: #ffffff;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .menu__link:hover {
        color: #FF4500;
    }


    .menu__nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 35%;
        margin-top: 60px;
    }
`