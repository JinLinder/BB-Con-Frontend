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
        top: 0rem;
        right: 0rem;
        bottom: 0rem;
        left: 0rem;
        background-image: url(${bbCon});
        background-position: center;
        background-size: cover;
        opacity: 0.25;
    }

    div{
        position:relative;
    }
    @media (min-width: 1024px) {

        h1 {
            font-family: "logoFont";
            font-size:5rem;
            color:#F26868;
            padding-top:10rem;
            margin:0;
        }

        p {
            font-size: 1.5rem;
            opacity: 0.8;
            padding-top:3rem;       
        }

        h2{
            font-family: "logoFont";
            font-size: 2rem;
            opacity: 0.8;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        h1 {
            font-family: "logoFont";
            font-size:4rem;
            color:#F26868;
            padding-top:150px;
            margin:0;
        }

        p {
            font-size: 1.2rem;
            opacity: 0.8;
            padding-top:3rem;       
        }

        h2{
            font-family: "logoFont";
            font-size: 1.5rem;
            opacity: 0.8;
        }
    }

    @media (max-width: 767px) {

        h1 {
            font-family: "logoFont";
            font-size:1.7rem;
            color:#F26868;
            padding:9rem 1rem 0rem 1rem;
            margin:0;
        }

        p {
            font-size: 1rem;
            opacity: 0.8;
            padding:2rem 0.8rem 0rem 0.8rem;       
        }

        h2{
            font-family: "logoFont";
            font-size: 1rem;
            opacity: 0.8;
        }
    }
`
    

