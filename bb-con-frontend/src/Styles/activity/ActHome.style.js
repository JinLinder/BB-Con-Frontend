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
select, input {
    margin: 0px 20px 0px 20px;
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
`