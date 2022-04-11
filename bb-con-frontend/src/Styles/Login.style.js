import styled from "styled-components";

export const StyledLogin = styled.div`
    margin: 0;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: ${({theme})=>theme.colors.background};

    div{
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
        text-shadow: 1px 1px;
    }

    label {
        font-weight: bold;
        font-size: 1.2rem;
    }
    input{
        width: 300px;
        height:40px;
        border-radius: 30px;
        margin-top:10px;
        margin-bottom:20px;
        font-size: 13px;
    }

    button {
        font-weight: 700;
        font-size: 1.2rem;
        width: 150px;
        height:40px;   
    }

    a {
        color: #F04141;
        font-size: 1.2rem;
        font-weight: bold;
    }
`