import React, { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceInfo";

const Experience = () => {
  const { experienceContext, handleExperience } = useContext(ExperienceContext);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input name="company" value={experienceContext.company}
        onChange={handleExperience}
        type="text" placeholder="Company"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="designation" value={experienceContext.designation}
        onChange={handleExperience}
        type="text" placeholder="Role / Position"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <textarea name="desc" value={experienceContext.desc}
        onChange={handleExperience}
        rows="4" placeholder="Work Description"
        className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"/>

      </div>

    </div>
  );
};

export default Experience;