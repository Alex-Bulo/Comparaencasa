import {createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const useData = () => useContext(DataContext)

export function DataProvider( {children} ) {
    const [plates, setPlates] = useState(null)
    
    const navigate = useNavigate()
    
    
    // useEffect( () =>{
    //     fetchData()    
    //     console.log(plates);
    // },[plates])


    return(
        <DataContext.Provider value={{plates}}>
            {children}
        </DataContext.Provider>
    )

}