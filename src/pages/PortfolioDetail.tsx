import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./Portfolio";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div className="text-center py-20 text-gray-600">Project not found.</div>;
  }

  return (
    <div className="container-max pt-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

        <h3 className="font-semibold text-xl mb-2">Key Results</h3>
        <ul className="list-disc list-inside mb-6">
          {project.results.map((result, idx) => (
            <li key={idx}>{result}</li>
          ))}
        </ul>

        <p>
          <strong>Client:</strong> {project.client}
        </p>
        <p>
          <strong>Duration:</strong> {project.duration}
        </p>
      </motion.div>
    </div>
  );
};

export default PortfolioDetail;
