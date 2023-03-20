import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {LoginModal} from '../Styles/Login.style'
import {useSelector, useDispatch} from 'react-redux'
import {Form, Modal} from 'react-bootstrap';
import { CloseIcon, HeadingL, ButtonGen, ButtonUnable } from '../Styles/Global';

export default function Login() {
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsgName, setErrorMsgName] = useState("");
    const [errorMsgPassW, setErrorMsgPassW] = useState("");

  //get loginTaken state from redux
  const loginTaken = useSelector(state => state.loginTaken);

  const [login, setLogin] = useState({username:"", password:""})
  const dispatch = useDispatch()
  const navigate = useNavigate()

//restrict user from visiting login routes once user is loged in. 
  useEffect( () => {
    if(loginTaken===true) {
      navigate("/home")
    }
  }, [])

//handle login
  const handleLogin = (evt)=>{
    evt.preventDefault();

    fetch("http://localhost:5000/login/", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login)
    })
    .then(res=>res.json())
    .then(data=>{

      if(data.message===`User: ${login.username} loged in.`) {

        localStorage.setItem("user", login.username)      
        dispatch({type: 'user login'})
        navigate("/home")
      } else if (data.message===`Wrong username or password.` ) {
        setErrorMsg("Wrong username or password. Please try again.")
      }
    })
    .catch(err=>console.log('err', err))
  };
//handle cancle button
  const handleCancle=()=>{
    navigate("/")
  }
// handle navigation
const handleNavigate = ()=>{
  navigate("/signup")
}

// validation
  const validation = (e) =>{
    let name = e.target.name;
    if(e.target.value === "") {
      setErrorMsg("")
      if(name === "username") {
        setErrorMsgName("Username required")
      } else if (name === "password") {
        setErrorMsgPassW("Password required")
      }
    }  else {
      setErrorMsgPassW("")
      setErrorMsgName("")
    }
  }
  return (
     
  <LoginModal show={true}>
    <Modal.Header className="border-0">
     <HeadingL>Welcome to BB-Con!</HeadingL> <CloseIcon onClick={handleCancle}/>
    </Modal.Header>  
    <Modal.Body>  
    <Form>
      <Form.Group className="mb-3" onChange={(e)=>{validation(e)}} >
        <Form.Label>Username</Form.Label><span style={{color: "red"}}>*</span>
        <Form.Control required isInvalid={errorMsgName !==""} type="username" placeholder="Enter username" value={login.username} name="username"
          onChange={(e)=>{validation(e); setLogin({...login, username: e.target.value})}}/>
        {errorMsgName ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errorMsgName}</span> : <span></span>}
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}

        <Form.Label className="mt-3">Password</Form.Label><span style={{color: "red"}}>*</span>
        <Form.Control required isInvalid={errorMsgPassW !==""} type="password" placeholder="Enter password" value={login.password} name="password"
          onChange={(e)=>{validation(e); setLogin({...login, password: e.target.value})}}/>
        {errorMsgPassW ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errorMsgPassW}</span> : <span></span>}
      </Form.Group>      
    </Form>
    {errorMsg ? <p style={{color:"red"}}>{errorMsg}</p> : null}
    </Modal.Body>
    <Modal.Footer className ="border-0">
      {login.username !=="" && login.password !=="" ?
       <ButtonGen variant="primary" type="submit" onClick={handleLogin}> Log in  </ButtonGen> :
       <ButtonUnable variant="primary" type="submit" >Log in</ButtonUnable>  
         
      }
     <Form.Text>Not a member yet? <span style={{color:"blue", textDecoration:"underline",  cursor:"pointer"}} onClick={handleNavigate}>Sign up</span></Form.Text> 
    </Modal.Footer>   
  </LoginModal>
  )
}
