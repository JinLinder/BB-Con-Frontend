
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

function App() {
  return (
    <div className="App">
      {/* <Start/> */}
      <Router>
        {/* <div>
            <ul>
                <li><Link to="/login"> Log in</Link></li>
                <li><Link to="/signup"> sign up</Link></li>
            </ul>
        </div> */}

        <Routes>
            <Route exact path="/" element={<Start/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/activity" element={<ActHome/>}/>
            <Route path="/community" element={<ComHome/>}/>
            <Route path="/activity/add" element={<CreateAct/>}/>
            <Route path="//activity/item" element={<ActItem/>}/>
            
        </Routes>
    </Router>
    </div>
  );
}


export default App;
