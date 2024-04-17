import styled from "@emotion/styled"

export const AppContainer = styled.div`
    @font-face {
        font-family: "Helvetica-Bold";
        font-style: normal;
        font-weight: normal;
        src: url("/assets/fonts/Helvetica-Bold.ttf") format("woff");
    }

    margin: 0 !important;
    font-family: "Roboto", Helvetica, "Helvetica-Bold";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    & *::selection {
        background: #d4b254;
        color: #fff;
        text-shadow: none;
    }

    & button:focus {
        outline: none;
    }

    &::-webkit-scrollbar,
    & *::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track,
    & *::-webkit-scrollbar-track {
        background-color: #d4b254;
    }

    &::-webkit-scrollbar-thumb,
    & *::-webkit-scrollbar-thumb {
        background: #222222;
        border-radius: 10px;
        border: 2px;
        margin: 5px;
    }
`