import React from "react";

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen w-screen bg-[var(--main-bg-color)] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="animate-spin rounded-full border-4 border-[var(--secondary-text-color)] border-t-[var(--accent)] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-6"></div>
      <p className="text-sm sm:text-base md:text-lg text-[var(--secondary-text-color)] tracking-wide">
        Preparing Tobi Francis’ Portfolio...
      </p>
    </div>
  );
};

export default LoadingScreen;
