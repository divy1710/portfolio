import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { colors, isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const headline = "Crafting Digital Solutions with Code";
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    // Trigger animations on component mount
    const timer = setTimeout(() => {
      setIsLoaded(true);

      // Start character reveal animation
      const charTimer = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev < headline.length) {
            return prev + 1;
          } else {
            clearInterval(charTimer);
            // Show subtext after headline completes
            setTimeout(() => setShowSubtext(true), 200);
            // Show buttons after subtext
            setTimeout(() => setShowButtons(true), 800);
            return prev;
          }
        });
      }, 50);

      return () => clearInterval(charTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, [headline.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of fixed navbar
      const targetPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const downloadCV = async () => {
    setIsDownloading(true);

    try {
      // First try to download the PDF file
      const pdfResponse = await fetch("/Divy_Kalathiya_Resume.pdf");

      if (pdfResponse.ok) {
        // PDF exists, download it
        const blob = await pdfResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Divy_Kalathiya_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        // PDF doesn't exist, open the HTML resume template in a new tab
        window.open("/resume-template.html", "_blank");
      }
    } catch (error) {
      console.error("Error downloading CV:", error);
      // Fallback: open the HTML resume template
      window.open("/resume-template.html", "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      className={`min-h-screen ${colors.heroBackground} flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-500`}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 ${
            isDark ? "bg-blue-500/10" : "bg-blue-500/20"
          } rounded-full animate-pulse`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 ${
            isDark ? "bg-purple-500/10" : "bg-purple-500/20"
          } rounded-full animate-pulse`}
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className={`max-w-4xl mx-auto text-center ${
          colors.textPrimary
        } relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Small heading line */}
        <p
          className={`text-lg md:text-xl mb-1 font-extrabold ${
            isDark ? "text-blue-400" : "text-blue-600"
          } uppercase tracking-widest transition-all duration-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Welcome to my Portfolio
        </p>

        {/* Headline with staggered character reveal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent min-h-[4rem] md:min-h-[6rem]">
          {headline.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-300 ${
                index < visibleChars
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                transformOrigin: "bottom",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Introduction with fade-in effect */}
        <p
          className={`text-xl md:text-2xl mb-8 ${
            colors.textSecondary
          } max-w-3xl mx-auto leading-relaxed transition-all duration-800 ${
            showSubtext
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          I'm a passionate B.Tech IT student and Full-Stack MERN Developer who
          transforms ideas into powerful web applications. With a strong
          foundation in modern web technologies and a keen eye for user
          experience, I build scalable solutions that make a difference.
        </p>

        {/* Call to Action Buttons with enhanced hover effects */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-800 ${
            showButtons
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:scale-95"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View My Projects</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </span>
          </button>
          <button
            onClick={downloadCV}
            disabled={isDownloading}
            className={`group border-2 ${
              isDark
                ? "border-white text-white hover:bg-white hover:text-slate-900"
                : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
            } font-semibold py-4 px-8 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
          >
            <span className="flex items-center justify-center space-x-2">
              {isDownloading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span>Download Resume</span>
                </>
              )}
            </span>
          </button>
        </div>

        {/* Scroll indicator with enhanced animation */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            showButtons
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div
            className="animate-bounce cursor-pointer group"
            onClick={() => scrollToSection("about")}
          >
            <div
              className={`p-2 rounded-full border ${
                isDark
                  ? "border-white/30 group-hover:border-white/60"
                  : "border-gray-800/30 group-hover:border-gray-800/60"
              } transition-colors duration-300`}
            >
              <svg
                className={`w-6 h-6 ${
                  isDark
                    ? "text-white group-hover:text-blue-400"
                    : "text-gray-800 group-hover:text-blue-600"
                } transition-colors duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
