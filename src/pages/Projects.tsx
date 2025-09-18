import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Star } from "lucide-react"; 

const Projects = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const repos = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "Modern personal portfolio built with React & Tailwind CSS",
      language: "TypeScript",
      stars: 12,
      visibility: "Public",
      popularity: [
        { day: 1, value: 1 },
        { day: 2, value: 2 },
        { day: 3, value: 1 },
        { day: 4, value: 5 },
        { day: 5, value: 3 },
      ],
    },
    {
      id: 2,
      name: "E-Commerce App",
      description: "Full-stack app with payment integration and user management",
      language: "JavaScript",
      stars: 20,
      visibility: "Public",
      popularity: [
        { day: 1, value: 0 },
        { day: 2, value: 1 },
        { day: 3, value: 1 },
        { day: 4, value: 2 },
        { day: 5, value: 1 },
      ],
    },
    {
      id: 3,
      name: "AI Chatbot",
      description: "Conversational AI assistant powered by OpenAI APIs",
      language: "Python",
      stars: 45,
      visibility: "Public",
      popularity: [
        { day: 1, value: 3 },
        { day: 2, value: 4 },
        { day: 3, value: 2 },
        { day: 4, value: 6 },
        { day: 5, value: 5 },
      ],
    },
  ];

  
  const filteredRepos = repos.filter(
    (repo) =>
      (selectedLang === "All" || repo.language === selectedLang) &&
      (repo.name.toLowerCase().includes(search.toLowerCase()) ||
        repo.description.toLowerCase().includes(search.toLowerCase()))
  );

  
  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      className="min-h-screen 
             bg-gradient-to-b from-blue-50 to-blue-100 
             dark:from-gray-950 dark:to-black 
             text-gray-900 dark:text-gray-200 
             flex flex-col items-center py-10 px-6 
             transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
     
      <div className="flex flex-col md:flex-row w-full max-w-6xl mb-8 gap-4">
        <input
          type="text"
          placeholder="Find a repository..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 pl-4 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                     bg-white text-gray-900 placeholder-gray-400
                     dark:bg-gray-900 dark:text-gray-200 dark:placeholder-gray-500 
                     focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

       
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 
                     focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="All">Language</option>
          <option value="HTML">HTML</option>
          <option value="Jupyter Notebook">Jupyter Notebook</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Python">Python</option>
          <option value="Vue">Vue</option>
          <option value="C#">C#</option>
        </select>
      </div>

     
      <div className="w-full max-w-6xl space-y-6">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              onClick={() => navigate(`/projects/${repo.id}`)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                         rounded-lg p-8 hover:bg-gray-50 dark:hover:bg-gray-800 
                         cursor-pointer transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  {repo.name}
                </h2>

               
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFavorite(repo.id);
                  }}
                  className="ml-2"
                >
                  <Star
                    size={22}
                    className={`transition ${
                      favorites.includes(repo.id)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-400 hover:text-yellow-400"
                    }`}
                  />
                </button>
              </div>

             
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">
                {repo.description}
              </p>

           
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-400 inline-block mr-2"></span>
                    {repo.language}
                  </span>
                  <span>{repo.visibility}</span>
                  <span>Updated 1 week ago</span>
                </div>

               
                <div className="w-64 h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={repo.popularity}>
                      <XAxis dataKey="day" hide />
                      <YAxis hide />
                      <Tooltip />
                      <Line
                        type="linear" 
                        dataKey="value"
                        stroke="#22c55e"
                        strokeWidth={2.5}
                        dot={false} 
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center">
            No repositories found.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
