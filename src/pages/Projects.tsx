import React from "react";

const Projects = () => {
  const repos = [
    {
      name: "Portfolio Website",
      description: "Modern personal portfolio built with React & Tailwind CSS",
      link: "#",
    },
    {
      name: "E-Commerce App",
      description:
        "Full-stack app with payment integration and user management",
      link: "#",
    },
    {
      name: "AI Chatbot",
      description: "Conversational AI assistant powered by OpenAI APIs",
      link: "#",
    },
  ];

  return (
    <div className="container-max py-16 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Our Projects
      </h1>

      {/* Project List */}
      <div className="space-y-6">
        {repos.map((repo, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {repo.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {repo.description}
            </p>
            <a
              href={repo.link}
              className="mt-3 inline-block text-sm text-blue-500 dark:text-blue-400 hover:underline"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
