import styled from "@emotion/styled"

export const HeaderSmallContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    height: 80px;
    width: 100%;
    margin-left: 30px;
    margin-right: 30px;
    border-bottom: 1px solid #fff;
    opacity: 0.5;
    
    .HeaderSmallContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background-color: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }

    .SmallScreen {
        flex: 0 0 auto;
    }

    .Logo {
        width: 100px;
        height: auto;
    }


    .menu__icon {
        display: block;
        width: 24px;
        height: 2px;
        background-color: #333;
        transition: background-color 0.3s ease;
    }

    .menu__icon::before,
    .menu__icon::after {
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background-color: #333;
        transition: transform 0.3s ease;
    }

    .menu__icon::before {
        transform: translateY(-8px);
    }

    .menu__icon::after {
        transform: translateY(8px);
    }

    .menu__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .menu__overlay.open {
        opacity: 1;
        visibility: visible;
    }
    
    @media (min-width: 1024px) {
        display: none;
    }
    & .header__menuIcon {
        z-index: 10;
        cursor: pointer;
        float: right;
        padding: 1.5rem 1.25rem;
        position: relative;
        user-select: none;

        & .menu__icon {
            background-color: #fff;
            display: block;
            height: 2px;
            position: relative;
            
            width: 30px;

            &:before,
            &:after {
                background-color: #fff;
                content: "";
                display: block;
                height: 100%;
                position: absolute;
                transition: all 0.4s ease-in-out;
                width: 100%;
            }

            &:before {
                top: 10px;
            }
            &:after {
                top: -10px;
            }
        }
    }

    & .menu__icon {
        background: transparent;

        &:before {
            transform: rotate(-45deg);
        }
        &:after {
            transform: rotate(45deg);
        }
    }
    &:not(.steps) .menu__icon {
        &:before,
        &:after {
            top: 0;
        }
    }
`

export const SmallScreen = styled.div``
