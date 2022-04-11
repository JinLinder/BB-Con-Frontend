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
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
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
        margin-left: 30px;
        margin-right: 30px;
        height: 3rem;
        width: 12rem;
        font-size: 1rem
    }
`