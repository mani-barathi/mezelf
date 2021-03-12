import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    :root {
        --darkBg: #222222;
        --textWhite: #f4f9f9;
        --textPink: #ff005c;

    }
    body{
        width:100%;
        min-height:100vh;
        background:var(--darkBg);
        color:var(--textWhite);
        font-family:  'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

`

export default GlobalStyle