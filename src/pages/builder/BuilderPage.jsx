import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import StatsProgess from '../../ui/StatsProgess'
import PersonalComp from '../../components/builder/PersonalComp'
import Education from '../../components/builder/Education'
import Experience from '../../components/builder/Experience'
import Project from '../../components/builder/Project'
import Skills from '../../components/builder/Skills'
import Accordion from '../../ui/Accordion'

const BuilderPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'beginner';
  const [openSection, setOpenSection] = useState('Personal Information');

  const allSections = [
    { title: 'Personal Information', component: <PersonalComp />, show: true },
    { title: 'Education', component: <Education />, show: true },
    { title: 'Experience', component: <Experience />, show: type === 'experience' },
    { title: 'Projects', component: <Project />, show: true },
    { title: 'Skills', component: <Skills />, show: true },
  ];

  const visibleSections = allSections.filter(sec => sec.show);

  return (
    <div className="flex h-screen overflow-hidden w-full">
      {/* Form Details Area (Left Half) */}
      <div className="w-1/2 h-full overflow-y-auto p-8 bg-white border-r">
        <StatsProgess />
        {visibleSections.map((section, index) => (
          <Accordion
            key={index}
            title={section.title}
            isOpen={openSection === section.title}
            onToggle={() => setOpenSection(openSection === section.title ? '' : section.title)}
          >
            {section.component}
          </Accordion>
        ))}
      </div>

      {/* Preview Area (Right Half) */}
      <div className="w-1/2 h-full overflow-y-auto bg-gray-50 flex flex-col items-center relative">
        <div className="w-full sticky top-0 z-10 bg-white shadow-sm border-b py-4 px-6 mb-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Resume Preview</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-sm hover:from-purple-600 hover:to-indigo-700 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Magic
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-medium rounded-lg shadow-sm hover:bg-gray-800 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
          </div>
        </div>
        
        {/* A4 Document Placeholder using responsive sizing and exact A4 aspect ratio */}
        <div className="w-[90%] max-w-[800px] aspect-[210/297] bg-white shadow-xl mb-10 p-8 shrink-0">
           <div className="flex flex-col h-full items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
             <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
             <p className="text-lg font-medium">Your preview will appear here</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default BuilderPage