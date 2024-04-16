import styled from "@emotion/styled"

export const HeroContainer = styled.div`
    top: 0;;
    left: 0;;
    right: 0;;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & .hero__background {
        top: 0;
        bottom: 0;
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`