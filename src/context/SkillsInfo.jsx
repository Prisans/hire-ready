import React, { createContext, useState } from "react";

export const SkillsContext = createContext()

export function SkillsInfo({children}){
    const [skillsContext,setSkillsContext] = useState({
        technical:"",
        soft:"",
        tools:""
    })
    function handleSkillChange(e){
        const {name,value} = e.target 
        setSkillsContext(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <SkillsContext.Provider value={{...skillsContext, handleSkillChange}}>
            {children}
        </SkillsContext.Provider>
    )
}