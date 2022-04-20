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
        margin-left: 1.875rem;
        margin-right: 1.875rem;
        height: 3rem;
        width: 12rem;
        font-size: 1rem
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {

        h1{
            font-size:1.5rem;
        }

        button {
            margin-left: 1.875rem;
            margin-right: 1.875rem;
            height: 2rem;
            width: 8rem;
            font-size: 0.7rem
        }
    }

    @media screen and (max-width: 767px){
        div{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
        }
        
        
        h1{
            font-size:1.3rem;
        }

        button {
            margin: 1rem 1.875rem 1rem 1.875rem;
            margin-left: 1.875rem;
            margin-right: 1.875rem;
            height: 2rem;
            width: 8rem;
            font-size: 0.7rem
        }
    }
    }
`