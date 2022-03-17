import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormContainer.css'
import pic from '../../assets/home1.png'
import Form from "../Form/Form";


function FormContainer() {

    const [userChoice, setUserChoice] = useState('')
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUserChoice(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        if(userChoice.length > 0){

            try {
                const response = await fetch(`http://localhost:3001/cars/${userChoice}`)
                
                // console.log(response);
    
                if(response.status === 200 || response.status === 500){
                    const carsInfo = await response.json()
                    // console.log(carsInfo.data);
                    setResult(carsInfo.data)
                    
                    // setLoading(false)
                }else{
                    throw new Error(response.statusText)
                }
                
            } catch (error) {
                console.log(error);
                navigate('/404')            
                
            }
        }
        setLoading(false)

    }

    return(
        <main className="FormContainer">
            
            <Form submitHandler={submitHandler} userChoice={userChoice} changeHandler={changeHandler} result={result} loading={loading}/>
            <img src={pic} alt='Search plates background image' id='homePImg' className="searchImg"/>

        </main>

    )
}

export default FormContainer