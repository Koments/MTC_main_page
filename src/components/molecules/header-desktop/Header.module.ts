import styled from "@emotion/styled"
export const HeaderDesktopContainer = styled.div`
    padding-top: 20px;
    height: 80px;
    border-bottom: 1px solid #fff;
    opacity: 0.5;
    width: clamp(300px, 100%, 1300px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1330px) {
        margin-left: 30px;
        margin-right: 30px;
    }

    @media (max-width: 1024px) {
        display: none;
        transition: all 0.5s linear;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        top: 0;
        height: calc(100vh - 20px);
        background-color: #c8a74b;
        opacity: 0.9;

        & .header__left,
        & .header__right {
            flex: none;
            flex-direction: column;
            align-items: center;

            &.header__left {
                margin-top: 30px;

                & .header__navLinks a:first-of-type {
                    margin-top: 30px;
                }
            }

            &.header__right button {
                margin: 0;
            }

            & .header__navLinks {
                flex-direction: column;
                align-items: center;

                & a {
                    margin-bottom: 30px;
                    padding-right: 0;;
                }
            }
        }
    }
`