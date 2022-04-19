import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';

const ProtectedRoutes = ()=>{
    const loginTaken = useSelector(state => state.loginTaken)
    console.log(loginTaken);
  return loginTaken===true? <Outlet/> : <Navigate to="/"/>
}



export default ProtectedRoutes