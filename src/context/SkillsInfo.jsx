import React, { createContext, useState } from "react";

export const SkillsContext = createContext()

export function SkillsInfo({children}){
    const [skillsContext,setSkillsContext] = useState({
        technical:[],
        soft:[],
        tools:[]
    }
)
    return (
        <SkillsContext.Provider value={skillsContext}>
            {children}
        </SkillsContext.Provider>
    )
}