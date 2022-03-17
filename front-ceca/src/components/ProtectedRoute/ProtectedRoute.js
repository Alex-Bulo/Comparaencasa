// import { Redirect, useLocation, useParams } from "react-router-dom";
import { useLocation, Navigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute ({component: Component, ...restOfProps}){
    let {pathname} = useLocation()

    const {user} = useAuth()
    
    const {id} = useParams()
    // console.log(id);

    
    if(!user || user.id !== Number(id)){
        
        return <Navigate to="/login" state={{ from: pathname }} />

    }else{

        return <Component {...restOfProps}/> 
        // if(user.id !== Number(id)){ 
        //     return <Redirect to={{pathname:'/', state:{from:pathname}}} />
        // }else{
        // }
    }



}


export default ProtectedRoute