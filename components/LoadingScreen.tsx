import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black flex items-center justify-center transition-opacity duration-500">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-white font-bold text-2xl">RS</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-black animate-bounce"></div>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <h1 className="text-3xl font-light tracking-tight text-black dark:text-white">
            Rahul Shah
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Full Stack Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Loading experience...
          </p>
        </div>
      </div>
    </div>
  );
};
