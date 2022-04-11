import styled from "styled-components";
import congret from "../pic/congret.png";

export const StyledCreateSuccess = styled.div`
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
    background-image: url(${congret});
    background-position: center;
    background-size: cover;
    opacity: 0.5;
}

div{
    position:relative;
}

h1{
    padding-bottom: 4rem;
}

button {
    margin-left: 30px;
    margin-right: 30px;
    height: 3rem;
    width: 12rem;
    font-size: 1rem
}
`