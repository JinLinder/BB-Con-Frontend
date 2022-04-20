import styled from "styled-components";

export const StyledComments = styled.div`
.container{
    display: flex;
    flex-direction: column ;
    justify-content:center;
    align-items: center;
}
.comment{
   display: flex;
   flex-direction: row ;
}
.user, .commentText{
   margin: 0.625rem 0.625rem 0px 0.625rem;
   
}
.commentContainer{
   display: flex;
   flex-direction: column;
}
.commentText{
   border-radius: 0.625rem;
   min-width:12.5rem;
   background-color: #F2F2F2;
}
.icon{
   display: flex;
   flex-direction: row ;
   justify-content:space-between;
   align-items: center;    
}
.likeIcon{
   margin-right: 2.5rem;
}
.commentIcon{
   margin-left: 2.5rem;
}
.likeIcon, .commentIcon:hover{
   transform: scale(1.05);
}
.user {
   background-color: white;
   padding: 0.125rem 1rem 0.125rem 1rem;
   border-radius: 6.25rem;
}
input {
   width: 15.5rem;
   height:1.875rem;
   border-radius: 1.875rem;
   margin-top:0.625rem;
   margin-bottom:1.25rem;
   font-size: 0.8rem;
}
a{
   color: grey;
   text-decoration: none;
}
button{
   width: 3.9rem;
   height:2rem;  
}


    @media (max-width: 767px){
        p{
            font-size: 0.7rem;
        }

        input{
            width: 15rem;
            height:1.5rem;
        }
    }
`