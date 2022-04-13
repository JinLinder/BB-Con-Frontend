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
    color:grey
}
.text{
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 10px 10px 10px;
    width:50%;
    min-width:400px;
    text-align: center;
    border-radius: 25px;
}
`