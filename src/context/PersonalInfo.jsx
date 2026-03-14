import React,{Children, createContext, useState} from "react";

export const PersonalContext = createContext()

export function PersonalInfo({children}){
    const [personalData,setPersonalData]= useState({
        fullName : "",
        email : "",
        phone : "",
        github : "",
        linkedin : "",
        location : "",
        summary : ""
    })

    function handleChange(e){
        const {name,value} = e.target

        setPersonalData(prev=>(
            {...prev,[name] : value}
        ))
        
    }

    return (
        <PersonalContext.Provider value={{personalData,handleChange}}>
            {children}
        </PersonalContext.Provider>
    )
}