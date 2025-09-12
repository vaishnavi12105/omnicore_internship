import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  Zap, 
  Brain, 
  Users, 
  Award, 
  Clock, 
  Star,
  CheckCircle2,
  TrendingUp,
  Shield,
  Lightbulb
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import Testimonials from '../components/Testimonials';
import TechStack from '../components/TechStack';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targets = { projects: 250, clients: 100, years: 8, satisfaction: 99 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setStats({
          projects: Math.floor(targets.projects * easeProgress),
          clients: Math.floor(targets.clients * easeProgress),
          years: Math.floor(targets.years * easeProgress),
          satisfaction: Math.floor(targets.satisfaction * easeProgress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation solutions that save time and reduce costs.',
      features: ['Workflow Optimization', 'Process Automation', 'Data Integration', 'Custom Tools'],
      color: 'green'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI-powered solutions for predictive analytics, data modeling, and intelligent decision making.',
      features: ['Predictive Analytics', 'Data Modeling', 'AI Solutions', 'Custom Algorithms'],
      color: 'purple'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center 
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden">
  <div className="absolute inset-0 bg-black/30"></div>
  <ParticleBackground />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="m-0 text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Transform Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                With Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200 dark:text-gray-300"
            >
              We deliver cutting-edge software solutions, intelligent automation, and machine learning models 
              that drive growth and efficiency for modern businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/get-started"
                className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-blue-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: stats.projects, color: 'blue' },
              { label: 'Happy Clients', value: stats.clients, color: 'green' },
              { label: 'Years Experience', value: stats.years, color: 'purple' },
              { label: 'Client Satisfaction', value: stats.satisfaction, color: 'orange', suffix: '%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.value}{stat.suffix || '+'}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our <span className="gradient-text">Core Services</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We specialize in three key areas that drive digital transformation and business growth
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                className="card p-8 group cursor-pointer bg-white dark:bg-gray-800 transition-colors duration-300"
              >
                <div className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-600 transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/services"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Technology Stack */}
      <TechStack />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="section-padding 
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden">
  <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-max relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200 dark:text-gray-300">
              Let's discuss how our software solutions can drive growth and efficiency for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-blue-400 hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
