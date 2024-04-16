import styled from "@emotion/styled"

export const HeaderRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.35;
    width: 100%;
    @media (max-width: 1330px) {
        flex: 0.4;
    }

    @keyframes fadeIn {
        0% {
            height: 0;
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        0% {
            display: flex;
            opacity: 1;
        }
        99% {
            display: flex;
        }
        100% {
            opacity: 0;
            height: 0;
            display: none;
        }
    }
`