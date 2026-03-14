import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-2xl p-12 max-w-3xl w-full text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Select Resume Type
        </h1>

        <div className="flex justify-center gap-8 mb-12">

          <Link to="/builder?type=beginner">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md cursor-pointer transition transform hover:scale-105 hover:bg-indigo-700 active:scale-95">
              🎓 Beginner
            </button>
          </Link>

          <Link to="/builder?type=experience">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium shadow-md cursor-pointer transition transform hover:scale-105 hover:bg-purple-700 active:scale-95">
                💼 Experience
            </button>
          </Link>

        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8">

          <h2 className="text-lg font-semibold text-gray-700 mb-6">
            Recent Resume
          </h2>

          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/260x320"
              alt="resume preview"
              className="rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default HomePage;