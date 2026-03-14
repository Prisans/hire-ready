import React, { useContext } from "react";
import { SkillsContext } from "../../context/SkillsInfo";

const Skills = () => {
  const skillsContext = useContext(SkillsContext);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          name="frontend"
          // value={skillsContext.technical}
          // onChange={handleSkill}
          type="text"
          placeholder="Frontend (React, HTML, CSS)"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          name="backend"
          // value={skillsContext.backend}
          // onChange={handleSkill}
          type="text"
          placeholder="Backend (Node, Express)"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          name="database"
          // value={skillsContext.database}
          // onChange={handleSkill}
          type="text"
          placeholder="Database (MongoDB, MySQL)"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          name="tools"
          // value={skillsContext.tools}
          // onChange={handleSkill}
          type="text"
          placeholder="Tools (Git, Postman)"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

      </div>

    </div>
  );
};

export default Skills;