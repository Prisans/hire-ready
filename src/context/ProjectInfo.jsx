import React, { createContext, useState } from "react";

export const ProjectContext = createContext()

export function ProjectInfo({children}){
    const [projectContext,setProjectContext] = useState([{
        title:"",
        technologies:"",
        githublink:"",
        deployedlink:"",
        desc:""
    }]);

    function handleProjectChange(index, e){
        const {name,value} = e.target 
        setProjectContext(prev => {
            const newCtx = [...prev];
            newCtx[index] = {...newCtx[index], [name]: value};
            return newCtx;
        });
    }

    function addProject() {
        setProjectContext(prev => [...prev, {
            title:"",
            technologies:"",
            githublink:"",
            deployedlink:"",
            desc:""
        }]);
    }

    function removeProject(index) {
        setProjectContext(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <ProjectContext.Provider value={{projectContext, handleProjectChange, addProject, removeProject}}>
            {children}
        </ProjectContext.Provider>
    )
}