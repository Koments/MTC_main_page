import styled from "@emotion/styled"

export const GalleryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & .gallery__title {
        margin-top: 50px;

        & h3 {
            font-size: 32px;
            text-align: center;
            line-height: 42px;
            color: #222222;
        }
    }

    overflow: hidden;

    & .gallery__images {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        & img {
            width: 310px;
            margin: 10px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    & .gallery__button-container button {
        margin-top: 20px;
        margin-bottom: 100px;
        box-shadow: none;

        &:hover {
            box-shadow: none;
        }
    }

    @media (max-width: 450px) {
        & .gallery__images {
            flex-direction: column;
            width: clamp(200px, 80vw, 310px);

            & img {
                width: clamp(200px, 80vw, 310px);
                margin-left: 0;
                margin-right: 0;
                object-fit: contain;
            }
        }
    }`