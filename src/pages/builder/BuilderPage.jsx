import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import StatsProgess from '../../ui/StatsProgess'
import PersonalComp from '../../components/builder/PersonalComp'
import Education from '../../components/builder/Education'
import Experience from '../../components/builder/Experience'
import Project from '../../components/builder/Project'
import Skills from '../../components/builder/Skills'
import Accordion from '../../ui/Accordion'
import Preview from '../../components/builder/Preview'

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
      <Preview/>
    </div>
  )
}

export default BuilderPage