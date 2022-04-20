import styled from "styled-components";

export const StyledPostList = styled.div`
   
    border-style: groove ;
    border-radius: 1rem;
    background-color:white;
    margin:1.25rem 1.25rem 0rem 1.25rem;
    padding:0rem 1.25rem 0rem 1.25rem;
    :hover{
        transform: scale(1.05);
        background-color:#C2DFEE;
    }

    .link {
        text-decoration: none;
        color: black;
        text-align: left;
    }
    .title{
        font-weight: bold
    }
    .author{
        color: grey;
    }

    @media (max-width: 767px){
      
    }
`