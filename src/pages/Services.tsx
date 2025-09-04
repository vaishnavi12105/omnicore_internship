import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Brain,
  CheckCircle2,
  ArrowRight,
  Monitor,
  ShoppingCart,
  Smartphone,
  Database,
  Workflow,
  BarChart3,
  TrendingUp,
  Target,
  Cpu,
  Eye,
  Layers,
  LucideIcon,
} from "lucide-react";

// ---------- TYPES ----------
type Offering = {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
};

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
  features: string[];
  offerings: Offering[];
};

type ServiceKey = "web" | "automation" | "ml";

// ---------- DATA ----------
const services: Record<ServiceKey, Service> = {
  web: {
    title: "Web Development",
    icon: Code2,
    description:
      "Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies.",
    color: "blue",
    features: [
      "Responsive Web Design",
      "E-commerce Development",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Content Management Systems",
      "Performance Optimization",
    ],
    offerings: [
      {
        icon: Monitor,
        title: "Custom Websites",
        description: "Bespoke websites tailored to your brand and business needs",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "Full-featured online stores with payment processing",
        technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Responsive designs that work perfectly on all devices",
        technologies: ["Progressive Web Apps", "Mobile Optimization", "Touch UI"],
      },
      {
        icon: Database,
        title: "Backend Development",
        description: "Robust server-side solutions and database design",
        technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      },
    ],
  },
  automation: {
    title: "Business Automation",
    icon: Zap,
    description:
      "Streamline operations with intelligent automation solutions that save time and reduce costs.",
    color: "green",
    features: [
      "Workflow Optimization",
      "Process Automation",
      "Data Integration",
      "Custom Tool Development",
      "Report Generation",
      "Task Scheduling",
    ],
    offerings: [
      {
        icon: Workflow,
        title: "Process Automation",
        description: "Automate repetitive tasks and business processes",
        technologies: ["Zapier", "Power Automate", "Custom Scripts", "APIs"],
      },
      {
        icon: BarChart3,
        title: "Data Integration",
        description: "Connect and synchronize data across multiple systems",
        technologies: ["ETL Pipelines", "Database Sync", "API Integration"],
      },
      {
        icon: Target,
        title: "Workflow Optimization",
        description: "Analyze and improve existing business workflows",
        technologies: ["Process Mining", "Analytics", "Optimization"],
      },
      {
        icon: TrendingUp,
        title: "Reporting Automation",
        description: "Automated report generation and distribution",
        technologies: ["Dashboard Creation", "Scheduled Reports", "Alerts"],
      },
    ],
  },
  ml: {
    title: "Machine Learning",
    icon: Brain,
    description:
      "AI-powered solutions for predictive analytics, data modeling, and intelligent decision making.",
    color: "purple",
    features: [
      "Predictive Analytics",
      "Data Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "Custom AI Solutions",
      "Model Deployment",
    ],
    offerings: [
      {
        icon: TrendingUp,
        title: "Predictive Analytics",
        description: "Forecast trends and make data-driven decisions",
        technologies: ["Python", "TensorFlow", "Scikit-learn", "PyTorch"],
      },
      {
        icon: Cpu,
        title: "Custom AI Models",
        description: "Tailored machine learning models for your specific needs",
        technologies: ["Deep Learning", "Neural Networks", "Algorithm Design"],
      },
      {
        icon: Eye,
        title: "Computer Vision",
        description: "Image recognition and visual data processing",
        technologies: ["OpenCV", "Image Processing", "Object Detection"],
      },
      {
        icon: Layers,
        title: "Data Processing",
        description: "Clean, transform, and prepare data for analysis",
        technologies: ["Data Pipeline", "ETL", "Feature Engineering"],
      },
    ],
  },
};

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business needs, challenges, and goals through detailed consultations and analysis.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive strategy and project roadmap tailored to your specific requirements.",
  },
  {
    step: "03",
    title: "Design & Development",
    description:
      "We create and build your solution using industry best practices and cutting-edge technologies.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "Rigorous testing ensures your solution performs flawlessly and meets all quality standards.",
  },
  {
    step: "05",
    title: "Deployment & Support",
    description:
      "We deploy your solution and provide ongoing support, maintenance, and optimization services.",
  },
];

// ---------- COMPONENT ----------
const Services = () => {
  const [activeTab, setActiveTab] = useState<ServiceKey>("web");
  const currentService = services[activeTab];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive software solutions designed to transform your
              business operations and drive sustainable growth in the digital
              era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-2 md:space-y-0 md:space-x-2">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as ServiceKey)}
                className={`flex items-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <service.icon className="w-5 h-5 mr-2" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 bg-${currentService.color}-100 rounded-2xl flex items-center justify-center mr-4`}
                  >
                    <currentService.icon
                      className={`w-8 h-8 text-${currentService.color}-600`}
                    />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {currentService.title}
                  </h2>
                </div>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Key Features:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentService.features.map((feature: string) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-primary flex items-center group">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentService.offerings.map((offering: Offering, index: number) => (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card p-6 group hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-${currentService.color}-100 group-hover:bg-${currentService.color}-600 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300`}
                    >
                      <offering.icon
                        className={`w-6 h-6 text-${currentService.color}-600 group-hover:text-white transition-colors duration-300`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {offering.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {offering.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-700 px-2 py-1 rounded transition-colors duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and
              exceptional results
            </p>
          </motion.div>

          <div className="relative">
      

            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto relative z-10">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project requirements and create a customized
              solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
