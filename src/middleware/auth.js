
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import jwtDecode from "jwt-decode";

export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/Login'} replace={true}></Navigate>
    }

    return children;
}

export const Authorizerol = ({ children }) => {
    const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token);
    if (decodedToken.role === 'admin') {
      } else {
        return <Navigate to={'/Home'} replace={true}></Navigate>   
      }
        return children;
}


export const ProtectRoute = ({ children }) => {
    const username = useAuthStore.getState().auth.username;
    if(!username){
        return <Navigate to={'/'} replace={true}></Navigate>
    }
    return children;
}

