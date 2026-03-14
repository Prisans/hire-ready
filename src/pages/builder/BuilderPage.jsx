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
    <div className="max-w-4xl mx-auto py-8">
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
  )
}

export default BuilderPage