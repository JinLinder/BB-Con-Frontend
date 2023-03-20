import React from 'react';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpModal} from '../Styles/SignUp.style';
import { useSelector, useDispatch} from 'react-redux'
import {Form, Modal} from 'react-bootstrap';
import { CloseIcon, HeadingL, ButtonGen, ButtonUnable } from '../Styles/Global';

export default function Signup() {
  const [signup, setSignup]=useState({
    username:"",
    password:"",
    babyAge:"",
    location:""
  });
  // const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgName, setErrorMsgName] = useState("");
  const [errorMsgPassW, setErrorMsgPassW] = useState("");

  //get loginTaken state from redux
  const loginTaken = useSelector(state => state.loginTaken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //restrict user from visiting login routes once user is loged in. 
  useEffect( () => {
    if(loginTaken===true) {
      navigate("/home")
    }
  }, [])

//handle signup
  const handleSignup = (evt)=>{
    evt.preventDefault();
    localStorage.setItem("user", signup.username)
    fetch("http://localhost:5000/signup", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(signup)
    })
    .then(res=>res.json())
    .catch(err=>console.log('err', err))
      
    dispatch({type: 'user signup'})
    navigate("/home")
  }
//handle cancle
  const handleCancle= ()=>{
      navigate("/")
  }

  const handleNavigate = ()=>{
    navigate("/login")
  }

// validation
  const validation = (e) =>{
    let name = e.target.name;
    if(e.target.value === "") {
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
    <SignUpModal show={true}>
      <Modal.Header style={{border:"none"}}>
        <HeadingL>Welcome to BB-Con!</HeadingL> <CloseIcon onClick={handleCancle}/>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group className="mb-3" onChange={(e)=>{validation(e)}} >
            <Form.Label>Username</Form.Label><span style={{color: "red"}}>*</span>
            <Form.Control required isInvalid={errorMsgName !==""} type="username" placeholder="Enter username" value={signup.username} name="username"
            onChange={(e)=>{validation(e); setSignup({...signup, username: e.target.value})}}/>
            {errorMsgName ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errorMsgName}</span> : <span></span>}

            <Form.Label className="mt-3">Password</Form.Label><span style={{color: "red"}}>*</span>
            <Form.Control required isInvalid={errorMsgPassW !==""} type="password" placeholder="Enter password" value={signup.password} name="password"
              onChange={(e)=>{validation(e); setSignup({...signup, password: e.target.value})}}/>
            {errorMsgPassW ? <span style={{color:"red",textAlign:"right",float: "right"}}>{errorMsgPassW}</span> : <span></span>}
   
            <Form.Label className="mt-3">Baby's age </Form.Label>
            <Form.Select type="babyAge"  onChange={(e)=>setSignup({...signup, babyAge: e.target.value})}>
              <option value="" disabled >choose your baby's age</option>
              <option value="less than 1 year old">0-1 year</option>
              <option value="1-2 years old">1-2 years</option>
              <option value="more than 2 years old">More than 2 years</option>
            </Form.Select>
 
            <Form.Label className="mt-3">Location </Form.Label>
            <Form.Select type="location"  onChange={(e)=>setSignup({...signup, location: e.target.value})}>
              <option value="" disabled >Choose a location</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Uppsala">Uppsala</option>
              <option value="Göteborg">Göteborg</option>
              <option value="Malmö">Malmö</option>
            </Form.Select>
          </Form.Group> 

        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        {signup.username !== "" && signup.password !==""  ?
        <ButtonGen onClick={handleSignup}>Sign up</ButtonGen>
       : 
       <ButtonUnable variant="primary" type="submit" >
        Sign up
      </ButtonUnable>  }   
      <Form.Text>Already a member? <span style={{color:"blue", textDecoration:"underline", cursor:"pointer"}} onClick={handleNavigate}>Log in</span></Form.Text>     
        {/* <Form.Text>Already a member? <a href="/login">Log in</a></Form.Text>  */}
    </Modal.Footer> 
    </SignUpModal>
  )
}
