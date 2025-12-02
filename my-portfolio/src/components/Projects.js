
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const webProjects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React and TailwindCSS.",
      demo: "https://your-portfolio-demo.com",
      github: "https://github.com/your-portfolio-repo",
    },
    {
      title: "E-Commerce App",
      description: "Full-stack MERN ecommerce application with authentication.",
      demo: "https://your-ecommerce-demo.com",
      github: "https://github.com/your-ecommerce-repo",
    },
  ];

  const mlProjects = [
    {
      title: "HoneyPowered Malware Detection",
      description:
        "Machine learning–based malware detection system using honeytokens and behavioral classification.",
      demo: "https://your-honey-malware-demo.com", // ⭐ add your real link
      github: "https://github.com/bevaraprameela/Honey_Powered_Malware_Detection_Major_Project", // ⭐ add your real repo
    },
    {
      title: "Cashew Kernel Grading System",
      description:
        "A deep-learning project that grades cashew kernels based on color, size, and quality using CNN models.",
      demo: "https://your-cashew-demo.com", // ⭐ add your real link
      github: "https://github.com/bevaraprameela/Cashew_Kernel_Grading_System_minproject", // ⭐ add your real repo
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl bg-white dark:bg-gray-900 transition">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex gap-4 mt-3">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ExternalLink size={18} /> Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 px-8 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      {/* Web Development */}
      <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
        Web Development Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {webProjects.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>

      {/* Machine Learning */}
      <h3 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">
        Machine Learning Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-10">
        {mlProjects.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
