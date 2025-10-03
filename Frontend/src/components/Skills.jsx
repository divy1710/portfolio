import React, { useEffect, useState } from "react";
import { useInView } from "../hooks/useAnimations";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { colors } = useTheme();
  const [titleRef, titleInView] = useInView(0.3);
  const [skillsRef, skillsInView] = useInView(0.2);
  const [visibleCards, setVisibleCards] = useState(new Set());

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5 & CSS3", level: 92 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Redux", level: 75 },
        { name: "TypeScript", level: 70 },
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 90 },
        { name: "JWT Authentication", level: 82 },
        { name: "Socket.io", level: 75 },
        { name: "Middleware", level: 80 },
        { name: "Server Security", level: 78 },
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 87 },
        { name: "Mongoose ODM", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Database Design", level: 80 },
        { name: "Query Optimization", level: 72 },
        { name: "Data Modeling", level: 78 },
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS Basics", level: 60 },
        { name: "Netlify/Vercel", level: 80 },
        { name: "npm/yarn", level: 88 },
      ],
      color: "from-orange-400 to-red-400",
    },
  ];

  useEffect(() => {
    if (skillsInView) {
      skillCategories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => new Set([...prev, index]));
        }, index * 150);
      });
    }
  }, [skillsInView]);

  return (
    <section
      className={`py-20 ${colors.secondary} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4">
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
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern web development technologies and
            frameworks
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>

        <div
          ref={skillsRef}
          className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group ${
                visibleCards.has(categoryIndex)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  {category.title}
                </h3>
                <div
                  className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto mt-2 rounded-full group-hover:w-20 transition-all duration-300`}
                ></div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 group-hover/skill:text-gray-900 group-hover/skill:font-semibold transition-all duration-200">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 group-hover/skill:text-gray-700 group-hover/skill:font-medium transition-all duration-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden group-hover/skill:bg-gray-300 transition-colors duration-200">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform group-hover/skill:scale-105 animate-[width_2s_ease-out_1s_forwards] origin-left`}
                        style={{
                          width: visibleCards.has(categoryIndex)
                            ? `${skill.level}%`
                            : "0%",
                          animationDelay: `${
                            categoryIndex * 150 + skillIndex * 100
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                <div className="text-center">
                  <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    Proficiency Level
                  </span>
                  <div className="flex justify-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                          i <
                          Math.ceil(
                            category.skills.reduce(
                              (acc, skill) => acc + skill.level,
                              0
                            ) /
                              category.skills.length /
                              20
                          )
                            ? `bg-gradient-to-r ${category.color} group-hover:shadow-lg`
                            : "bg-gray-200 group-hover:bg-gray-300"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div
          className={`mt-16 bg-white rounded-2xl shadow-xl p-8 transition-all duration-800 delay-700 ${
            skillsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Core Competencies
            </h3>
            <p className="text-gray-600">
              Beyond technical skills, here's what makes me effective as a
              developer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "Problem Solving",
                description:
                  "Breaking down complex challenges into manageable solutions",
                bg: "from-blue-50 to-cyan-50",
                delay: "0ms",
              },
              {
                icon: "📚",
                title: "Continuous Learning",
                description:
                  "Staying updated with latest technologies and best practices",
                bg: "from-purple-50 to-pink-50",
                delay: "200ms",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description:
                  "Working effectively in teams and communicating technical concepts",
                bg: "from-green-50 to-emerald-50",
                delay: "400ms",
              },
            ].map((competency, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${
                  competency.bg
                } rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group cursor-pointer ${
                  skillsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                  {competency.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {competency.title}
                </h4>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
