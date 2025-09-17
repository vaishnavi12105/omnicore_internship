import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Modern personal portfolio built with React & Tailwind CSS",
    images: [
      "/images/portfolio.png",
      "/images/portfolio2.png",
      "/images/portfolio3.png",
    ],
  },
  {
    id: 2,
    name: "E-Commerce App",
    description: "Full-stack app with payment integration and user management",
    images: [
      "https://via.placeholder.com/800x500?text=E-Commerce+1",
      "https://via.placeholder.com/800x500?text=E-Commerce+2",
    ],
  },
  {
    id: 3,
    name: "AI Chatbot",
    description: "Conversational AI assistant powered by OpenAI APIs",
    images: [
      "https://via.placeholder.com/800x500?text=Chatbot+1",
      "https://via.placeholder.com/800x500?text=Chatbot+2",
      "https://via.placeholder.com/800x500?text=Chatbot+3",
      "https://via.placeholder.com/800x500?text=Chatbot+4",
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!project) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:from-gray-950 dark:via-gray-900 dark:to-black px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-2xl font-bold text-red-500">❌ Project Not Found</h1>
        <Link
          to="/projects"
          className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:from-gray-950 dark:via-gray-900 dark:to-black flex justify-center items-center py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl p-10 w-full max-w-4xl border border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10" />

        <Link
          to="/projects"
          className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            🔍 Project Preview
          </h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] h-[250px] rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg cursor-pointer hover:opacity-90 transition"
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={img}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-end mt-8">
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            onClick={() => alert(`🛒 You chose to buy: ${project.name}`)}
          >
            Buy Project
          </button>
        </div>
      </div>

     
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={project.images.map((img) => ({ src: img }))}
        plugins={[Zoom, Fullscreen]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
        }}
      />
    </motion.div>
  );
};

export default ProjectDetails;


