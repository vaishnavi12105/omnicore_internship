import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, FolderOpen } from "lucide-react";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b shadow-sm py-12">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            <span className="gradient-text">Get Started</span>
          </motion.h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the best way to begin — either create a custom project or explore our existing work.
          </p>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="container-max py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Column - Tailored Project */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 flex flex-col justify-between hover:shadow-xl transition"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <Wrench className="w-12 h-12 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Create a Tailored Project</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Build a project from scratch, designed specifically for your needs. 
              Perfect for clients who have unique requirements and want a fully customized solution.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Personalized consultation</li>
              <li>Custom design and development</li>
              <li>Dedicated project team</li>
            </ul>
          </div>
          <button
            onClick={() => navigate("/tailored-project")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start a Custom Project →
          </button>
        </motion.div>

        {/* Right Column - Existing Projects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 flex flex-col justify-between hover:shadow-xl transition"
        >
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <FolderOpen className="w-12 h-12 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Browse Existing Projects</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Explore our repository of completed projects and gain inspiration. 
              You can also join an ongoing project to collaborate with our team.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>View our portfolio of work</li>
              <li>Learn about our development process</li>
              <li>Collaborate on active projects</li>
            </ul>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Explore Projects →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
