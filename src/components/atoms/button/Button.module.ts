import styled from "@emotion/styled"

export const ButtonElement = styled.button`
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 13px;
    color: #fff;
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent 0 0 no-repeat padding-box;
    box-sizing: border-box;
    cursor: pointer;

    height: 50px;
    padding-left: 30px;
    padding-right: 30px;
    border: 1px solid #fff;
    border-radius: 25px;

    &:hover {
        background-color: #c8a74b;
        border: 1px solid #c8a74b;
    }

    & i {
        padding-left: 5px;
    }

    &.accent-fill {
        background-color: #d4b254;
        border: none;
        box-shadow: 0 2px 10px #00000033;

        &:hover {
            border: none;
            background-color: #c8a74b;
            box-shadow: 0 2px 5px #00000040;
        }
    }
`