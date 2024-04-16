import styled from "@emotion/styled"

export const FooterDetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    height: 100%;
    opacity: 0.8;

    & .footer__logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: clamp(300px, 90%, 1300px);

        & img {
            padding-left: 20px;
            padding-right: 20px;
        }

        & hr {
            width: clamp(100px, 40%, 1300px);
        }
    }

    & .footer__nav {
        width: clamp(300px, 80%, 1000px);
        display: flex;
        justify-content: space-between;

        & .nav__column {
            & .footer__title {
                & h4 {
                    color: #fff;
                    font-size: 24px;
                }
            }

            & .footer__links {
                & a {
                    text-align: center;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 13px;
                    color: #fff;
                    
                    opacity: 0.6;
                    letter-spacing: 3px;
                    line-height: 30px;

                    &:hover {
                        color: #d4b254;
                    }
                }
            }

            & .footer__social {
                & svg {
                    fill: #fff;
                    padding-right: 10px;
                    cursor: pointer;
                    

                    &:hover {
                        fill: #d4b254;
                    }

                    &:last-child {
                        padding: 0;
                    }
                }
            }
        }
    }

    & .footer__copyright {
        margin-top: 48px;

        & p {
            margin-top: 0;
            text-align: center;
            font-size: 13px;
            color: #fff;
            opacity: 0.5;
        }
    }

    & hr {
        width: clamp(100px, 90%, 1300px);
        border: 1px solid #fff;
        opacity: 0.15;
    }

    @media (max-width: 1024px) {


        & .footer__nav {
            flex-wrap: wrap;
        }

        & .footer__logo {
            & hr {
                width: 30%;
            }
        }

        & .footer__copyright {
            margin-top: 20px;
        }
    }

    & .nav__column {
        margin-right: 30px;
    }

    & .footer__background {
        height: 100%;
    }

    @media (max-width: 450px) {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        & .footer__copyright {
            margin-top: 20px;
            max-width: 80%;
        }

        & .footer__background {
            height: 100%;
        }
    }
`