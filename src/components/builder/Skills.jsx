import React, { useContext } from "react";
import { SkillsContext } from "../../context/SkillsInfo";

const Skills = () => {
  const { technical, soft, tools, handleSkillChange } = useContext(SkillsContext);

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          name="technical"
          value={technical}
          onChange={handleSkillChange}
          type="text"
          placeholder="Technical Skills (React, Node, etc.)"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          name="soft"
          value={soft}
          onChange={handleSkillChange}
          type="text"
          placeholder="Soft Skills (Communication, Teamwork)"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          name="tools"
          value={tools}
          onChange={handleSkillChange}
          type="text"
          placeholder="Tools (Git, Docker, etc.)"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

      </div>

    </div>
  );
};

export default Skills;