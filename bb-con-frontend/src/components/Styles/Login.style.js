import styled from "styled-components";
import img from "./pic/background.jpg"

export const StyledLogin = styled.div`
    margin: 0;
    height:100vh;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center; 

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
        width: 400px;
        padding-bottom:30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        border: 2px solid #737171; 
        border-radius: 40px; 
        box-shadow: 4px 4px #878787;    
    }
    
    h2 {
        padding-bottom: 20px;
    }
    input{
        width: 300px;
        height:40px;
        border-radius: 30px;
        margin-top:10px;
        margin-bottom:20px;
        font-size: 20px;
    }

    button {
        font-weight: 700;
        font-size: 1rem;
        width: 150px;
        height:40px;
    };
    a {
        color: #F04141;
    }
`