import styled from "@emotion/styled"

export const HeroSliderBtnContainer = styled.div`
    position: absolute;
    display: flex;
    bottom: 30px;

    & .sliderBtn {
        cursor: pointer;
        display: block;
        content: "";
        width: 50px;
        height: 5px;
        border-radius: 3px;

        margin-right: 5px;

        &:last-child {
            margin-right: 0;
        }

        background-color: #fff;
        transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);

        &.active,
        &:hover {
            background-color: #d4b254;
        }
    }
`