
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

// ------------------------------
// COURSE CERTIFICATES
// ------------------------------
const courseCertificates = [
  {
    title: "Build Web Pages with HTML and CSS For Beginners",
    provider: "Microsoft",
    year: "2024",
    link: "https://drive.google.com/file/d/1MiMFG5BBx4C02XFHpH8d-ucx66P-CfCF/view?usp=sharing"
  },
  {
    title: "Complete Web Designing Course | Web Development Bootcamp",
    provider: "Udemy",
    year: "2023",
    link: "https://drive.google.com/file/d/1KXMKtr2clpgPjOhsabpwkYkjSrIKOV-s/view?usp=sharing"
  },
  {
    title: "Introduction To Data Science",
    provider: "Simplilearn",
    year: "2023",
    link: "https://drive.google.com/file/d/1L_G9Nf0q5FDHZCDSWYE_0tCx4cG9dI-9/view?usp=sharing"
  },
  {
    title: "50 Days of SQL",
    provider: "Codedamn",
    year: "2024",
    link: "https://drive.google.com/file/d/1PFXGCB8-xY8_Srb5vEOATt8PrNQL5AoU/view?usp=sharing"
  },
  {
    title: "Learn Python",
    provider: "CodeChef",
    year: "2023",
    link: "https://drive.google.com/file/d/16WghPQ-dSv9ktJZacxH-ob5NytW4O7XV/view?usp=sharing"
  },
    {
    title: "IR4.0 Foundation Course",
    provider: "Techsaksham",
    year: "2023",
    link: "https://drive.google.com/file/d/1NNHigu1Gjc1PylmKWVKJwsujWxIUyTlD/view?usp=sharing"
  },
];

// ------------------------------
// INTERNSHIP CERTIFICATES
// ------------------------------
const internshipCertificates = [
  {
    title: "Data Science Internship",
    provider: "Uniconverge Technologies",
    year: "2024",
    link: "https://drive.google.com/file/d/1ftyk7Dg2YlkqOLUPvS3hpj9xuOjELNl0/view?usp=sharing"  // Update when real link available
  },
  {
    title: "Employability Skills Internship",
    provider: "APSSDC",
    year: "2024",
    link: "https://drive.google.com/file/d/1oU5hhpI5Y_2HKbebrWYlIFruKVtQ2jVu/view?usp=sharing"
  }
];

const Certificate = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* MAIN TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Certificates
        </motion.h2>

        {/* --------------------------------------------- */}
        {/* INTERNSHIP CERTIFICATES */}
        {/* --------------------------------------------- */}
        <h3 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
          Internship Certificates
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {internshipCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-600 dark:text-blue-400" size={28} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                <strong>Organization:</strong> {cert.provider}
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                <strong>Year:</strong> {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>

        {/* --------------------------------------------- */}
        {/* COURSE CERTIFICATES */}
        {/* --------------------------------------------- */}
        <h3 className="text-2xl font-semibold mb-8 text-purple-600 dark:text-purple-400">
          Course Certificates
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-600 dark:text-purple-400" size={28} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                <strong>Provider:</strong> {cert.provider}
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                <strong>Year:</strong> {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
