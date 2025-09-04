import React from 'react';
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaGitAlt, FaApple
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, 
  SiDjango, SiFastapi, SiKubernetes, SiTerraform, 
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, 
  SiPandas, SiNumpy, SiZapier, SiSelenium, 
  SiApacheairflow, SiFlutter, SiAndroid, SiR 
} from 'react-icons/si';

const N8nIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <img 
      src="https://n8n.io/favicon-32x32.png" 
      alt="n8n" 
      className="w-10 h-10 object-contain"
      onError={(e) => {
        
        (e.currentTarget as HTMLImageElement).src = "https://img.icons8.com/ios/50/000000/automation.png";
      }}
    />
  </div>
);

const technologies = [
  {
    category: 'Frontend',
    techs: [
      <FaReact className="text-blue-500 w-12 h-12" />,
      <SiNextdotjs className="text-black w-12 h-12" />,
      <SiTypescript className="text-blue-600 w-12 h-12" />,
      <SiTailwindcss className="text-cyan-500 w-12 h-12" />
    ]
  },
  {
    category: 'Backend',
    techs: [
      <FaNodeJs className="text-green-600 w-12 h-12" />,
      <FaPython className="text-yellow-500 w-12 h-12" />,
      <SiDjango className="text-green-800 w-12 h-12" />,
      <SiFastapi className="text-green-600 w-12 h-12" />,
      <SiMongodb className="text-green-500 w-12 h-12" />
    ]
  },
  {
    category: 'Cloud & DevOps',
    techs: [
      <FaAws className="text-orange-500 w-12 h-12" />,
      <FaDocker className="text-blue-500 w-12 h-12" />,
      <SiKubernetes className="text-blue-400 w-12 h-12" />,
      <SiTerraform className="text-purple-500 w-12 h-12" />,
      <FaGitAlt className="text-red-500 w-12 h-12" />
    ]
  },
  {
    category: 'AI & ML',
    techs: [
      <SiTensorflow className="text-orange-500 w-12 h-12" />,
      <SiPytorch className="text-red-500 w-12 h-12" />,
      <SiScikitlearn className="text-blue-500 w-12 h-12" />,
      <SiOpenai className="text-gray-800 w-12 h-12" />,
      <SiPandas className="text-black w-12 h-12" />,
      <SiNumpy className="text-blue-600 w-12 h-12" />,
      <SiR className="text-blue-400 w-12 h-12" />
    ]
  },
  {
    category: 'Automation',
    techs: [
      <N8nIcon />, 
      <SiZapier className="text-orange-500 w-12 h-12" />,
      <SiSelenium className="text-green-500 w-12 h-12" />,
      <SiApacheairflow className="text-blue-400 w-12 h-12" />
    ]
  },
  {
    category: 'Mobile',
    techs: [
      <FaReact className="text-blue-500 w-12 h-12" />, 
      <SiFlutter className="text-blue-400 w-12 h-12" />, 
      <SiAndroid className="text-green-500 w-12 h-12" />, 
      <FaApple className="text-gray-800 w-12 h-12" /> 
    ]
  }
];

export default function TechStack() {
  return (
    <section className="p-10">
      <h2 className="text-5xl font-bold text-center mb-10">
        Our <span className="gradient-text"> Technology Stack</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map(({ category, techs }) => (
          <div
            key={category}
            className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-bold mb-6">{category}</h3>

            <div className="grid grid-cols-4 gap-6">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition cursor-pointer shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
