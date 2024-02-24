import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 62.5%;
    }
    
    h1, h2, h3, h4 ,h5, h6, nav * {
        font-family: "audiowide", sans-serif;
    }

`