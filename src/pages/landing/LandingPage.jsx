import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 px-6">

      <div className="text-center max-w-2xl bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl">

        <h1 className="text-5xl font-bold text-white leading-tight">
          Build Resume
          <br />
          That Gets You Ready
        </h1>

        <p className="text-gray-200 mt-6 text-lg leading-relaxed">
          Create a clean resume in minutes. Choose a template,
          add your details, and download instantly.
        </p>

        <Link to="/home">
          <button className="mt-10 px-10 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 hover:bg-gray-100 active:scale-95">
            Start Building
          </button>
        </Link>

      </div>

    </div>
  );
};

export default LandingPage;