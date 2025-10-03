import React from "react";
import { useInView } from "../hooks/useAnimations";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const { colors } = useTheme();
  const [titleRef, titleInView] = useInView(0.3);
  const [textRef, textInView] = useInView(0.3);
  const [profileRef, profileInView] = useInView(0.3);

  return (
    <section
      className={`py-20 ${colors.primary} transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto px-4">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards] origin-center"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={textRef}
            className={`space-y-6 transition-all duration-800 delay-200 ${
              textInView
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p
              className={`text-lg ${colors.textSecondary} leading-relaxed hover:${colors.textPrimary} transition-colors duration-300`}
            >
              As a dedicated B.Tech Information Technology student, I've
              channeled my academic foundation into mastering the art of
              full-stack web development. My journey in technology is driven by
              an insatiable curiosity to solve complex problems and create
              meaningful digital experiences.
            </p>

            <p
              className={`text-lg ${colors.textSecondary} leading-relaxed hover:${colors.textPrimary} transition-colors duration-300`}
            >
              Specializing in the MERN stack (MongoDB, Express.js, React,
              Node.js), I bring together robust backend architectures with
              intuitive frontend interfaces. My approach combines theoretical
              knowledge from my IT studies with hands-on experience in modern
              web technologies, enabling me to deliver scalable, efficient, and
              user-centric solutions.
            </p>

            <p
              className={`text-lg ${colors.textSecondary} leading-relaxed transition-colors duration-300`}
            >
              I thrive on challenges that push the boundaries of conventional
              web development, constantly learning new technologies and
              methodologies to stay at the forefront of the ever-evolving tech
              landscape. My goal is to contribute to innovative projects that
              make a positive impact on users' lives while growing as a
              professional developer.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                {
                  text: "Problem Solver",
                  bg: "bg-blue-100",
                  text_color: "text-blue-800",
                  delay: "0ms",
                },
                {
                  text: "Fast Learner",
                  bg: "bg-purple-100",
                  text_color: "text-purple-800",
                  delay: "100ms",
                },
                {
                  text: "Team Player",
                  bg: "bg-green-100",
                  text_color: "text-green-800",
                  delay: "200ms",
                },
                {
                  text: "Innovation Focused",
                  bg: "bg-orange-100",
                  text_color: "text-orange-800",
                  delay: "300ms",
                },
              ].map((tag, index) => (
                <span
                  key={index}
                  className={`${tag.bg} ${
                    tag.text_color
                  } px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:shadow-md cursor-default ${
                    textInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={profileRef}
            className={`relative transition-all duration-800 delay-400 ${
              profileInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div
              className={`bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1 hover:shadow-2xl transition-shadow duration-500`}
            >
              <div
                className={`${colors.card} rounded-2xl p-8 hover:${colors.cardHover} transition-colors duration-300`}
              >
                <div className="text-center">
                  {/* Profile Photo */}
                  <div className="w-48 h-48 mx-auto mb-8 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-pulse group-hover:animate-none transition-all duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <img
                        src="/ProfilePhoto.jpg"
                        alt="Divy Kalathiya"
                        className="w-full h-full object-cover object-top scale-110"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.target.style.display = "none";
                          e.target.nextElementSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback initials (hidden by default) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full items-center justify-center text-white text-5xl font-bold hidden">
                        DK
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-full transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                        👋 Hey there!
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-bold ${colors.textPrimary} mb-2 hover:text-blue-600 transition-colors duration-300`}
                  >
                    Divy Kalathiya
                  </h3>
                  <p className={`${colors.textSecondary} mb-4`}>
                    B.Tech IT Student & MERN Developer
                  </p>
                  <div className="flex justify-center space-x-4">
                    {[
                      {
                        number: "7+",
                        label: "Projects",
                        color: "text-blue-500",
                      },
                      {
                        number: "2+",
                        label: "Years Learning",
                        color: "text-purple-500",
                      },
                      {
                        number: "100%",
                        label: "Dedicated",
                        color: "text-green-500",
                      },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center group cursor-pointer"
                      >
                        <div
                          className={`text-2xl font-bold ${stat.color} group-hover:scale-125 transition-transform duration-300`}
                        >
                          {stat.number}
                        </div>
                        <div
                          className={`text-sm ${colors.textSecondary} group-hover:${colors.textPrimary} transition-colors duration-300`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
