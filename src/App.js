
import './App.css';
import Start from './components/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import ActItem from './components/Activity/ActItem';
import UserProfile from './components/UserProfile';
import GlobalStyles from './Styles/Global'
import { ThemeProvider } from "styled-components";
import theme from './Styles/Theme';
import {useSelector, useDispatch} from 'react-redux'
import PostItem from './components/Community/PostItem';
import {NavLink} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const loginTaken = useSelector(state => state.loginTaken)

const dispatch = useDispatch()
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <GlobalStyles/>
    <Router>
      {(loginTaken===true) ? 
        <ul className="header">
          <li className="logo"><NavLink className="logoLink" to="/home">BB-CON</NavLink></li>
          <li className="profile"><NavLink className="navBar" to="/user/userProfile">My profile</NavLink></li>
          <li className="logout"><NavLink className="navBar"   onClick={() => dispatch({type: 'user logout'})} to="/">log out</NavLink></li>   
        </ul> 
      : (loginTaken===false) ? 
      
        <ul className="header">
          <li className="logo"><NavLink className="logoLink"  to="/">BB-CON</NavLink></li>
          <li className="login"><NavLink className="navBar" to="/login">log in</NavLink></li>
          <li className="signup"><NavLink className="navBar" to="/signup">sign up</NavLink></li>
        </ul> 
      : <div></div>}

      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/home" element={<Home/>}>
          <Route path="/home:tab" element={<Home/>}/>
          </Route>
          
          {/* <Route path="/activity" element={<ActHome/>}/> */}
          {/* <Route path="/activity/add" element={<CreateAct/>}/> */}
          <Route path="/activity/item/:actId" element={<ActItem/>}/>
          {/* <Route path="/community" element={<ComHome/>}/> */}
          {/* <Route path="/community/add" element={<CreatePost/>}/> */}
          <Route path="/community/post/:postId" element={<PostItem/>}/>
          <Route path="/user/userProfile" element={<UserProfile/>}/> 
        </Route>      
        <Route exact path="/" element={<Start/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
       
            

      </Routes>
    </Router>
    </div>
    </ThemeProvider>
  )
}


export default App;
