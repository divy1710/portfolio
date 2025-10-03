import React, { useState } from "react";
import { useInView } from "../hooks/useAnimations";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { colors, isDark } = useTheme();
  const [titleRef, titleInView] = useInView(0.3);
  const [formRef, formInView] = useInView(0.3);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (fieldName) => {
    if (!formData[fieldName]) {
      setFocusedField(null);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "divykalathiya17@gmail.com",
      link: "mailto:divy.kalathiya@email.com",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/divykalathiya",
      link: "https://www.linkedin.com/in/divy-kalathiya-96324a2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: "🐱",
      title: "GitHub",
      value: "github.com/divykalathiya",
      link: "https://github.com/divy1710",
      color: "from-gray-700 to-gray-900",
    },
  ];

  // Custom input field component with floating label animation
  const AnimatedInput = ({
    name,
    type = "text",
    placeholder,
    isTextarea = false,
  }) => {
    const isActive = focusedField === name || formData[name];

    const InputComponent = isTextarea ? "textarea" : "input";

    return (
      <div className="relative">
        <InputComponent
          type={isTextarea ? undefined : type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => handleFocus(name)}
          onBlur={() => handleBlur(name)}
          required
          rows={isTextarea ? 5 : undefined}
          className={`w-full px-4 py-3 bg-white/10 border-2 rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 ${
            isActive
              ? "border-blue-500 shadow-lg shadow-blue-500/20"
              : "border-gray-600 hover:border-gray-500"
          } ${isTextarea ? "resize-none" : ""}`}
          placeholder={placeholder}
        />
        <label
          htmlFor={name}
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            isActive
              ? "-top-2 text-sm text-blue-400 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-2"
              : "top-3 text-gray-400"
          }`}
        >
          {placeholder}
        </label>
      </div>
    );
  };

  return (
    <section
      className={`py-20 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
      } relative overflow-hidden transition-colors duration-500`}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on
            innovative projects, or simply connect with fellow developers and
            tech enthusiasts.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-800 delay-200 ${
              titleInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're a recruiter looking for fresh talent, a fellow
                developer interested in collaboration, or someone with an
                exciting project idea, I'd love to hear from you. Let's connect
                and explore how we can work together to create impactful digital
                solutions.
              </p>
            </div>

            {/* Contact Methods with enhanced animations */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={
                    contact.title !== "Email" && contact.title !== "Phone"
                      ? "_blank"
                      : "_self"
                  }
                  rel={
                    contact.title !== "Email" && contact.title !== "Phone"
                      ? "noopener noreferrer"
                      : ""
                  }
                  className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl ${
                    titleInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        contact.color
                      } rounded-xl flex items-center justify-center text-white text-xl transition-all duration-500 ${
                        contact.title === "LinkedIn"
                          ? "group-hover:scale-110 group-hover:rotate-6"
                          : contact.title === "GitHub"
                          ? "group-hover:scale-110 group-hover:-rotate-6"
                          : contact.title === "Email"
                          ? "group-hover:scale-110 group-hover:animate-bounce"
                          : "group-hover:scale-110 group-hover:rotate-12"
                      }`}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-800 delay-600 ${
                titleInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h4 className="text-white font-semibold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="group cursor-pointer">
                  <div className="text-2xl font-bold text-blue-400 group-hover:scale-125 transition-transform duration-300">
                    24h
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Response Time
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl font-bold text-purple-400 group-hover:scale-125 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Commitment
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl font-bold text-green-400 group-hover:scale-125 transition-transform duration-300">
                    15+
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Projects Done
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-800 delay-400 ${
              formInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <AnimatedInput name="name" placeholder="Your Name" />
                <AnimatedInput
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <AnimatedInput name="subject" placeholder="Subject" />
              <AnimatedInput
                name="message"
                placeholder="Your Message"
                isTextarea={true}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? "animate-pulse" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending Message...</span>
                  </span>
                ) : (
                  "🚀 Send Message"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                I typically respond within 24 hours. Looking forward to
                connecting with you!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 pt-8 border-t border-gray-700 text-center transition-all duration-800 delay-800 ${
            formInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400">
            © 2024 Divy Kalathiya. Built with ❤️ using React, Tailwind CSS, and
            lots of coffee.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://linkedin.com/in/divykalathiya"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/divykalathiya"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              GitHub
            </a>
            <a
              href="mailto:divy.kalathiya@email.com"
              className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
