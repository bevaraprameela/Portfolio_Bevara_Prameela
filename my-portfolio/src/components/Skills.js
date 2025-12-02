
import React from "react";
import { motion } from "framer-motion";

// Lucide Icons
import {
  Code2,
  Globe,
  Server,
  Database,
  GitBranch,
  PenTool,
  Binary,
  Cpu,
  BookOpen,
  Users,
  Clock,
  Repeat,
  Sigma,
  Layers,
} from "lucide-react";

// ---------- SKILLS WITH ICONS ---------- //

// ⭐ NEW: Programming Languages Section
const programmingLanguages = [
  { name: "C", icon: Code2 },
  { name: "Python", icon: Binary },
//   { name: "JavaScript", icon: Code2 },
//   { name: "PHP", icon: Code2 },
];

// ⭐ NEW: Libraries Section
const libraries = [
  { name: "NumPy", icon: Sigma },
  { name: "Pandas", icon: Layers },
  { name: "Matplotlib", icon: PenTool },
  { name: "Scikit-Learn", icon: Cpu },
  { name: "Seaborn", icon: PenTool },
];

const technicalSkills = {
  Frontend: [
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Globe },
    { name: "JavaScript", icon: Code2 },
    { name: "React", icon: Cpu },
    { name: "Tailwind CSS", icon: PenTool },
  ],

  Backend: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "MongoDB", icon: Database },
  ],

  Tools: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: GitBranch },
    { name: "VS Code", icon: Code2 },
    // { name: "Figma", icon: PenTool },
  ],
};

const softSkills = [
  { name: "Team Collaboration", icon: Users },
  { name: "Continuous Learning", icon: BookOpen },
  { name: "Adaptability", icon: Repeat },
  { name: "Time Management", icon: Clock },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Skills
        </motion.h2>

        {/* ⭐ NEW SECTION: PROGRAMMING LANGUAGES */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
        >
          Programming Languages
        </motion.h3>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition mb-16">
          <div className="flex flex-wrap gap-3">
            {programmingLanguages.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-700 dark:text-white text-sm font-medium shadow flex items-center gap-2"
              >
                <skill.icon className="w-4 h-4" />
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ⭐ NEW SECTION: LIBRARIES */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
        >
          Libraries
        </motion.h3>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition mb-16">
          <div className="flex flex-wrap gap-3">
            {libraries.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-700 dark:text-white text-sm font-medium shadow flex items-center gap-2"
              >
                <skill.icon className="w-4 h-4" />
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ---------- TECHNICAL SKILLS SECTION ---------- */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
        >
          Technical Skills
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Code2 className="w-6 h-6" />
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-700 dark:text-white text-sm font-medium shadow flex items-center gap-2"
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- SOFT SKILLS SECTION ---------- */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
        >
          Soft Skills
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-700 dark:text-white text-sm font-medium shadow flex items-center gap-2"
              >
                <skill.icon className="w-4 h-4" />
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
