
import './App.css';
import Start from './components/Start';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import ActHome from './components/Activity/ActHome'; 
import ComHome from './components/Community/ComHome';
import CreateAct from './components/Activity/CreateAct';
import ActItem from './components/Activity/ActItem';
import CreatePost from './components/Community/CreatePost';
import UserProfile from './components/UserProfile';
import { useEffect, useState } from 'react';
import GlobalStyles from './Styles/Global'
import { ThemeProvider } from "styled-components";
import theme from './Styles/Theme';
import {useSelector, useDispatch} from 'react-redux'

function App() {

const loginTaken = useSelector(state => state.loginTaken)
console.log(loginTaken);
const dispatch = useDispatch
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <GlobalStyles/>
    <Router>
      {loginTaken===true ? <div><p><Link to="/userProfile">My profile</Link></p>
                                <p><Link to="/" onClick={() => dispatch({type: 'user logout'}) }>log out</Link></p>
                            </div> 
        : <div>
            <Link to="/login">log in</Link> <br />
            <Link to="/signup">sign up</Link>
          </div>}

      <Routes>
          <Route exact path="/" element={<Start/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/activity" element={<ActHome/>}/>
          <Route path="/activity/add" element={<CreateAct/>}/>
          <Route path="/activity/item/:actId" element={<ActItem/>}/>
          <Route path="/community" element={<ComHome/>}/>
          <Route path="/community/add" element={<CreatePost/>}/>
          <Route path="/userProfile" element={<UserProfile/>}/>
      </Routes>
    </Router>
    </div>
    </ThemeProvider>
  )
  
    

  //   return (
  //     <Router>
  //     {/* {user ? <div><p><Link to="/userProfile">My profile</Link></p></div> 
  //       : <div></div>} */}
  //     <div><p><Link to="/userProfile">My profile</Link></p></div>
  //     <Routes>
  //         <Route exact path="/" element={<Start/>}/>
  //         <Route path="/login" element={<Login/>}/>
  //         <Route path="/signup" element={<Signup/>}/>
  //         <Route path="/home" element={<Home/>}/>
  //         <Route path="/activity" element={<ActHome/>}/>
  //         <Route path="/activity/add" element={<CreateAct/>}/>
  //         <Route path="/activity/item/:actId" element={<ActItem/>}/>
  //         <Route path="/community" element={<ComHome/>}/>
  //         <Route path="/community/add" element={<CreatePost/>}/>
  //         <Route path="/userProfile" element={<UserProfile/>}/>
  //     </Routes>
  // </Router>
  //     )

}


export default App;
