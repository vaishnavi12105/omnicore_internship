import React from 'react';
import { motion } from 'framer-motion';

type Palette = {
  iconBg: string;
  iconFill: string;
  iconBgHover: string;
  iconFillHover: string;
  chipBg: string;
  chipText: string;
  chipBorder: string;
  chipHover: string;
  titleHover: string;
};

const palettes: Record<string, Palette> = {
  blue: {
    iconBg: 'bg-blue-100',
    iconFill: 'bg-blue-600',
    iconBgHover: 'group-hover:bg-blue-600',
    iconFillHover: 'group-hover:bg-white',
    chipBg: 'bg-blue-50',
    chipText: 'text-blue-700',
    chipBorder: 'border-blue-200',
    chipHover: 'hover:bg-blue-100',
    titleHover: 'group-hover:text-blue-600',
  },
  green: {
    iconBg: 'bg-green-100',
    iconFill: 'bg-green-600',
    iconBgHover: 'group-hover:bg-green-600',
    iconFillHover: 'group-hover:bg-white',
    chipBg: 'bg-green-50',
    chipText: 'text-green-700',
    chipBorder: 'border-green-200',
    chipHover: 'hover:bg-green-100',
    titleHover: 'group-hover:text-green-600',
  },
  purple: {
    iconBg: 'bg-purple-100',
    iconFill: 'bg-purple-600',
    iconBgHover: 'group-hover:bg-purple-600',
    iconFillHover: 'group-hover:bg-white',
    chipBg: 'bg-purple-50',
    chipText: 'text-purple-700',
    chipBorder: 'border-purple-200',
    chipHover: 'hover:bg-purple-100',
    titleHover: 'group-hover:text-purple-600',
  },
  orange: {
    iconBg: 'bg-orange-100',
    iconFill: 'bg-orange-600',
    iconBgHover: 'group-hover:bg-orange-600',
    iconFillHover: 'group-hover:bg-white',
    chipBg: 'bg-orange-50',
    chipText: 'text-orange-700',
    chipBorder: 'border-orange-200',
    chipHover: 'hover:bg-orange-100',
    titleHover: 'group-hover:text-orange-600',
  },
  red: {
    iconBg: 'bg-red-100',
    iconFill: 'bg-red-600',
    iconBgHover: 'group-hover:bg-red-600',
    iconFillHover: 'group-hover:bg-white',
    chipBg: 'bg-red-50',
    chipText: 'text-red-700',
    chipBorder: 'border-red-200',
    chipHover: 'hover:bg-red-100',
    titleHover: 'group-hover:text-red-600',
  },
  indigo: {
    iconBg: 'bg-indigo-100',
    iconFill: 'bg-indigo-600',
    iconBgHover: 'group-hover:bg-indigo-600',
    iconFillHover: 'group-hover:bg-white',
    chipBg: 'bg-indigo-50',
    chipText: 'text-indigo-700',
    chipBorder: 'border-indigo-200',
    chipHover: 'hover:bg-indigo-100',
    titleHover: 'group-hover:text-indigo-600',
  },
};

const TechStack = () => {
  const technologies = [
    { category: 'Frontend', color: 'blue',   techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'] },
    { category: 'Backend',  color: 'green',  techs: ['Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB'] },
    { category: 'Cloud & DevOps', color: 'purple', techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
    { category: 'AI & ML',  color: 'orange', techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Pandas', 'NumPy'] },
    { category: 'Automation', color: 'red',   techs: ['Zapier', 'Power Automate', 'Selenium', 'Puppeteer', 'Apache Airflow', 'RPA'] },
    { category: 'Mobile',   color: 'indigo', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {technologies.map(({ category, color, techs }) => {
            const p = palettes[color];
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="card p-8 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* colored square */}
                <div className={`w-12 h-12 ${p.iconBg} ${p.iconBgHover} rounded-lg flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <div className={`w-6 h-6 ${p.iconFill} ${p.iconFillHover} rounded transition-colors duration-300`} />
                </div>

                {/* title */}
                <h3 className={`text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 ${p.titleHover}`}>
                  {category}
                </h3>

                {/* chips */}
                <div className="mt-1 flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className={`text-sm ${p.chipBg} ${p.chipText} px-3 py-1 rounded-full border ${p.chipBorder} ${p.chipHover} transition-colors duration-300 cursor-default`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* spacer to equalize heights if content shorter */}
                <div className="mt-auto" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
