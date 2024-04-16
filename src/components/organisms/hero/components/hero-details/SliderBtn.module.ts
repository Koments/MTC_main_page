import styled from "@emotion/styled"

export const HeroDetailsContainer = styled.span`
    max-width: 686px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 1024px) {
        & .details__large {
            font-size: 42px;
            line-height: 48px;
        }
    }
    @media (max-width: 400px) {
        & .details__large {
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 12px;
        }
    }
    @media (max-width: 450px) {
        & {
            padding-top: 20px;
            max-width: 80%;
        }
    }

    & .details__small {
        color: #fff;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 13px;
        text-shadow: 0 0 4px #000000;
    }

    & .details__desktop {
        color: #fff;
        text-align: center;

        font-size: 52px;
        line-height: 58px;
        letter-spacing: -1px;
        text-shadow: 0 0 25px #00000080;

        margin-bottom: 30px;
        margin-top: 12px;
    }

    & button {
        box-shadow: 0 2px 10px #00000033;
    }

    @media (max-width: 1024px) {
        & .details__desktop {
            font-size: 42px;
            line-height: 48px;
        }
    }
    @media (max-width: 400px) {
        & .hero__details .details__desktop {
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 12px;
        }
    }
    @media (max-width: 450px) {
        padding-top: 20px;
        max-width: 80%;
    }
`
