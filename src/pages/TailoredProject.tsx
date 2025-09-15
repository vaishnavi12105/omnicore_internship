import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, FileText, ClipboardList } from "lucide-react";

const TailoredProject: React.FC = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    companyName: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

   
    alert("✅ Your project request has been submitted!");
    setFormData({
      projectName: "",
      projectDescription: "",
      companyName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
                 dark:from-gray-950 dark:via-gray-900 dark:to-black flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="max-w-2xl w-full relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
                   rounded-2xl shadow-2xl p-10 border border-gray-200/50 dark:border-gray-700/50"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
       
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                        from-blue-500/20 to-purple-500/20 blur-2xl -z-10" />

        <motion.h1
          className="text-4xl font-extrabold mb-8 text-center 
                     bg-clip-text text-transparent bg-gradient-to-r 
                     from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Create a Tailored Project
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6">
         
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <ClipboardList className="w-6 h-6 text-purple-500" />
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white/60 dark:bg-gray-800/60 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Project Name"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-3"
          >
            <FileText className="w-6 h-6 mt-2 text-blue-500" />
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows={4}
              className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white/60 dark:bg-gray-800/60 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                         outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Describe your project"
            />
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <Building2 className="w-6 h-6 text-green-500" />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white/60 dark:bg-gray-800/60 
                         focus:ring-2 focus:ring-green-500 focus:border-transparent 
                         outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Company Name"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3"
          >
            <Mail className="w-6 h-6 text-red-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white/60 dark:bg-gray-800/60 
                         focus:ring-2 focus:ring-red-500 focus:border-transparent 
                         outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Email Address"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3"
          >
            <Phone className="w-6 h-6 text-yellow-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white/60 dark:bg-gray-800/60 
                         focus:ring-2 focus:ring-yellow-500 focus:border-transparent 
                         outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Phone Number"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold 
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700 
                         dark:from-cyan-500 dark:to-green-500 
                         dark:hover:from-cyan-600 dark:hover:to-green-600 
                         text-white shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:scale-[1.02]"
            >
               Submit Request
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default TailoredProject;
