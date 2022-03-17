import { useAuth } from "../../context/AuthContext"
import './Profile.css'


function Profile() {
    
    const {user} = useAuth()
    console.log(user);
    return(
        <main className="Profile">
            <h1 className="wlc">Hello, {user.name} !!</h1>
            <p className="profileCar">Your car is <span>{user.car.carName}</span></p>
            <p className="profileCar">Your car plate is <span>{user.car.carPlate}</span></p>
            <img src={user.photo} alt={`Profile pic of ${user.name}`} className='profileBkg'/>
        </main>
    )
}

export default Profile