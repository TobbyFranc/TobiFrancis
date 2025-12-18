import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../sanityClient"; // reuse your blog client
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
import placeholderImage from "../assets/placeholderImage.jpeg";

// If you want rich text rendering for "details"
import { PortableText } from "@portabletext/react";

const ProjectDetail = () => {
  const { slug } = useParams(); // use slug instead of id
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await client.fetch(
        `*[_type == "project" && slug.current == $slug][0]{
          title,
          scope,
          details,
          year,
          preview,
          thumbnail,
          features,
          stacks,
          category,
          role,
          duration,
          teamSize,
          challenges,
          impact
        }`,
        { slug }
      );
      setProject(data);
    };
    fetchProject();
  }, [slug]);

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
        className="flex items-center gap-2 mb-8 px-4 py-2 bg-[var(--accent)] text-[var(--main-bg-color)] rounded-md hover:bg-[var(--accent)]/80 transition"
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>

      {/* Scope */}
      <p className="text-sm uppercase tracking-wide text-[var(--accent)] mb-2">
        {project.scope}
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6 py-6">{project.title}</h1>

      {/* Description */}
      <div className="text-md md:text-lg leading-relaxed mb-8 whitespace-pre-line">
        {Array.isArray(project.details) ? (
          <PortableText value={project.details} />
        ) : (
          project.details
        )}
      </div>

      {/* Year + Preview */}
      <div className="flex items-center gap-6 mb-8 text-gray-600">
        <span className="flex items-center gap-2">
          <FaCalendarAlt /> {project.year}
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
      </div>

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="w-full max-w-5xl h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg mb-12">
          <img
            src={urlFor(project.thumbnail)}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Key Features + Project Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Key Features */}
        <div className="bg-[var(--card-bg-color)]/80 p-6 rounded-lg shadow-lg border border-[var(--accent)]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Key Features</h2>
          <ul className="space-y-3 pt-2">
            {project.features?.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 py-2">
                <FaCheckCircle className="text-gray-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Info */}
        <div className="bg-[var(--card-bg-color)]/80 p-6 rounded-lg shadow-lg border border-[var(--accent)]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--accent)]">Project Info</h2>
          <div className="space-y-6 pt-2">
            {project.stacks?.length > 0 && (
              <div>
                <p className="flex items-center gap-2 mb-2 text-gray-500 font-medium">
                  <FaTools /> Stacks
                </p>
                <div className="flex flex-wrap gap-2">
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
            <div>
              <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                <FaLayerGroup /> Category
              </p>
              <p>{project.category}</p>
            </div>
            <div>
              <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                <FaUserTie /> Role
              </p>
              <p>{project.role}</p>
            </div>
            {project.duration && (
              <div>
                <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                  <FaClock /> Duration
                </p>
                <p>{project.duration}</p>
              </div>
            )}
            {project.teamSize && (
              <div>
                <p className="flex items-center gap-2 mb-1 text-gray-500 font-medium">
                  <FaUsers /> Team
                </p>
                <p>{project.teamSize}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Challenges & Impact */}
      <div className="max-w-4xl space-y-8 mt-12">
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
      </div>
    </section>
  );
};

export default ProjectDetail;
