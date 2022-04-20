import styled from "styled-components";
import heart from "../pic/heart.jpg";

export const StyledCreateAct = styled.div`
margin: auto;
height:100vh;
position:relative;
display: flex;
justify-content: center;
align-items: center;

&::before {
    content: '';
    position: absolute;
    top: 0rem;
    right: 0rem;
    bottom: 0rem;
    left: 0rem;
    background-image: url(${heart});
    background-position: center;
    background-size: cover;
    opacity: 0.5;
}
.container {
    width: 25rem;
    position:relative;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center; 
    border: 0.125rem solid #737171; 
    border-radius: 2.5rem; 
    box-shadow: 0.25rem 0.25rem #878787;
}
 input, select {
    width: 15.5rem;
    height:1.8rem;
    border-radius: 1.8rem;
    margin-top:0.6rem;
    margin-bottom:1.2rem;
    font-size: 0.8rem;
 }
 
 label {
    font-weight: bold;
    font-size: 1.2rem;
}

button {
    font-weight: 700;
    font-size: 1.2rem;
    width: 9.4rem;
    height:2.5rem;
    margin: 0.625rem 0rem 0.625rem 0rem;   
}
textarea {
    width: 18.75rem;
}

@media (max-width: 767px) {
    .container {
        width: 18rem;
        border: 0.1rem solid #737171; 
        border-radius: 2.5rem; 
        box-shadow: 0.15rem 0.15rem #878787;
    }

    h1{
        font-size: 2rem;
    }
     input, select {
        width: 10rem;
        height:1.3rem;
        border-radius: 1rem;
        margin-top:0.6rem;
        margin-bottom:1rem;
        font-size: 0.7rem;
     }
     
     label {
        font-size: 0.8rem;
    }
    
    button {
        font-weight: 700;
        font-size: 0.8rem;
        width: 7rem;
        height:2rem;
        margin: 0.625rem 0rem 0.625rem 0rem;   
    }
    textarea {
        width: 12rem;
    }
}

`
