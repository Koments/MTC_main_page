import styled from "@emotion/styled"

export const ReviewsDetailContainer = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;

    & .review__subtitle {
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 13px;
        color: #d4b254;

        & p {
            margin-top: 0;
        }
    }

    & .review__title {
        & h3 {
            font-size: 32px;
            text-align: center;
            line-height: 42px;
            color: #222222;
            margin: 0;
        }
    }

    & .review__text {
        color: #777777;
        font-size: 18px;
        text-align: center;
        line-height: 32px;

        p {
            margin-bottom: 0;
        }
    }

    & .review__author {
        font-size: 13px;
        color: #777777;
        text-align: center;
    }

    & button {
        margin-top: 10px;
        box-shadow: none;

        &:hover {
            box-shadow: none;
        }
    }
`