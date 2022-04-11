import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

    body {
        font-family: 'Fredoka One', cursive;
    }

    button {
        cursor:pointer;
        background: ${({theme})=>theme.colors.light};
        border-radius: 90px;
        color: white;
        font-weight: bold;
        
    };

    button:hover{
        transform: scale(1.05);
        background-color: ${({theme})=>theme.colors.dark};
    }
`
export default GlobalStyles