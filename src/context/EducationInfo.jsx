import React, { createContext, useState } from 'react'

export const EducationContext = createContext()

export const EducationInfo = ({children}) => {
  const [educationContext,setEducationContext] = useState(
    {
        school : "",
        degree : "",
        percentage : "",
        startDate : "",
        endDate : ""
    }
)

function handleChange(e){
  const {name,value} = e.target 

  setEducationContext(prev=>(
    {...prev , [name] : value}
  ))
}
  return (
    <EducationContext.Provider value={{educationContext,handleChange}}>
      {children}
    </EducationContext.Provider>
  )
}
