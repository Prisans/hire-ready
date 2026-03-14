import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectInfo";

const Project = () => {
  const projectContextList = useContext(ProjectContext) || [];
  const projectContext = projectContextList[0] || {};
  // const handleProject = ... (Needs to be implemented in context or ignored for now)

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          name="title"
          value={projectContext?.title || ""}
          // onChange={handleProject}
          type="text"
          placeholder="Project Title"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          name="link"
          value={projectContext?.deployedlink || ""}
          // onChange={handleProject}
          type="text"
          placeholder="Project Link"
          className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <input
          name="tech"
          // value={projectContext?.technologies?.join(', ') || ""}
          // onChange={handleProject}
          type="text"
          placeholder="Tech Used (React, Node, etc)"
          className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <textarea
          name="desc"
          value={projectContext?.desc || ""}
          // onChange={handleProject}
          rows="4"
          placeholder="Project Description"
          className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
        />

      </div>

    </div>
  );
};

export default Project;