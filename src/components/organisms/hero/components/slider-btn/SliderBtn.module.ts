import styled from "@emotion/styled"

export const SliderBtnElement = styled.span`
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
    

    &.active,
    &:hover {
        background-color: #d4b254;
    }
`
