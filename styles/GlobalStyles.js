import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    :root {
        --darkBg: #222222;
        --mediumDarkBg: #424949;
        --lightBg: #B3B6B7;
        --navBarBg: #202020;
        --textWhite: #f6f6f6;
        --textGrey: #DDDDDD;
        --textPink: #ff005c;
        --textBlue: #00adb5;

        --facebook: #0084ff;
        --linkedin: #0077B5;
        --twitter: #1da1f2;
        --instagram: rgb(235,76,76);
    }
    body{
        width:100%;
        min-height:100vh;
        background:var(--darkBg);
        color:var(--textGrey);
        font-family:  'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a{
        text-decoration:none;
        font-family:  'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    button,input,textarea{
        outline:none;
        border:none;
        font-family:  'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export default GlobalStyle