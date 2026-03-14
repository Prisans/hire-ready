import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg mb-4 overflow-hidden outline outline-1 outline-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-indigo-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
