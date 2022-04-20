import styled from "styled-components";

export const StyledActItem = styled.div`
margin: 0;
height:100vh;
background-color: ${({theme})=>theme.colors.background};
display: flex;
justify-content:center;
align-items: center;

.info, .timeAdress{
    background-color:white;
    padding: 0rem 3.75rem 0rem 3.75rem;
    border-radius: 1rem;
}

@media (min-width: 1024px){
    .container{
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;   
    }
    .info, .timeAdress{
        margin: 0rem 0.625rem 0rem 0.625rem;

    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .container{
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;   
    }
    .info, .timeAdress{
        margin: 0rem 1.5rem 0rem 1.5rem;
       
    }
}

@media screen and (max-width: 767px) {
    h2{
        font-size:1rem;
    }
    h3{
        font-size:0.8rem;
    }
    h4{
        font-weight: bold;
        font-size:0.6rem;
    }
    p{
        font-size:0.5rem;
    }
    .info, .timeAdress{
        margin: 0rem 0.625rem 0rem 0.625rem;

    }
}

`