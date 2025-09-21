
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const caseStudies: Record<string, any> = {
  "1": {
    title: "E-Commerce Platform",
    overview: "The client wanted a scalable platform to handle growing online sales.",
    solution: "Built using Next.js, TypeScript, Prisma, and PostgreSQL.",
    features: ["Real-time inventory tracking", "Secure payment gateway integration", "Customer analytics dashboard"],
    challenges: ["Integrating multiple payment providers", "Ensuring 99.9% uptime", "Handling peak traffic during sales"],
    results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"],
    screenshots: ["https://via.placeholder.com/600x400?text=E-Commerce+Screenshot+1", "https://via.placeholder.com/600x400?text=E-Commerce+Screenshot+2"],
  },
  "2": {
    title: "Business Process Automation",
    overview: "A manufacturing company needed to automate repetitive tasks.",
    solution: "Developed workflows using Python, SQL, and APIs.",
    features: ["Automated invoice processing", "Inventory sync", "Email notifications"],
    challenges: ["Legacy system integration", "Error handling in automation"],
    results: ["70% faster processing", "90% accuracy improvement", "$50K annual savings"],
    screenshots: ["https://via.placeholder.com/600x400?text=Automation+System+1"],
  },
  "3": {
    title: "Predictive Analytics Dashboard",
    overview: "Client needed actionable insights into sales forecasting and customer behavior.",
    solution: "Developed an ML-powered dashboard using Python and TensorFlow.",
    features: ["Sales forecasting with time-series models", "Customer segmentation & trend analysis", "Interactive visualization dashboard"],
    challenges: ["Cleaning and preparing large datasets", "Optimizing ML models for accuracy", "Deploying ML in production reliably"],
    results: ["85% prediction accuracy", "40% better inventory planning", "25% increase in revenue"],
    screenshots: ["https://via.placeholder.com/600x400?text=Analytics+Dashboard+1", "https://via.placeholder.com/600x400?text=Analytics+Dashboard+2"],
  },
  "4": {
    title: "SaaS Application",
    overview: "ProjectFlow needed a modern SaaS app for project management and collaboration.",
    solution: "Built with Next.js, Prisma, and PostgreSQL for performance and scalability.",
    features: ["Real-time collaboration", "Kanban task boards", "Comprehensive reporting"],
    challenges: ["Implementing real-time sync", "Scaling for thousands of users", "Maintaining data security"],
    results: ["10,000+ active users", "99.95% uptime", "4.8/5 user rating"],
    screenshots: ["https://via.placeholder.com/600x400?text=SaaS+App+1", "https://via.placeholder.com/600x400?text=SaaS+App+2"],
  },
  "5": {
    title: "Workflow Optimization System",
    overview: "Large enterprise needed to automate approvals and document workflows.",
    solution: "Custom workflow system built using React, Node.js, MongoDB, and Redis.",
    features: ["Approval routing automation", "Document management", "Role-based access control"],
    challenges: ["Complex enterprise hierarchy", "Integrating with legacy databases", "Optimizing Redis caching"],
    results: ["60% faster approvals", "80% reduction in errors", "Improved compliance"],
    screenshots: ["https://via.placeholder.com/600x400?text=Workflow+System+1"],
  },
  "6": {
    title: "AI-Powered Chatbot",
    overview: "CustomerFirst wanted an AI-driven chatbot for 24/7 customer support.",
    solution: "Built with OpenAI’s NLP models, React frontend, and FastAPI backend.",
    features: ["Order processing through chat", "Personalized product recommendations", "Multilingual support"],
    challenges: ["Training chatbot with custom datasets", "Handling ambiguous queries", "Integrating seamlessly with CRM"],
    results: ["24/7 customer support", "80% query resolution", "90% customer satisfaction"],
    screenshots: ["https://via.placeholder.com/600x400?text=Chatbot+Demo+1", "https://via.placeholder.com/600x400?text=Chatbot+Demo+2"],
  },
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies[id || ""];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!study) return null;

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
          to="/portfolio"
          className="inline-flex items-center mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          {study.title}
        </h1>

       
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{study.overview}</p>
        </section>

     
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Solution</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{study.solution}</p>
        </section>

    
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {study.features.map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

       
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Process & Challenges</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {study.challenges.map((c: string, i: number) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Results</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {study.results.map((r: string, i: number) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Screenshots & Demos</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
            {study.screenshots.map((src: string, index: number) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] h-[250px] rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg cursor-pointer hover:opacity-90 transition"
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

       
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={study.screenshots.map((src: string) => ({ src }))}
          plugins={[Zoom, Fullscreen]}
          zoom={{ maxZoomPixelRatio: 3, zoomInMultiplier: 1.5, doubleTapDelay: 300, doubleClickDelay: 300 }}
        />
      </div>
    </motion.div>
  );
};

export default CaseStudy;
