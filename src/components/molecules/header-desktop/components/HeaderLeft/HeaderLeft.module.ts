import styled from "@emotion/styled"

export const HeaderLeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.35;
    width: 100%;
    @media (max-width: 1330px) {
        flex: 0.4;
    }
`

export const SocialLinks = styled.div`
    width: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & svg {
        font-weight: 100;
        font-size: 16px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);

        &:hover,
        &:hover svg {
            color: #d4b254
        }
    }
`

export const NavLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
        padding-right: 35px;

        &:last-child {
            padding-right: 0;
        }
    }
`