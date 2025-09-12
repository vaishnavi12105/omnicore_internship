import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Filter,
  Code2,
  Zap,
  Brain,
  Users,
  TrendingUp,
  ShoppingCart
} from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern, responsive e-commerce platform with advanced features including real-time inventory management, payment processing, and customer analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: ['300% increase in online sales', '50% reduction in cart abandonment', '99.9% uptime achieved'],
      demoUrl: '#',
      githubUrl: '#',
      client: 'RetailMax Inc.',
      duration: '4 months'
    },
    {
      id: 2,
      title: 'Business Process Automation',
      category: 'automation',
      description: 'Comprehensive automation solution that streamlined invoice processing, inventory management, and customer communications for a mid-size manufacturing company.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Power Automate', 'SQL', 'APIs'],
      results: ['70% reduction in processing time', '90% accuracy improvement', '$50K annual savings'],
      demoUrl: '#',
      githubUrl: '#',
      client: 'Manufacturing Solutions',
      duration: '3 months'
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      category: 'ml',
      description: 'Machine learning-powered dashboard that provides sales forecasting, customer behavior analysis, and market trend predictions for strategic decision making.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: ['85% prediction accuracy', '40% better inventory planning', '25% increase in revenue'],
      demoUrl: '#',
      githubUrl: '#',
      client: 'DataDriven Corp',
      duration: '6 months'
    },
    {
      id: 4,
      title: 'SaaS Application',
      category: 'web',
      description: 'Cloud-based SaaS application for project management with real-time collaboration, task tracking, and comprehensive reporting features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      results: ['10,000+ active users', '99.95% uptime', '4.8/5 user rating'],
      demoUrl: '#',
      githubUrl: '#',
      client: 'ProjectFlow',
      duration: '8 months'
    },
    {
      id: 5,
      title: 'Workflow Optimization System',
      category: 'automation',
      description: 'Custom workflow management system that automated approval processes, document routing, and task assignments for a large enterprise.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis'],
      results: ['60% faster approvals', '80% reduction in errors', 'Improved compliance'],
      demoUrl: '#',
      githubUrl: '#',
      client: 'Enterprise Solutions',
      duration: '5 months'
    },
    {
      id: 6,
      title: 'AI-Powered Chatbot',
      category: 'ml',
      description: 'Intelligent customer service chatbot using natural language processing to handle customer inquiries, process orders, and provide personalized recommendations.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenAI', 'React', 'FastAPI'],
      results: ['24/7 customer support', '80% query resolution', '90% satisfaction rate'],
      demoUrl: '#',
      githubUrl: '#',
      client: 'CustomerFirst',
      duration: '4 months'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'web', label: 'Web Development', icon: Code2 },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'ml', label: 'Machine Learning', icon: Brain }
  ];

  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Code2, value: '250+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: ShoppingCart, value: '99%', label: 'Success Rate' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations and achieve 
              remarkable results through innovative software solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        className="w-12 h-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.category === 'web' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' :
                      project.category === 'automation' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' :
                      'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'
                    }`}>
                      {project.category === 'web' ? 'Web Dev' :
                       project.category === 'automation' ? 'Automation' : 'ML/AI'}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Results:</h4>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {result}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>Client: {project.client}</span>
                    <span>Duration: {project.duration}</span>
                  </div>

                  <button className="w-full btn-outline flex items-center justify-center group dark:border-gray-700 dark:text-gray-300 hover:dark:bg-gray-700">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="section-padding relative overflow-hidden 
  bg-gradient-to-br from-blue-500 to-purple-600 
  dark:from-gray-900 dark:to-gray-800">
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

  <div className="container-max relative z-10">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-gray-100">
        Ready to Start Your Project?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90 dark:text-gray-300">
        Join the growing list of successful businesses that have transformed 
        their operations with our innovative solutions.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="bg-white text-blue-600 hover:bg-gray-100 
          font-semibold py-4 px-8 rounded-lg 
          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
          dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
          Start Your Project
        </button>

        <button className="border-2 border-white text-white 
          hover:bg-white hover:text-blue-600 
          font-semibold py-4 px-8 rounded-lg 
          transition-all duration-300 transform hover:scale-105
          dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900">
          Schedule Consultation
        </button>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default Portfolio;
