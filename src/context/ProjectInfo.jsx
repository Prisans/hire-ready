import React, { createContext, useState } from "react";

export const ProjectContext = createContext()

export function ProjectInfo({children}){
    const [projectContext,setProjectContext] = useState([{
        title:"",
        technologies:[],
        githublink:"",
        deployedlink:"",
        desc:""
    }]
)
    return (
        <ProjectContext.Provider value={projectContext}>
            {children}
        </ProjectContext.Provider>
    )
}