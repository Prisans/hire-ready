import React, { useContext } from "react";
import { EducationContext } from "../../context/EducationInfo";

const Education = () => {
  const { educationContext, handleEducationChange, addEducation, removeEducation } = useContext(EducationContext);

  return (
    <div className="flex flex-col gap-6">
      {educationContext.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 border-b border-gray-200 pb-6 relative">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-700 font-medium">Education {index + 1}</h3>
            {educationContext.length > 1 && (
              <button 
                onClick={() => removeEducation(index)} 
                className="text-red-500 text-sm hover:text-red-700 font-medium focus:outline-none"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input name="school" value={item.school} onChange={(e) => handleEducationChange(index, e)}
            type="text" placeholder="School / College"
            className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

            <input name="degree" value={item.degree} onChange={(e) => handleEducationChange(index, e)}
            type="text" placeholder="Degree"
            className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

            <input name="percentage" value={item.percentage} onChange={(e) => handleEducationChange(index, e)}
            type="text" placeholder="Percentage / CGPA"
            className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

            <input name="startDate" value={item.startDate} onChange={(e) => handleEducationChange(index, e)}
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-pointer"/>

          </div>
        </div>
      ))}
      <button 
        onClick={addEducation}
        className="w-full py-3 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-indigo-600 font-medium hover:bg-gray-100 hover:border-indigo-300 transition focus:outline-none"
      >
        + Add More Education
      </button>
    </div>
  );
};

export default Education;