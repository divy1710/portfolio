import React, { useState } from "react";
import { useInView } from "../hooks/useAnimations";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
  const { colors, isDark } = useTheme();
  const [titleRef, titleInView] = useInView(0.3);
  const [projectsRef, projectsInView] = useInView(0.2);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Student-Faculty Doubt Solving Platform",
      shortDescription:
        "Full-stack web platform connecting students with faculty members for academic doubt resolution with role-based access.",
      fullDescription:
        "Developed a comprehensive MERN stack platform that facilitates seamless communication between students and faculty for academic support. The platform features secure JWT-based authentication with three distinct roles: Student, Faculty, and Admin. Students can submit academic queries with file attachments (PDF/images) using Multer integration, while faculty members can provide detailed responses. The system includes intelligent status tracking (Pending, Answered) with automatic updates and maintains proper data relationships in MongoDB for efficient query management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Multer",
        "Tailwind CSS",
        "ShadCN UI",
      ],
      keyFeatures: [
        "Role-based Authentication (Student, Faculty, Admin)",
        "File Upload System for Attachments",
        "Real-time Status Tracking",
        "Secure JWT Authentication",
        "Responsive UI with ShadCN Components",
        "MongoDB Data Relationships",
      ],
      liveDemo: "https://doubt-solver-demo.vercel.app",
      sourceCode: "https://github.com/divy1710/SGPPROJECT",
      image: "🎓",
      gradient: "from-blue-400 to-indigo-600",
      category: "Education",
    },
    {
      id: 2,
      title: "AgriRant - Agricultural Equipment Rental Platform",
      shortDescription:
        "Digital rental platform helping farmers access modern farming equipment through hierarchical resource management.",
      fullDescription:
        "AgriRant is a comprehensive MERN stack solution designed to revolutionize agricultural equipment accessibility for farmers. The platform implements a sophisticated hierarchical resource management system (State → District → Taluka → Village) ensuring efficient distribution and monitoring of farming equipment. Features include real-time tracking of equipment assignments, detailed rental history to prevent misuse, and integrated Stripe payment gateway for secure transactions. The platform automates manual processes, reduces inefficiencies, and enables transparent, data-driven decision-making for administrators while improving agricultural resource utilization.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe API",
        "TailwindCSS",
        "JWT",
      ],
      keyFeatures: [
        "Hierarchical Resource Management System",
        "Real-time Equipment Tracking",
        "Stripe Payment Integration",
        "Rental History & Analytics",
        "Location-based Equipment Distribution",
        "Administrative Dashboard",
      ],
      liveDemo: "https://agrirant-demo.vercel.app",
      sourceCode: "https://github.com/vinitsaspara/AgriRent",
      image: "🚜",
      gradient: "from-green-400 to-emerald-600",
      category: "Agriculture",
    },
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
        <div
          className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${colors.card} rounded-2xl shadow-2xl`}
        >
          <div
            className={`sticky top-0 flex justify-between items-center p-6 border-b ${colors.border} bg-opacity-95 backdrop-blur-sm`}
          >
            <h3 className={`text-2xl font-bold ${colors.textPrimary}`}>
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className={`p-2 rounded-full ${colors.hover} transition-colors duration-200`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className={`text-lg ${colors.textSecondary} leading-relaxed`}>
              {project.fullDescription}
            </div>

            <div>
              <h4
                className={`text-xl font-semibold ${colors.textPrimary} mb-3`}
              >
                Key Features
              </h4>
              <div className="grid md:grid-cols-2 gap-2">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 ${colors.textSecondary}`}
                  >
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4
                className={`text-xl font-semibold ${colors.textPrimary} mb-3`}
              >
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${colors.tertiary} ${colors.textSecondary}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`py-20 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } relative overflow-hidden transition-colors duration-500`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 ${
            isDark ? "bg-blue-500/5" : "bg-blue-500/10"
          } rounded-full blur-3xl`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 ${
            isDark ? "bg-purple-500/5" : "bg-purple-500/10"
          } rounded-full blur-3xl`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-4`}
          >
            Featured Projects
          </h2>
          <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto`}>
            A showcase of my recent work, featuring modern web applications
            built with cutting-edge technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-800 ${
            projectsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${colors.card} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${colors.border}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Icon & Category */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`text-4xl p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}
                >
                  {project.image}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tertiary} ${colors.textSecondary}`}
                >
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3
                className={`text-xl font-bold ${colors.textPrimary} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${project.gradient} transition-all duration-300`}
              >
                {project.title}
              </h3>

              {/* Short Description */}
              <p
                className={`${colors.textSecondary} mb-6 leading-relaxed line-clamp-3`}
              >
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs ${colors.tertiary} ${colors.textMuted}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className={`px-2 py-1 rounded text-xs ${colors.textMuted}`}
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center flex items-center justify-center space-x-2 group"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>More Details</span>
                </button>
              </div>

              {/* Live Demo Link */}
              <div className="mt-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center ${colors.textSecondary} hover:text-blue-500 text-sm transition-colors duration-300 flex items-center justify-center space-x-1`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>View Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
