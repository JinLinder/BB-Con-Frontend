import styled from "styled-components";
import img from "./pic/background.jpg"

export const StyledLogin = styled.div`
    margin: 0;
    height:100vh;
    position:relative;

    &::before {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-image: url(${img});
        background-position: center;
        background-size: cover;
        opacity: 0.6;
    }

    div{
        position:relative;
        padding-top: 100px;  
        padding-bottom:50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;   
    }
    }

    h4{
        margin:0;
    };

    input{
        width: 300px;
        height:40px;
        border-radius: 92px;
        margin-top:10px;
        margin-bottom:20px;

    }
    button {
        font-weight: 700;
        font-size: 1rem;
        width: 100px;
    };

    button:hover{
        background-color: #0DAF3B;
    }
    
`