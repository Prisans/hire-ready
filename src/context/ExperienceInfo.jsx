import React, { createContext, useState } from "react";

export const ExperienceContext = createContext()

export function ExperienceInfo({children}){
    const [experienceContext,setExperienceContext] = useState([
        {
            company:"",
            designation:"",
            isCurrentCompany:false,
            startDate:"",
            endDate:"",
            desc:""
        }
    ])

    function handleExperienceChange(index, e){
        const {name,value} = e.target 
        setExperienceContext(prev => {
            const newCtx = [...prev];
            newCtx[index] = {...newCtx[index], [name]: value};
            return newCtx;
        });
    }

    function addExperience() {
        setExperienceContext(prev => [...prev, {
            company:"",
            designation:"",
            isCurrentCompany:false,
            startDate:"",
            endDate:"",
            desc:""
        }]);
    }

    function removeExperience(index) {
        setExperienceContext(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <ExperienceContext.Provider value={{experienceContext, handleExperienceChange, addExperience, removeExperience}}>
            {children}
        </ExperienceContext.Provider>
    )
}