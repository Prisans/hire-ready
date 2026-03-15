import React, { useContext } from "react";
import { ExperienceContext } from "../../context/ExperienceInfo";

const Experience = () => {
  const { experienceContext, handleExperienceChange, addExperience, removeExperience } = useContext(ExperienceContext);

  return (
    <div className="flex flex-col gap-6">
      {experienceContext.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 border-b border-gray-200 pb-6 relative">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-700 font-medium">Experience {index + 1}</h3>
            {experienceContext.length > 1 && (
              <button 
                onClick={() => removeExperience(index)} 
                className="text-red-500 text-sm hover:text-red-700 font-medium focus:outline-none"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input name="company" value={item.company}
            onChange={(e) => handleExperienceChange(index, e)}
            type="text" placeholder="Company"
            className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

            <input name="designation" value={item.designation}
            onChange={(e) => handleExperienceChange(index, e)}
            type="text" placeholder="Role / Position"
            className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

            <textarea name="desc" value={item.desc}
            onChange={(e) => handleExperienceChange(index, e)}
            rows="4" placeholder="Work Description"
            className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"/>

          </div>
        </div>
      ))}
      <button 
        onClick={addExperience}
        className="w-full py-3 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-indigo-600 font-medium hover:bg-gray-100 hover:border-indigo-300 transition focus:outline-none"
      >
        + Add More Experience
      </button>
    </div>
  );
};

export default Experience;