import React, { useContext } from "react";
import { PersonalContext } from "../../context/PersonalInfo";

const PersonalComp = () => {
  const {
    personalData: { fullName, email, phone, github, linkedin, location, summary },
    handleChange,
  } = useContext(PersonalContext);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input name="fullName" value={fullName} onChange={handleChange}
        type="text" placeholder="Full Name"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="email" value={email} onChange={handleChange}
        type="email" placeholder="Email"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="phone" value={phone} onChange={handleChange}
        type="number" placeholder="Phone"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="location" value={location} onChange={handleChange}
        type="text" placeholder="Location"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="github" value={github} onChange={handleChange}
        type="text" placeholder="Github"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="linkedin" value={linkedin} onChange={handleChange}
        type="text" placeholder="LinkedIn"
        className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <textarea name="summary" value={summary} onChange={handleChange}
        rows="4" placeholder="Professional Summary"
        className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"/>

      </div>

    </div>
  );
};

export default PersonalComp;