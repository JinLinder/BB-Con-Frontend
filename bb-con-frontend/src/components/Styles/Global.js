import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

    body {
        font-family: 'Fredoka One', cursive;
    }

    button {
        background: #91F6AE;
        border-radius: 92px;
        opacity: 1;
        font-family: 'Source Sans Pro', sans-serif; 
        letter-spacing: 0px;
        color: #141414;

    };

    button:hover{
        background-color: #0DAF3B;
    }
`
export default GlobalStyles