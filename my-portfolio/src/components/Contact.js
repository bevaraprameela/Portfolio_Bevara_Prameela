
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-20 py-20">
      <h2 className="text-center text-4xl font-bold mb-12 dark:text-white">Contact</h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-900 shadow-xl p-10 rounded-3xl max-w-2xl mx-auto"
      >
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Name</span>
          <input className="w-full mt-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Email</span>
          <input className="w-full mt-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Message</span>
          <textarea className="w-full mt-1 p-3 h-32 rounded-xl bg-gray-100 dark:bg-gray-800" />
        </label>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
