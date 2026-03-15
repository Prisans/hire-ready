import React, { createContext, useState } from 'react'

export const EducationContext = createContext()

export const EducationInfo = ({children}) => {
  const [educationContext,setEducationContext] = useState([
    {
        school : "",
        degree : "",
        percentage : "",
        startDate : "",
        endDate : ""
    }
  ])

  function handleEducationChange(index, e){
    const {name,value} = e.target 
    setEducationContext(prev => {
      const newCtx = [...prev];
      newCtx[index] = {...newCtx[index], [name]: value};
      return newCtx;
    });
  }

  function addEducation() {
    setEducationContext(prev => [
      ...prev,
      {
        school : "",
        degree : "",
        percentage : "",
        startDate : "",
        endDate : ""
      }
    ])
  }

  function removeEducation(index) {
     setEducationContext(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <EducationContext.Provider value={{educationContext, handleEducationChange, addEducation, removeEducation}}>
      {children}
    </EducationContext.Provider>
  )
}
