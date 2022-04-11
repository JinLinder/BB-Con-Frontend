import styled from "styled-components";

export const StyledActList = styled.div`
border-style: groove ;
border-radius: 15px;
background-color:white;
margin:20px 20px 0px 20px;

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
`