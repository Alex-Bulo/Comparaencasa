import './LogInContainer.css'

import { useState } from "react"
import pic from "../../assets/profile.jpg"
import { useAuth } from "../../context/AuthContext"
import LogIn from "../LogIn/LogIn"


function LogInContainer() {

    const [userChoice, setUserChoice] = useState({mail:'', pass:''})
    const [inputErrors, setInputErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    const {logIn} = useAuth()

    const changeHandler = (e) => {
        setUserChoice( (inputs) =>{ return {...inputs, [e.target.name]:e.target.value}})

    }

    const submitHandler = (e) => {

        e.preventDefault()

        setLoading(true)
        
        logIn(userChoice.mail,userChoice.pass, {errors:setInputErrors,loading:setLoading})     
        
    }

    return(          
            
        <main className="FormContainer">
            
            <LogIn data={userChoice} submitHandler={submitHandler} 
                   changeHandler={changeHandler} loading={loading} 
                   errors={inputErrors}
            />

            <img src={pic} alt='Search plates background image' id='profilePImg' className="searchImg"/>

        </main>
            
    )
}

export default LogInContainer