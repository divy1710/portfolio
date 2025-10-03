import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Default to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

    // Update document class for Tailwind
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Background colors
      primary: isDark ? "bg-gray-900" : "bg-white",
      secondary: isDark ? "bg-gray-800" : "bg-gray-50",
      tertiary: isDark ? "bg-gray-700" : "bg-gray-100",

      // Text colors
      textPrimary: isDark ? "text-white" : "text-gray-900",
      textSecondary: isDark ? "text-gray-300" : "text-gray-600",
      textMuted: isDark ? "text-gray-400" : "text-gray-500",

      // Border colors
      border: isDark ? "border-gray-700" : "border-gray-200",
      borderLight: isDark ? "border-gray-600" : "border-gray-300",

      // Hover states
      hover: isDark ? "hover:bg-gray-700" : "hover:bg-gray-100",
      hoverSecondary: isDark ? "hover:bg-gray-600" : "hover:bg-gray-200",

      // Gradients (these remain consistent for brand identity)
      gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
      gradientHover: "hover:from-blue-600 hover:to-purple-700",
      textGradient:
        "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",

      // Hero section specific
      heroBackground: isDark
        ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",

      // Card backgrounds
      card: isDark ? "bg-gray-800/50" : "bg-white/50",
      cardHover: isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50/50",

      // Glass morphism
      glass: isDark
        ? "bg-gray-900/80 backdrop-blur-md border-gray-700/20"
        : "bg-white/80 backdrop-blur-md border-gray-200/20",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
