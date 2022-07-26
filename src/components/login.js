import React from "react";
import { useAuth0  } from "@auth0/auth0-react";
import './components.css';

const Login = ()=>{
    const {loginWithRedirect,isAuthenticated} = useAuth0();
    return(
       !isAuthenticated && (<button className="buttonAuth" onClick={()=>loginWithRedirect()}>
            Log In
        </button>)
    )
}

export default Login