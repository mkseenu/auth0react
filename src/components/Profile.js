import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  JSONPretty from "react-json-pretty";

const Profile = ()=>{
    const {user,isAuthenticated,isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    
    console.log(" userrrr ",user,"  isAuthenticated ",isAuthenticated);

    return(
        isAuthenticated && (
        <div>
            {/* {JSON.stringify(user,null,2)} */}
            <JSONPretty data={user}/>
        </div>)
    )
}

export default Profile