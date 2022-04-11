import styled from "styled-components";
import heart from "../pic/heart.jpg";

export const StyledCreateAct = styled.div`
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
    background-image: url(${heart});
    background-position: center;
    background-size: cover;
    opacity: 0.5;
}
.container {
    width: 400px;
    position:relative;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center; 
    border: 2px solid #737171; 
    border-radius: 40px; 
    box-shadow: 4px 4px #878787;
}
 input, select {
    width: 250px;
    height:30px;
    border-radius: 30px;
    margin-top:10px;
    margin-bottom:20px;
    font-size: 13px;
 }
 
 label {
    font-weight: bold;
    font-size: 1.2rem;
}

button {
    font-weight: 700;
    font-size: 1.2rem;
    width: 150px;
    height:40px;
    margin: 10px 0px 10px 0px;   
}
textarea {
    width: 300px;
}

`
