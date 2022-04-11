import styled from "styled-components";

export const StyledActItem = styled.div`
margin: 0;
height:100vh;
background-color: ${({theme})=>theme.colors.background};
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
}

`