
import './App.css';
import Start from './components/Start';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import ActivityHome from './components/Activity/ActivityHome'; 
import CommunityHome from './components/Community/CommunityHome';
import CreateActivity from './components/Activity/CreateActivity';

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
            <Route path="/activityHome" element={<ActivityHome/>}/>
            <Route path="/communityHome" element={<CommunityHome/>}/>
            <Route path="/createActivity" element={<CreateActivity/>}/>
        </Routes>
    </Router>
    </div>
  );
}


export default App;
