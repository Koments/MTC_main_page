import styled from "@emotion/styled"

export const DiscoveryContainer = styled.div`
    display: flex;
    align-items: center;
    max-height: 940px;

    & .discover__image {
        flex: 0.5;

        & img {
            width: 100%;
        }
    }

  
    @media (max-width: 1300px) {
        height: clamp(667px, 100%, 800px);
    }

    @media (max-width: 1024px) {
        flex-direction: column;

        & .discover__image {
            display: none;
            order: 1;

            & img {
                display: none;
            }
        }
    }
`
