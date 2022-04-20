import styled from "styled-components";

export const StyledLogin = styled.div`
    margin: 0;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: ${({theme})=>theme.colors.background};

    div{
        width: 25rem;
        padding-bottom:2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        border: 0.125rem solid #737171; 
        border-radius: 2.5rem; 
        box-shadow: 0.25rem 0.25rem #878787;    
    }
    
    h2 {
        padding-bottom: 1.25rem;
        text-shadow: 0.0625rem 0.0625rem;
    }

    label {
        font-weight: bold;
        font-size: 1.2rem;
    }

    input{
        width: 18.75 rem;
        height:2.5rem;
        border-radius: 1.875rem;
        margin-top:0.625rem;
        margin-bottom:1.25rem;
        font-size: 0.8125rem;
    }

    button {
        font-weight: 700;
        font-size: 1.2rem;
        width: 9.375rem;
        height:2.5rem;   
    }

    a {
        color: #F04141;
        font-size: 1.2rem;
        font-weight: bold;
    }

    @media (max-width: 767px){

        div {
            width: 18rem;
        }

        h2 {
            font-size: 1.1rem;
            padding-bottom: 1rem;
            text-shadow: 0.0625rem 0.0625rem;
        }
    
        label {
            font-weight: bold;
            font-size: 0.9rem;
        }
    
        input{
            width: 15.75 rem;
            height:2rem;
            border-radius: 1.875rem;
            margin-top:0rem;
            margin-bottom:1rem;
            font-size: 0.8rem;
        }
    
        button {
            font-weight: 700;
            font-size: 0.8rem;
            width: 9.375rem;
            height:2.5rem;   
        }
    
        a {
            color: #F04141;
            font-size: 0.8rem;
            font-weight: bold;
        }
        p{
            font-size: 0.6rem;
        }
    }
`