import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Initials */}
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-blue-500/30 rounded-full animate-spin">
            <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-2xl font-bold">DK</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-lg font-medium animate-pulse">
          Loading Portfolio...
        </div>

        {/* Loading Bar */}
        <div className="mt-4 w-48 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
