'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #F2F5F8;
        overflow-x: hidden;
        min-height: 100vh;
        min-width: 100vw;
        max-width: 100vw;
        width: 100vw;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
        text-rendering: optimizeLegibility;
    }
`