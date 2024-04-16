import styled from "@emotion/styled"

export const FooterContainer = styled.div`
    max-width: 100vw;
    height: 496px;
    left: 0;
    right: 0;
    box-sizing: border-box;

    & .footer__background {
        position: absolute;
        width: 100%;
        z-index: -1;
        margin-bottom: 0;
        background-color: #222222;
        height: 496px;
        
        img {
            opacity: 0.8;
            z-index: 0;
            overflow: hidden;
            max-width: 100%;
            height: 100%;
            object-fit: cover;
            mix-blend-mode: difference;
        }
    }

    @media (max-width: 1024px) {
        box-sizing: border-box;
        height: 600px;
        & .footer__details {

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
            height: 600px;
        }
    }

    @media (max-width: 768px) {
        height: 650px;
        & .footer__background {
            height: 650px;
        }
    }

    @media (max-width: 450px) {
        bottom: 0;
        & .footer__background {
            height: 700px;
        }

        align-items: center;

        & .nav__column {
            margin-right: 15px;
        }
    }
`