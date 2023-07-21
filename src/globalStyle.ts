import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif, 'Fasthand'; 
    }
    body{
        background-color: #eee;
    }
    button,a{
        transition: 0.5s;
        text-decoration: none;
        background-color: transparent;
        border: none;
        outline: none;
    }
    

`;