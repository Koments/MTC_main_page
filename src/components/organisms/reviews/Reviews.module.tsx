import styled from "@emotion/styled"

export const ReviewWrapper = styled.div`
    background-color: #eeeeee;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: max-content;
    }
`

export const ReviewsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(300px, 100%, 1300px);

    & .reviews__btnPrev,
    & .reviews__btnNext {
        cursor: pointer;
        margin-left: 5%;
        margin-right: 5%;

        &:hover {
            & svg {
                fill: #c8a74b;
            }
        }

        & svg {
            fill: #d4b254;
        }
    }

    & .reviews__btnNext {
        transform: rotate(180deg);
    }

   

    @media (max-width: 768px) {
        width: clamp(300px, 100%, 768);
        padding-top: 50px;
        padding-bottom: 50px;
        & .reviews__btnPrev,
        & .reviews__btnNext {
            height: 50px;
            cursor: pointer;
            margin-left: 2.5%;
            margin-right: 2.5%;

            &:hover {
                & svg {
                    fill: #c8a74b;
                }
            }

            & svg {
                height: 50px;
                fill: #d4b254;
            }
        }

        & button {
            content: "FAQ";
        }

        & .review__title {
            & h3 {
                font-size: 24px;
            }
        }
    }

    @media (max-width: 350px) {
        & .reviews__btnPrev,
        & .reviews__btnNext {
            height: 30px;

            & svg {
                width: 30px;
                height: 30px;
            }
        }

        & .reviews__btnPrev {
            margin-right: -2.5%;
        }

        & .reviews__btnNext {
            margin-left: -2.5%;
        }
    }
`