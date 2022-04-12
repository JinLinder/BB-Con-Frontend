import styled from "styled-components";

export const StyledActItem = styled.div`
margin: 0;
height:100vh;
background-color: ${({theme})=>theme.colors.background};
display: flex;
justify-content:center;
align-items: center;

.container{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    
}

.info, .timeAdress{
    margin: 0px 10px 0px 10px;
    background-color:white;
    padding: 0px 60px 0px 60px;
    border-radius: 15px;
}

.info{
    width: 80%
}
.timeAdress{
    width: 20%
}

`