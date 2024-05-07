import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

const getIntialDarkMode = ()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
    const storedDarkMode= localStorage.getItem('darkTheme')==='true'
    return  storedDarkMode || prefersDarkMode
}

export const AppProvider = ({children}) =>{
    const [isDarkTheme, setisDarkTheme] = useState(getIntialDarkMode())
    const [searchTerm, setsearchTerm] = useState('dog')
    
    const toggleDarkTheme =()=>{
        const newDarkTheme = !isDarkTheme
        setisDarkTheme(newDarkTheme)
        localStorage.setItem('darkTheme',newDarkTheme);
    }
useEffect(()=>{
    document.body.classList.toggle('dark-theme', isDarkTheme)

},[isDarkTheme])
    return(
        <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm,setsearchTerm}}>{children}</AppContext.Provider>
    )

}
export const  useGlobalContext = ()=> useContext(AppContext)