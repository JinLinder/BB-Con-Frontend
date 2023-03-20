import styled from "styled-components";
import bbCon from "./pic/bbCon.jpg";
import {Modal} from "react-bootstrap";

export const LoginModal = styled(Modal)`

position: absolute;
top:0;
bottom: 0;
left: 0;
right: 0;
margin: auto;

&::before {
    content: '';
    position: absolute;
    top: 0rem;
    right: 0rem;
    bottom: 0rem;
    left: 0rem;
    background-image: url(${bbCon});
    background-position: center;
    background-size: cover;
    opacity: 0.25;
}
`
export const StyledLogin = styled.div`
    // margin:0;
    // position:relative;
    //  height:100vh;
    // &::before {
    //     content: '';
    //     position: absolute;
    //     top: 0rem;
    //     right: 0rem;
    //     bottom: 0rem;
    //     left: 0rem;
    //     background-image: url(${bbCon});
    //     background-position: center;
    //     background-size: cover;
    //     opacity: 0.25;
    // }
`
