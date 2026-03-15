import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectInfo";

const Project = () => {
  const { projectContext, handleProjectChange, addProject, removeProject } = useContext(ProjectContext);

  return (
    <div className="flex flex-col gap-6">
      {projectContext.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 border-b border-gray-200 pb-6 relative">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-700 font-medium">Project {index + 1}</h3>
            {projectContext.length > 1 && (
              <button 
                onClick={() => removeProject(index)} 
                className="text-red-500 text-sm hover:text-red-700 font-medium focus:outline-none"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              name="title"
              value={item.title || ""}
              onChange={(e) => handleProjectChange(index, e)}
              type="text"
              placeholder="Project Title"
              className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              name="deployedlink"
              value={item.deployedlink || ""}
              onChange={(e) => handleProjectChange(index, e)}
              type="text"
              placeholder="Project Link"
              className="border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              name="technologies"
              value={item.technologies || ""}
              onChange={(e) => handleProjectChange(index, e)}
              type="text"
              placeholder="Tech Used (React, Node, etc)"
              className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <textarea
              name="desc"
              value={item.desc || ""}
              onChange={(e) => handleProjectChange(index, e)}
              rows="4"
              placeholder="Project Description"
              className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            />

          </div>
        </div>
      ))}
      <button 
        onClick={addProject}
        className="w-full py-3 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-indigo-600 font-medium hover:bg-gray-100 hover:border-indigo-300 transition focus:outline-none"
      >
        + Add More Project
      </button>
    </div>
  );
};

export default Project;