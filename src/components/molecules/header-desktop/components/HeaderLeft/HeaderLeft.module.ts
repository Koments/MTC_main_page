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

    @media (max-width: 1024px) {
        flex: none;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
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

        &:hover,
        &:hover svg {
            color: #d4b254
        }
    }
`

export const NavLinksContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    & a {
        padding-right: 35px;
        color: #fff;
        text-decoration: none;

        &:last-child {
            padding-right: 0;
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        
        & a {
            margin-bottom: 30px;
            padding-right: 0;
        }
        
        & a:first-of-type {
            margin-top: 30px;
        }
    }
`