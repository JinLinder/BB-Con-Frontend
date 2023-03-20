import { createGlobalStyle } from "styled-components";
import { XCircleFill } from 'react-bootstrap-icons';
import styled from "styled-components";

export const CloseIcon = styled(XCircleFill)`
  color: #000000;
  opacity: 50%;
  height: 28px;
  width: 28px;

  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

export const HeadingL = styled.h1`
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const P = styled.p`
  font-weight: 400;
  font-size: "15px"; 
  margin: 0;
`;

export const ButtonUnable = styled.button`
  margin-top:3px;
  background: ${({theme})=>theme.colors.grey};
  color: white;
  pointer-event: none;
  border: none;
  height: 32px;
  min-width: 95px;
  border-radius: 5px;
  padding-left: 12px;
  padding-right: 12px;       
  font-weight: bold;       
`
export const ButtonGen = styled.button`
        margin-top:3px;
        background: ${({theme})=>theme.colors.light};
        color: white;
        pointer-event: none;
        border: none;
        height: 32px;
        min-width: 95px;
        border-radius: 5px;
        padding-left: 12px;
        padding-right: 12px;       
        font-weight: bold;       
    ;

    &:hover{
        transform: scale(1.05);
        background-color: ${({theme})=>theme.colors.dark};
    }
`
export const IconButton = styled.button`
  font-weight: bold;
  border:none;
  background:none;
  color:${({theme})=>theme.colors.dark};
  &:hover{
    color:rgb(71, 120, 227);
    transform: scale(1.1);
}
`

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

    body {
        color:${({theme})=>theme.light.primColors.darkVioletRed};
        background-color:#F5F4F4;
    }
`
export default GlobalStyles