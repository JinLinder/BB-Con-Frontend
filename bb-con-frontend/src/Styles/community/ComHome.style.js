import styled from "styled-components";

export const StyledComHome = styled.div`
margin: 0;
height:100vh;
background-color: ${({theme})=>theme.colors.background};
display: flex;
flex-direction: column;
align-items: center;

.articleCards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
input {
    margin: 0px 20px 0px 20px;
    border: 1.5px solid;
    border-radius:3px;
    width: 200px;
    height:25px;
}

a {
    text-decoration:none;
    color: ${({theme})=>theme.colors.light}; 
}

button {
    width: 150px;
    height: 30px;
    margin: 0rem 1rem 0rem 1rem
}

.allPosts{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content:center;
    color: ${({theme})=>theme.colors.light}
}

.allPosts:hover{
    transform: scale(1.05);
    color: ${({theme})=>theme.colors.dark}
}
`