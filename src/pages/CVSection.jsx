// src/pages/CVSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const CVSection = () => {
  return (
    <section className="pt-20 px-6 bg-[var(--main-bg-color)] min-h-screen flex flex-col items-center">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 w-full max-w-4xl flex items-center space-x-2">
        <Link to="/" className="hover:underline text-[var(--accent)]">Home</Link>
        <span>›</span>
        <span className="text-[var(--main-text-color)]">CV</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[var(--main-text-color)] mb-3">
          Curriculum Vitae
        </h1>
        <p className="text-[var(--secondary-text-color)]">
          Tobi Francis Ogunleye · Frontend Developer
        </p>
        <p className="text-sm text-[var(--secondary-text-color)] mt-1">
          Email: <span className="text-[var(--accent)]">tobbyfranc@gmail.com</span> · Phone: +2348144950975
        </p>
      </div>

      {/* Summary */}
      <div className="max-w-4xl w-full bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-[var(--main-text-color)] mb-2">Summary</h2>
        <p className="text-[var(--secondary-text-color)] leading-relaxed">
          Frontend developer passionate about responsive, user-friendly web experiences. Skilled in HTML, CSS,
          JavaScript, and React. Curious about design and merging tech with art.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-4xl w-full bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-[var(--main-text-color)] mb-2">Skills</h2>
        <ul className="list-disc list-inside text-[var(--secondary-text-color)] space-y-1">
          <li>HTML, CSS, JavaScript, React</li>
          <li>User Experience Design</li>
          <li>User Research</li>
          <li>Data Analysis</li>
        </ul>
      </div>

      {/* Education & Certifications */}
      <div className="max-w-4xl w-full bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-[var(--main-text-color)] mb-2">Education & Certifications</h2>
        <ul className="list-disc list-inside text-[var(--secondary-text-color)] space-y-2">
          <li>Zuri-HNG Frontend Course</li>
          <li>Google: Foundations of User Experience (UX) Design (Completed May 2022)</li>
          <li>Georgia Institute of Technology: Introduction to User Experience Design (Completed August 2022)</li>
          <li>Meta: Introduction to Front-End Development (Completed September 2023)</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="max-w-4xl w-full bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-[var(--main-text-color)] mb-2">Projects</h2>
        <ul className="list-disc list-inside text-[var(--secondary-text-color)] space-y-2">
          <li>Personal portfolio website</li>
          <li>Open-source contributions</li>
          <li>Sella ecommerce landing page</li>
          <li>CryptoCard</li>
        </ul>
      </div>

      {/* Download CV Button */}
      <div className="mt-6">
        <a
          href="/cv/Tobi_CV.pdf"   //
          download
          className="px-5 py-3 bg-[var(--accent)] text-[var(--main-bg-color)] flex items-center justify-center rounded-md hover:bg-[var(--accent)]/80 transition font-medium"
        >
          Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CVSection;
