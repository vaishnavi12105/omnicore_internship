import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, FolderOpen, Sun, Moon } from "lucide-react";

interface GetStartedProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const GetStarted: React.FC<GetStartedProps> = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 relative">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:shadow-lg transition"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Top Header Section */}
      <section className="py-12 shadow-sm bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-green-400">
              Get Started
            </span>
          </motion.h1>

          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
            Choose the best way to begin — either create a custom project or explore our existing work.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container-max py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Tailored Project Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl shadow-md border p-10 flex flex-col justify-between hover:shadow-xl transition-colors duration-500 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <Wrench className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold">Create a Tailored Project</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Build a project from scratch, designed specifically for your needs. Perfect for clients who have unique requirements and want a fully customized solution.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-400">
              <li>Personalized consultation</li>
              <li>Custom design and development</li>
              <li>Dedicated project team</li>
            </ul>
          </div>
          <button
            onClick={() => navigate("/tailored-project")}
            className="px-6 py-3 rounded-lg font-semibold transition-colors duration-300 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
          >
            Start a Custom Project →
          </button>
        </motion.div>

        {/* Browse Projects Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl shadow-md border p-10 flex flex-col justify-between hover:shadow-xl transition-colors duration-500 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <FolderOpen className="w-12 h-12 text-green-600 dark:text-green-400" />
              <h2 className="text-2xl font-bold">Browse Existing Projects</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explore our repository of completed projects and gain inspiration. You can also join an ongoing project to collaborate with our team.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-400">
              <li>View our portfolio of work</li>
              <li>Learn about our development process</li>
              <li>Collaborate on active projects</li>
            </ul>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 rounded-lg font-semibold transition-colors duration-300 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
          >
            Explore Projects →
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default GetStarted;
