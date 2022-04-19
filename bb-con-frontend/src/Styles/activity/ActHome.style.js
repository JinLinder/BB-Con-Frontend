import styled from "styled-components";

export const StyledActHome = styled.div`
margin: 0;
height:100vh;
background-color: ${({theme})=>theme.colors.background};
display: flex;
flex-direction: column;
align-items: center;

.activityCards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.search{
    margin-left: auto;
    margin-right: auto;
    margin-bottom:2rem;
    width: 22rem;
    padding-left:1rem;
    padding-right:1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    background-color:#EFEFEF;
    border-radius:5rem;
    
}
select, input {
    margin: 0px 10px 0px 10px;
    border: 1.5px solid;
    border-radius:3px;
    width: 150px;
    height:25px;
}
button {
    width: 120px;
    height: 30px;
    margin: 0px 5px 0px 5px
}
a {
    text-decoration:none;
    
}
`