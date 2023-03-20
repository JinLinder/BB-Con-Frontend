import styled from "styled-components";
import theme from "../../Styles/Theme"

export const StyledActList = styled.div`

    background-color:white ;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    box-shadow: 8px 10px 8px -4px rgba(0, 0, 0, 0.07);
    margin-bottom:15px ;
    padding:20px;
    margin:50px;
    
    @media(max-width: 767px) {
        margin: 0 0 10px 0;
        padding: 0;
    };

    :hover{
        transform: scale(1.05);
        background-color:${theme.light.secColors.lightPink};;
    };

    .link {
        text-decoration: none;
        color: black;
    };

    .title{
        font-size:20px;
        font-weight: bold;
        color:${({theme})=>theme.light.primColors.darkVioletRed};
    };

    .timeAdress{
        color:${({theme})=>theme.light.primColors.darkVioletRed};
        display: flex;
        flex-direction: row;
        justify-content: center;      
    };

    .time {
    padding: 0px 5px;
    margin: 0px 5px;
    background-color:${({theme})=>theme.light.primColors.lightGray};
    border-radius: 25px;
    };


    .adress {
        padding: 0px 5px;
        margin: 0px 5px;
        background-color:${({theme})=>theme.light.primColors.lightGray};
        border-radius: 25px;
    };

    .detail {
        padding: 20px 0px;
        margin: auto;
        width: 80%;
       height: 60px;
       text-overflow: ellipsis;
       overflow: hidden;
       white-space: nowrap;
    }

    @media (max-width: 767px){
        
    }
`