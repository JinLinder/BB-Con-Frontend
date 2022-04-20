import styled from "styled-components";

export const StyledJoinAct = styled.div`
.joiner{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
}
.part{
    padding: 0rem 0.18rem 0rem 0.18rem
}
button{
    font-size: 1rem;
    width: 6.25rem;
    height:2.5rem;
}

@media (max-width: 767px){

    button{
        font-size: 0.7rem;
        width: 4rem;
        height:1.5rem;  
    }
    .joiner{
        font-size: 0.7rem;
    }
}
`