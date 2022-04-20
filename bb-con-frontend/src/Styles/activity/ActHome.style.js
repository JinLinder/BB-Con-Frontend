import styled from "styled-components";

export const StyledActHome = styled.div`
margin: 0;
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
    margin: 0rem 0.625rem 0rem 0.625rem;
    border: 0.09rem solid;
    border-radius:0.1875rem;
    width: 9.375rem;
    height:1.56rem;
}
button {
    width: 7.5rem;
    height: 1.8rem;
    margin: 0rem 0.3rem 0rem 0.3rem
}
a {
    text-decoration:none;
    color: ${({theme})=>theme.colors.light};
    
}
.allAct{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content:center;
    color: ${({theme})=>theme.colors.light}
};
.allAct:hover{
    transform: scale(1.05);
    color: ${({theme})=>theme.colors.dark}
}

@media (min-width: 1024px){
    height 100vh;
}

@media (max-width: 767px){
    
    .activityCards{
        display: flex;
        flex-direction: column;
    }
    .search{
        margin-left: auto;
        margin-right: auto;
        margin-bottom:2rem;
        width: 13rem;
        padding: 1rem 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        background-color:#EFEFEF;
        border-radius:2rem;
    }

    select, input {
        margin: 0.5rem 0.625rem 0.5rem 0.625rem;
        // padding:0.625rem 0.625rem 0.625rem 0.625rem;
        border: 0.09rem solid;
        border-radius:0.1875rem;
        width: 9.375rem;
        height:1.56rem;
    }

    button {
        font-size:0.7rem;
        width: 6rem;
        height: 1.8rem;
        margin: 0rem 0.3rem 0rem 0.3rem
    }
}

`