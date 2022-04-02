import styled from "styled-components";
import bbCon from "./pic/bbCon.jpg";
import logoFont from "./fonts/logoFont.TTF";


export const StyledStart = styled.div`
    @font-face{
        font-family: 'logoFont';
        src: url(${logoFont})
    }

    margin:0;
    position:relative;
    height:100vh;

    &::before {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-image: url(${bbCon});
        background-position: center;
        background-size: cover;
        opacity: 0.25;
    }

    div{
        position:relative;
    }
    h3 {
        margin:0;
        padding:0;
        width:200px;
        position:fixed;
        color:#E44343;
        font-family: "logoFont";
        font-size:40px;
    }

    h1 {
        font-family: "logoFont";
        font-size:80px;
        color:#E44343;
        padding-top:150px;
        opacity: 0.8;
    }

     p {
        font-size: 25px;
        opacity: 0.8;
        padding-top:60px;       
    }

    h2{
        font-family: "logoFont";
        font-size: 35px;
        opacity: 0.8;
    }
`
    

