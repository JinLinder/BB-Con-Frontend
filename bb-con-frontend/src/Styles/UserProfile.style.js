import styled from "styled-components";

export const StyledUserProfile = styled.div`
    margin: 0;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.colors.background};
    .container{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        width:20rem;
        height: 20rem;
        background-color:white;
        border: 2px solid #737171; 
        border-radius: 40px; 
        box-shadow: 2px 2px #878787;
    }
    .profileInfo{
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
    }
`