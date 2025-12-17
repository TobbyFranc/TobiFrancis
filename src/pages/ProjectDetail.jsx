import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectData from "./Project.json";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaTools,
  FaUserTie,
  FaLayerGroup,
  FaExclamationTriangle,
  FaChartLine,
  FaCode,
  FaClock,
  FaUsers
} from "react-icons/fa";
import { motion } from "framer-motion";

// Thumbnails from assets (map JSON filenames to imports)
import placeholderImage from "../assets/placeholderImage.jpeg";
import CryptoCardThumb from "../assets/CryptoCard.png";
import anchorrThumb from "../assets/Anchorr.png";
import ecommerceThumb from "../assets/Sella.png";

const imageMap = {
  "CryptoCard.png": CryptoCardThumb,
  "Anchorr.png": anchorrThumb,
  "Sella.png": ecommerceThumb,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center text-gray-500">
        <p>Project not found.</p>
      </section>
    );
  }

  const goBack = () => navigate(-1);

  return (
    <section className="w-full min-h-screen mt-24 px-6 md:px-12 bg-[var(--main-bg-color)] text-[var(--main-text-color)]">
      {/* Back button */}
      <motion.button
        onClick={goBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center cursor-pointer gap-2 mb-8 px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition"
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>

      {/* Scope */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm uppercase tracking-wide text-[var(--accent)] mb-2"
      >
        {project.scope}
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-4xl font-bold mb-6 py-6"
      >
        {project.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-md md:text-lg leading-relaxed mb-8 whitespace-pre-line"
      >
        {project.details}
      </motion.p>

      {/* Year + Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-6 mb-8 text-gray-600"
      >
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" /> {project.year}
        </span>
        {project.preview && (
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--accent)] hover:underline"
          >
            Preview Site <FaExternalLinkAlt />
          </a>
        )}
      </motion.div>
      {/*  */}

            {/* Banner Thumbnail */}
      {project.thumbnail && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg mb-12"
        >
          <img
            src={imageMap[project.thumbnail] || placeholderImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
      {/*  */}

      {/* Key Features + Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        {/* Key Features */}
        <div className="bg-[var(--card-bg-color)]/80 backdrop-blur-md p-6 rounded-lg shadow-lg border border-[var(--accent)]/20 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Key Features</h2>
          <ul className="space-y-3 pt-2 ">
            {project.features?.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 py-2">
                <FaCheckCircle className="text-gray-400" />
                <span className="text-[var(--main-text-color)]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Info */}
        <div className="bg-[var(--card-bg-color)]/80 backdrop-blur-md p-6 rounded-lg shadow-lg border border-[var(--accent)]/20 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Project Info</h2>
          <div className="space-y-6 pt-2">
            {/* Stacks */}
            {project.stacks?.length > 0 && (
              <div>
                <p className="flex items-center gap-2 mb-2 text-gray-500 font-medium">
                  <FaTools /> Stacks
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {project.stacks.map((stack, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1 text-sm rounded bg-gray-200 text-gray-700"
                    >
                      <FaCode className="text-gray-500" /> {stack}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Category */}
            <div>
              <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                <FaLayerGroup /> Category
              </p>
              <p className="text-[var(--main-text-color)] ">{project.category}</p>
            </div>

            {/* Role */}
            <div>
              <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                <FaUserTie /> Role
              </p>
              <p className="text-[var(--main-text-color)] ">{project.role}</p>
            </div>

            {/* Duration */}
            {project.duration && (
              <div>
                <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                  <FaClock /> Duration
                </p>
                <p className="text-[var(--main-text-color)] ">{project.duration}</p>
              </div>
            )}

            {/* Team */}
            {project.teamSize && (
              <div>
                <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                  <FaUsers /> Team
                </p>
                <p className="text-[var(--main-text-color)] ">{project.teamSize}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Challenges & Impact */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="max-w-4xl space-y-8 mt-12"
      >
        {project.challenges && (
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-2 text-[var(--accent)]">
              <FaExclamationTriangle /> Challenges
            </h2>
            <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
          </div>
        )}
        {project.impact && (
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-2 text-[var(--accent)]">
              <FaChartLine /> Impact
            </h2>
            <p className="text-gray-700 leading-relaxed">{project.impact}</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectDetail;
