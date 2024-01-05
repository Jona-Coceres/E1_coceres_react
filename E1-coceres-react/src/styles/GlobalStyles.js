import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --orange-bg: #2f2618;
        --orange: #ff9d01;
        --card-grey: #e9e9e9;
        --magenta: #ff005c;
        --gray-bg: #2b2b2c;
        --btn-gradient: linear-gradient(82deg,#ffa100,#fb103d);
        --btn-gradient-secondary: linear-gradient(140deg,#3b3022,#3b2329);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #f1f1f1;
        font-family: "Poppins",sans-serif;
        color: #747474;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #ff8a3c;
    }
    a:visited {
        color:white;
    }
    li {
        list-style: none;
    }
`;
