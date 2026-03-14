import React, { useContext } from "react";
import { EducationContext } from "../../context/EducationInfo";

const Education = () => {
  const { educationContext, handleChange } = useContext(EducationContext);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input name="school" value={educationContext.school} onChange={handleChange}
        type="text" placeholder="School / College"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="degree" value={educationContext.degree} onChange={handleChange}
        type="text" placeholder="Degree"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="percentage" value={educationContext.percentage} onChange={handleChange}
        type="text" placeholder="Percentage / CGPA"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="startDate" value={educationContext.startDate} onChange={handleChange}
        type="date"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-pointer"/>

      </div>

    </div>
  );
};

export default Education;