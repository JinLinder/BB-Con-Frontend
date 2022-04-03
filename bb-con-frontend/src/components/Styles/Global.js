import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

    body {
        font-family: 'Fredoka One', cursive;
    }

    button {
        cursor:pointer;
        background: #F26868;
        border-radius: 90px;
        color: white;
        
    };

    button:hover{
        background-color: #F04141;
    }
`
export default GlobalStyles