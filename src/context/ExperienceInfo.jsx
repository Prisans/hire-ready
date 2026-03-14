import React, { createContext, useState } from "react";

export const ExperienceContext = createContext()

export function ExperienceInfo({children}){
    const [experienceContext,setExperienceContext] = useState(
        {
            company:"",
            designation:"",
            isCurrentCompany:false,
            startDate:"",
            endDate:"",
            desc:""
        }
)

    function handleExperience(e){
        const {name,value} = e.target 
       
        setExperienceContext(prev=> (
            {...prev,[name] : value}
        ))
    }

    return (
        <ExperienceContext.Provider value={{experienceContext,handleExperience}}>
            {children}
        </ExperienceContext.Provider>
    )
}