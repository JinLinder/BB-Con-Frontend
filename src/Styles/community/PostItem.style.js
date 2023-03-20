import styled from "styled-components";

export const StyledPostItem = styled.div`
    margin: 0;
    height:100vh;
    background-color: ${({theme})=>theme.colors.background};
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    .author{
        color:grey;
    }

    .text{
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        margin-bottom:1rem;
        padding: 0.625rem 0.625rem 0.625rem 0.625rem;
        width:50%;
        text-align: center;
        border-radius: 1.6rem;
    }

    @media (max-width: 767px){
        
        .text{
            margin:auto; 
            width:50%
        }
    }
`