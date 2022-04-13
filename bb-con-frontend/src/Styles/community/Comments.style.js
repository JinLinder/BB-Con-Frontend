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
        margin: 10px 10px 0px 10px;
        
    }

    .commentText{
        border-radius: 10px;
        min-width:200px;
        background-color: #F2F2F2;
    }

    .icon{
        display: flex;
        flex-direction: row ;
        justify-content:space-between;
        align-items: center;    
    }
    .likeIcon{
        margin-right: 40px;
    }
    .commentIcon{
        margin-left: 40px;
    }

    .likeIcon, .commentIcon:hover{
        transform: scale(1.05);
    }

    .user {
        background-color: white;
        padding: 2px 15px 2px 15px;
        border-radius: 100px;
    }


    input {
        width: 250px;
        height:30px;
        border-radius: 30px;
        margin-top:10px;
        margin-bottom:20px;
        font-size: 13px;
     }
    a{
        color: grey;
        text-decoration: none;
    }
    button{
        width: 60px;
        height:30px;  }
`