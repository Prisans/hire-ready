import React, { useContext, useRef } from 'react'
import { PersonalContext } from '../../context/PersonalInfo'
import { EducationContext } from '../../context/EducationInfo'
import { ExperienceContext } from '../../context/ExperienceInfo'
import { ProjectContext } from '../../context/ProjectInfo'
import { SkillsContext } from '../../context/SkillsInfo'
import { useReactToPrint } from 'react-to-print'

const Preview = () => {
  const { personalData } = useContext(PersonalContext);
  const { educationContext } = useContext(EducationContext);
  const { experienceContext } = useContext(ExperienceContext);
  const { projectContext } = useContext(ProjectContext);
  const { technical, soft, tools } = useContext(SkillsContext);

  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${personalData.fullName || 'Resume'}`,
  });

  const hasItemData = (item) => item && Object.entries(item).some(([key, val]) => typeof val === 'string' && val.trim() !== "");
  const hasArrayData = (arr) => arr && arr.some(item => hasItemData(item));

  return (
    <div className="w-1/2 h-full overflow-y-auto bg-gray-100 flex flex-col items-center relative py-8">
      {/* Hide browser headers/footers during print */}
      <style>
        {`@media print {
            @page { margin: 0; size: auto; }
            body { margin: 0; }
          }`}
      </style>
      <div className="w-full sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm border-b py-4 px-6 mb-8 flex justify-between items-center max-w-[900px] rounded-b-xl">
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Resume Preview</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI Magic
          </button>
          <button 
            onClick={() => handlePrint()}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-medium rounded-lg shadow-md hover:bg-black transition-all active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* A4 Document Wrapper */}
      <div ref={resumeRef} className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mb-10 p-[15mm] flex flex-col font-serif text-gray-800 border border-gray-200">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900 mb-2">
            {personalData.fullName || "Your Full Name"}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 font-sans italic">
            {personalData.email && <span>{personalData.email}</span>}
            {personalData.phone && <span>• {personalData.phone}</span>}
            {personalData.location && <span>• {personalData.location}</span>}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm font-sans">
            {personalData.linkedin && (
              <a href={personalData.linkedin} className="text-indigo-600 hover:underline">LinkedIn</a>
            )}
            {personalData.github && (
              <a href={personalData.github} className="text-indigo-600 hover:underline">GitHub</a>
            )}
          </div>
        </div>

        {/* Summary */}
        {personalData.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-gray-900 uppercase mb-2">Summary</h2>
            <p className="text-[10pt] leading-relaxed text-justify">{personalData.summary}</p>
          </div>
        )}

        {/* Experience */}
        {hasArrayData(experienceContext) && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-gray-900 uppercase mb-2">Work Experience</h2>
            {experienceContext.map((exp, index) => hasItemData(exp) && (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline font-bold text-[11pt]">
                  <span>{exp.designation}</span>
                  <span className="font-normal italic text-[10pt]">{exp.startDate} {exp.endDate ? `— ${exp.endDate}` : ""}</span>
                </div>
                <div className="italic text-[10pt] mb-1">{exp.company}</div>
                <p className="text-[10pt] leading-snug whitespace-pre-wrap">{exp.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {hasArrayData(educationContext) && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-gray-900 uppercase mb-2">Education</h2>
            {educationContext.map((edu, index) => hasItemData(edu) && (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline font-bold text-[11pt]">
                  <span>{edu.school}</span>
                  <span className="font-normal italic text-[10pt]">{edu.startDate} {edu.endDate ? `— ${edu.endDate}` : ""}</span>
                </div>
                <div className="flex justify-between italic text-[10pt]">
                  <span>{edu.degree}</span>
                  {edu.percentage && <span>{edu.percentage} %</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {hasArrayData(projectContext) && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-gray-900 uppercase mb-2">Projects</h2>
            {projectContext.map((proj, index) => hasItemData(proj) && (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline font-bold text-[11pt]">
                  <span>{proj.title}</span>
                  <div className="flex gap-2 font-normal text-[10pt] text-indigo-600">
                    {proj.deployedlink && <a href={proj.deployedlink} className="hover:underline">Live Link</a>}
                    {proj.githublink && <a href={proj.githublink} className="hover:underline">GitHub</a>}
                  </div>
                </div>
                {proj.technologies && <div className="text-[9pt] font-sans text-gray-500 mb-1">Tech Stack: {proj.technologies}</div>}
                <p className="text-[10pt] leading-snug whitespace-pre-wrap">{proj.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {(technical || soft || tools) && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-gray-900 uppercase mb-2">Skills</h2>
            <div className="text-[10pt] leading-relaxed">
              {technical && (
                <div className="mb-1">
                  <span className="font-bold">Technical: </span>
                  <span>{technical}</span>
                </div>
              )}
              {soft && (
                <div className="mb-1">
                  <span className="font-bold">Soft Skills: </span>
                  <span>{soft}</span>
                </div>
              )}
              {tools && (
                <div className="mb-1">
                  <span className="font-bold">Tools: </span>
                  <span>{tools}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Placeholder for empty resume */}
        {!personalData.fullName && !hasArrayData(experienceContext) && !hasArrayData(educationContext) && (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-300 border-2 border-dashed border-gray-100 rounded-xl">
             <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
             <p className="text-xl font-medium font-sans">Start filling your details to see the magic!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Preview
