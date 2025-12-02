
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Prameela_Bevara_photo from "./Prameela_Bevara_photo.jpeg";
// import BevaraPrameela_resume from "./BevaraPrameela_resume.pdf";
import BevaraPrameela_resume from "./BevaraPrameela_resume.pdf";
 // correct path to your image

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-20 
                 bg-white dark:bg-gray-900 transition-all"
    >
      {/* ========= LEFT CONTENT ========= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Prameela
          </span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
          A passionate frontend developer creating beautiful, responsive, and
          user-friendly web experiences.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex space-x-5 text-gray-700 dark:text-gray-300 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <Linkedin size={26} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <Github size={26} />
          </a>

          <a
            href="mailto:prameelabevara26@gmail.com"
            className="hover:text-red-500 transition"
          >
            <Mail size={26} />
          </a>
        </div>

        {/* BUTTONS */}
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href={BevaraPrameela_resume}
            download
            className="px-6 py-3 border border-gray-500 dark:border-gray-300 rounded-lg 
                       text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 
                       transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* ========= RIGHT PHOTO ========= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <motion.img
          src={Prameela_Bevara_photo}
          alt="Profile"
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-700"
          animate={{ y: [0, -10, 0] }} // floating animation
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
