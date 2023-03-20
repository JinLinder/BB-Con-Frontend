import styled from "styled-components";
import { Nav } from "react-bootstrap";
import theme from "./Theme";

export const StyledHome = styled.div`
    background-color: #F5F4F4;
    margin: 30px;
    height:100vh;
    display: flex;
    justify-content: center;
`

export const StyledContainer = styled.div`
    background-color:white ;
    align-items:center ;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    box-shadow: 8px 10px 8px -4px rgba(0, 0, 0, 0.07);
    border-top:none ;
    margin-bottom:15px ;
    padding:16px;
  
`
export const NavContainer = styled(Nav)`
  display:flex;
  width:100%;
  overflow:clip ;
  flex-wrap:nowrap ;
  border:none;

 
    .nav-link{
    color: ${theme.light.primColors.darkGray};
    font-size: 15px;
    font-weight: bold;
      &:hover{
        color:${theme.colors.dark};
        font-size: 17px;
      }
    };   
    .nav-linkactive {
      font-size: 17px;
      background-color:white;
      color: ${theme.colors.dark};
      border:none;
      border-bottom: 1px solid white;
    };

`