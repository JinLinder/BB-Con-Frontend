import styled from "styled-components";

export const StyledActList = styled.div`
border-style: groove ;
border-radius: 15px;
background-color:white;
margin:1.25rem 1.25rem 0px 1.25rem;
padding:0.65rem 1.25rem 0px 1.25rem;

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
.time {
    color: grey;
}

.adress {
    color: #9A9B9C
}

@media (max-width: 767px){
    
}
`