import {createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);



export const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const logIn = (mail, pass, action)=>{
        action.loading(true)

        fetch('http://localhost:3001/login',{
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body: JSON.stringify( { mail, pass } )
        })
        .then(response => {
            if(response.status === 200 || response.status === 500){
                return response.json() 
            }else{
                throw new Error (response.status)
            }
        })
        .then(dbInfo => {
            
            if(dbInfo.meta.status === 'success'){
                setUser(dbInfo.data)

                navigate('/profile/'+dbInfo.data.id)
            }else{
                action.errors(dbInfo.data)                    
            }
            
        })
        .catch(error => {
            console.log(error);
            navigate('/404')
        })
    
    }
    

    // const logOut = () =>{
    //     setUser( null )
    // }

    const [theme, setTheme] = useState('light')

    
    const themeChange = () =>{
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
  }    


    useEffect( ()=>{
    // const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
    //   setTheme(prefersTheme)
      setTheme('light')
  },[])



    return(

        <AuthContext.Provider value={ {logIn, user, preference:{theme, themeChange}} }>
            {children}
        </AuthContext.Provider>
    )

} 