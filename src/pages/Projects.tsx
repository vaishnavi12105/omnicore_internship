import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const repos = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "Modern personal portfolio built with React & Tailwind CSS",
    },
    {
      id: 2,
      name: "E-Commerce App",
      description:
        "Full-stack app with payment integration and user management",
    },
    {
      id: 3,
      name: "AI Chatbot",
      description: "Conversational AI assistant powered by OpenAI APIs",
    },
  ];

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(search.toLowerCase()) ||
      repo.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
                 dark:from-gray-950 dark:via-gray-900 dark:to-black flex flex-col items-center py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
     
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center 
                   bg-clip-text text-transparent bg-gradient-to-r 
                   from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-green-400"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Projects
      </motion.h1>

     
      <div className="relative w-full max-w-md mb-10">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
          🔎
        </span>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 
                     dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 
                     focus:ring-2 focus:ring-purple-400 outline-none"
        />
      </div>

     
      <div className="flex flex-col space-y-10 w-full max-w-3xl">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              onClick={() => navigate(`/projects/${repo.id}`)}
              className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
                         rounded-2xl shadow-2xl p-8 border border-gray-200/50 
                         dark:border-gray-700/50 cursor-pointer hover:scale-[1.02] 
                         hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
           
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                              from-blue-500/20 to-purple-500/20 blur-2xl -z-10" />

              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {repo.name}
              </h2>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {repo.description}
              </p>

              <span className="mt-6 inline-block text-sm font-medium 
                               text-purple-600 dark:text-green-400 hover:underline">
                View Details →
              </span>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center">
            No projects found.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
