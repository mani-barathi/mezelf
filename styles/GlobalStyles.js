import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    :root {
        --darkBg: #222222;
        --textWhite: #f6f6f6;
        --textGrey: #DDDDDD;
        --textPink: #ff005c;
        --textBlue: #00adb5;

    }
    body{
        width:100%;
        min-height:100vh;
        background:var(--darkBg);
        color:var(--textGrey);
        font-family:  'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a{
        text-decoration:none
    }
    button{
        outline:none;
        border:none;
    }
`

export default GlobalStyle