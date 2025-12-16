import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import placeholderImage from "../assets/placeholde.png";
import projectData from "./Project.json";

//"https://example.com/sella-ecommerce",

// Import thumbnails from assets
import CryptoCardThumb from "../assets/CryptoCard.png";
import anchorrThumb from "../assets/Anchorr.png";
import ecommerceThumb from "../assets/Sella.png";

// Map JSON filenames to actual imports
const imageMap = {
  "CryptoCard.png": CryptoCardThumb,
  "Anchorr.png": anchorrThumb,
  "Sella.png": ecommerceThumb,
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectData);
      setLoading(false);
    }, 500);
  }, []);

  const filteredProjects =
    filtered === "all"
      ? projects
      : projects.filter((p) => p.category === filtered);

  const filterButtons = [
    { label: "All", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "UX Design", value: "ux" },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen pt-20 px-4 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-semibold text-[var(--main-text-color)]">
        Projects
      </h2>
      <p className="open-sans-200 text-md text-[var(--secondary-text-color)] mt-2">
        A showcase of my work
      </p>

      {/* Filter buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {filterButtons.map((btn) => (
          <motion.button
            key={btn.value}
            onClick={() => setFiltered(btn.value)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-md transition duration-300 cursor-pointer ${
              filtered === btn.value
                ? "bg-[var(--accent)] text-[var(--main-bg-color)]"
                : "bg-[var(--button-bg-color)] text-[var(--main-text-color)] hover:bg-[var(--card-bg-color)] hover:text-[var(--accent)]"
            }`}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="mt-8 text-[var(--secondary-text-color)]">
          Loading projects...
        </div>
      )}

      {/* Empty state */}
      {!loading && filteredProjects.length === 0 && (
        <div className="mt-8 text-[var(--secondary-text-color)]">
          No projects found.
        </div>
      )}

      {/* Projects grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"> */}

        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--card-bg-color)] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col w-full"
            >
              {/* Thumbnail fills top */}
              <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-xl">
                <img
                  src={imageMap[project.thumbnail] || placeholderImage}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-[var(--main-text-color)] mb-3 text-left tracking-wide">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-[var(--secondary-text-color)] open-sans-200 mb-5 flex-grow text-left text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Stacks */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stacks.map((stack, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs rounded bg-[var(--button-bg-color)] text-[var(--secondary-text-color)]"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-2 px-3 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/70 transition duration-300 text-sm"
                  >
                    <FaInfoCircle className="w-4 h-4" /> Details
                  </Link>
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--button-bg-color)] text-[var(--main-text-color)] rounded-md hover:bg-[var(--card-bg-color)] hover:text-[var(--accent)] transition duration-300 text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" /> Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
