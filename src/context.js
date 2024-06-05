// context(warehouse)
// provider
// consumer(UseContext())
import React, { useContext, useEffect, useState } from "react"
import constants from "./utils/constants"
const AppContext = React.createContext()


// Provider
const AppProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState()
    const [isError, setIsError] = useState({ show:false, msg:""})
    const [query, setQuery] = useState('Titanic')
    const getMovies = (query)=>{
        fetch(`${constants.url}movies/all-movies?search=${query}`,{
            method:'GET'
        })
        .then(res => res.json())
        .then((result) =>{
            console.log(result)
            if(result.success){
                let data = result.data
                setMovie(data)
            }else{
                setIsError({
                    show: true,
                    msg : "Error"
                })
            }
            
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getMovies(query)
    },[query])
    return <AppContext.Provider value={{isLoading,isError, movie, query, setQuery}}>{children}</AppContext.Provider>
}

// global custom hook``

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}