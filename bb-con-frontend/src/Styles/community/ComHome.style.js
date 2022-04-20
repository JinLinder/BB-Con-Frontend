import styled from "styled-components";

export const StyledComHome = styled.div`
margin: 0;
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
    border: 0.01 solid;
    border-radius:0.18rem;
    width: 12.5rem;
    height:1.6rem;
}

a {
    text-decoration:none;
    color: ${({theme})=>theme.colors.light}; 
}

button {
    width: 9.5rem;
    height: 1.875rem;
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

@media (min-width: 1024px){
    height 100vh;
}

@media (max-width: 767px){
    h1{
        font-size: 1.5rem;
    }
    .articleCards{
        display: flex;
        flex-direction: column;
        margin:auto;    
        width:85%;
    }

    input {
        border: 0.01 solid;
        border-radius:0.18rem;
        width: 12.5rem;
        height:1.6rem;
    }
    
    a {
        text-decoration:none;
        color: ${({theme})=>theme.colors.light}; 
    }
    
    button {
        width: 7.5rem;
        height: 1.5rem;
        margin: 0rem 0.8rem 0rem 0.8rem;
        font-size:0.7rem;
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
}
`