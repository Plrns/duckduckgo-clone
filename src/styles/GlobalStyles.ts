import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
        background: #1c1c1c;
    }

    *, button, input{
        border: 0;
        background: none;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        color: #bdc3c7;
        font-weight: normal;
        transition: color 0.2s ease-out;
    }
    ul{
        list-style: none;
    }
`;
