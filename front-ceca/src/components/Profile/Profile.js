import { useAuth } from "../../context/AuthContext"




function Profile() {
    
    const {user} = useAuth()

    return(
        <p>HOLA</p>
    )
}

export default Profile