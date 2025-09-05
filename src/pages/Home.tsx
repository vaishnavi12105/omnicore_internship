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
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

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

  const testimonials = [
    // Testimonials moved to separate component
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div >
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
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
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200"
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
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full animate-float animation-delay-200"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-500/10 rounded-full animate-float animation-delay-400"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stats.projects}+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {stats.years}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Core Services</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="card p-8 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-600 transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text">Omnicore</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with business insight to deliver solutions 
                that not only work flawlessly but drive measurable results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">Track record of delivering solutions that increase efficiency by up to 40%</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-level security standards and compliance with industry regulations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600">Cutting-edge technologies and forward-thinking approach to problem-solving</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="card p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Certified professionals with 8+ years experience</p>
                </div>
                <div className="card p-6 text-center">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Award Winning</h3>
                  <p className="text-gray-600">Recognized for excellence in software development</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="card p-6 text-center">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
                  <p className="text-gray-600">98% of projects delivered on schedule</p>
                </div>
                <div className="card p-6 text-center">
                  <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">5-Star Support</h3>
                  <p className="text-gray-600">24/7 support and maintenance services</p>
                </div>
              </div>
            </motion.div>
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
      <section className="section-padding gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
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
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our software solutions can drive growth and efficiency for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
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