import styled from "@emotion/styled"

export const HeaderRightContainer = styled.div`
    @include flex-center;
    justify-content: space-between;
    flex: 0.35;
    width: 100%;
    @include transition-all;
    @media (max-width: 1330px) {
        flex: 0.4;
    }
`