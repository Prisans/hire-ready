import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PersonalContext } from '../context/PersonalInfo';
import { EducationContext } from '../context/EducationInfo';
import { ExperienceContext } from '../context/ExperienceInfo';
import { ProjectContext } from '../context/ProjectInfo';
import { SkillsContext } from '../context/SkillsInfo';

export const useFormProgress = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'beginner';

  const { personalData } = useContext(PersonalContext);
  const { educationContext } = useContext(EducationContext);
  const { experienceContext } = useContext(ExperienceContext);
  const projectContextList = useContext(ProjectContext) || [];
  const skillsContext = useContext(SkillsContext);

  const [progress, setProgress] = useState({
    percentage: 0,
    filledFields: 0,
    totalFields: 0,
    status: 'Bad', // Bad, Good, Excellent
  });

  useEffect(() => {
    let filled = 0;
    let total = 0;

    // Helper to check if a value is considered "filled"
    const isFilled = (val) => {
      if (typeof val === 'string') return val.trim().length > 0;
      if (Array.isArray(val)) return val.length > 0;
      return false;
    };

    // 1. Personal Info (7 fields)
    if (personalData) {
      const pFields = ['fullName', 'email', 'phone', 'github', 'linkedin', 'location', 'summary'];
      total += pFields.length;
      pFields.forEach(field => {
        if (isFilled(personalData[field])) filled++;
      });
    }

    // 2. Education (5 fields)
    if (educationContext) {
      const eFields = ['school', 'degree', 'percentage', 'startDate', 'endDate'];
      total += eFields.length - 1; // Not counting endDate for now as it's not in the UI
      eFields.filter(f => f !== 'endDate').forEach(field => {
        if (isFilled(educationContext[field])) filled++;
      });
    }

    // 3. Experience (3 fields) - ONLY if type is 'experience'
    if (type === 'experience' && experienceContext) {
      const expFields = ['company', 'designation', 'desc'];
      total += expFields.length;
      expFields.forEach(field => {
        if (isFilled(experienceContext[field])) filled++;
      });
    }

    // 4. Projects (4 fields per project, counting only the first one for the base total)
    if (projectContextList && projectContextList.length > 0) {
      const p = projectContextList[0];
      const projFields = ['title', 'deployedlink', 'desc']; // Skipping technologies array for now as it's not mapped
      total += projFields.length;
      projFields.forEach(field => {
         if (isFilled(p[field])) filled++;
      });
    } else {
        total += 3; // base 3 fields empty project
    }

    // 5. Skills (3 arrays)
    if (skillsContext) {
      const skillFields = ['technical', 'soft', 'tools'];
      total += skillFields.length;
      // We'll approximate this by checking if the context has *anything* right now, 
      // but since they are arrays, let's just count them if length > 0
      skillFields.forEach(field => {
        if (skillsContext[field] && skillsContext[field].length > 0) filled++;
      });
    }

    const percentage = total === 0 ? 0 : Math.round((filled / total) * 100);
    
    let status = 'Bad';
    if (percentage >= 70) status = 'Excellent';
    else if (percentage >= 40) status = 'Good';

    setProgress({
      percentage,
      filledFields: filled,
      totalFields: total,
      status
    });

  }, [personalData, educationContext, experienceContext, projectContextList, skillsContext, type]);

  return progress;
};
