import styled from "@emotion/styled"

export const DiscoveryDetailsContainer = styled.span`
    flex: 0.5;
    left: 50%;

    & .details__block {
        
        width: clamp(420px, 40vw, 650px);
        padding-left: 70px;
    }

    & .discovery__subtitle {
        & p {
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 13px;
            text-align: left;
            color: #d4b254;
        }
    }

    & .discovery__title {
        & h2 {
            font-family: "Helvetica-Bold";
            color: #222222;
            font-size: 42px;
            line-height: 52px;
            margin: 0;
            
        }
    }

    & .discovery__text {
        & p {
            
            font-size: 15px;
            line-height: 24px;
            letter-spacing: normal;
            color: #777777;
        }
    }

    & .discovery__btn-container button {
        box-shadow: none;
    }

    @media (max-width: 1300px) {
        & .details__block {
            padding-left: 40px;
        }

        & .discover__title h2 {
            font-size: 36px;
            line-height: 42px;
            margin: 0;
        }

        & p:first-of-type {
            margin-bottom: 5px;
        }

        & p:last-child {
            margin-top: 5px;
        }
    }

    @media (max-width: 1024px) {
        flex: none;
        left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;

        & .details__block {
            width: clamp(300px, 80%, 650px);
            padding-left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            & p,
            & h2 {
                text-align: center;
            }
        }
    }
`
