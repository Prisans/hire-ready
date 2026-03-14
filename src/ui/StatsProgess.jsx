import React from 'react';
import { useFormProgress } from '../hooks/useFormProgress';
import { Trophy, CheckCircle2, AlertCircle } from 'lucide-react';

const StatsProgess = () => {
  const { percentage, filledFields, totalFields, status } = useFormProgress();

  // Determine styling based on status
  let bgColor = 'bg-red-500';
  let textColor = 'text-red-700';
  let lightBgColor = 'bg-red-50';
  let StatusIcon = AlertCircle;

  if (status === 'Excellent') {
    bgColor = 'bg-emerald-500';
    textColor = 'text-emerald-700';
    lightBgColor = 'bg-emerald-50';
    StatusIcon = Trophy;
  } else if (status === 'Good') {
    bgColor = 'bg-yellow-400';
    textColor = 'text-yellow-700';
    lightBgColor = 'bg-yellow-50';
    StatusIcon = CheckCircle2;
  }

  return (
    <div className={`w-full rounded-2xl p-6 shadow-sm border border-gray-100 mb-8 transition-colors duration-500 ${lightBgColor}`}>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <StatusIcon className={`w-6 h-6 ${textColor}`} />
          <div>
            <h3 className={`font-semibold text-lg ${textColor}`}>
              Resume Score: {status}
            </h3>
            <p className="text-gray-600 text-sm font-medium mt-0.5">
              {filledFields} of {totalFields} fields completed
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <span className={`text-4xl font-bold tracking-tight ${textColor}`}>
            {percentage}%
          </span>
        </div>
      </div>

      <div className="w-full h-3 bg-white/60 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full ${bgColor} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
    </div>
  );
};

export default StatsProgess;