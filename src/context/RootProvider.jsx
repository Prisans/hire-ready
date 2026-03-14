import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { ExperienceInfo } from "./ExperienceInfo";
import { EducationInfo } from "./EducationInfo";
import { SkillsInfo } from "./SkillsInfo";
import { ProjectInfo } from "./ProjectInfo";


export function RootProvider({children}){
    return(
        <PersonalInfo>
            <ExperienceInfo>
                <EducationInfo>
                    <ProjectInfo>
                        <SkillsInfo>
                            {children}
                        </SkillsInfo>
                    </ProjectInfo>
                </EducationInfo>
            </ExperienceInfo>
        </PersonalInfo>
    )
}