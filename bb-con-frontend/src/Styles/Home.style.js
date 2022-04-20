import styled from "styled-components";
import heart from "./pic/heart.jpg"
export const StyledHome = styled.div`
    margin: 0;
    height:100vh;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
    div {
        position:relative;
    }
    h1 {
        font-size: 3.5rem;
        padding-bottom: 4rem;
    }

    button {
        margin-left: 2rem;
        margin-right: 2rem;
        height: 3rem;
        width: 12rem;
        font-size: 1rem
    }

    @media (max-width: 767px){
       h1{
        font-size: 2rem;
       } 

       button {
        margin: 1rem 2rem 1rem 2rem;
        // margin-left: 2rem;
        // margin-right: 2rem;
        height: 2.5rem;
        width: 9rem;
        font-size: 0.8rem
    }

    }
`