import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Linkedin,
  Github,
  Mail
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description:
        'We stay at the forefront of technology, continuously exploring new solutions and methodologies to deliver cutting-edge results.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description:
        'Every project receives our full attention to detail, ensuring robust, scalable, and maintainable solutions that stand the test of time.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with our clients as partners, understanding their unique challenges and goals to deliver tailored solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description:
        'Our success is measured by your success. We focus on delivering tangible outcomes that drive business growth and efficiency.'
    }
  ];

  const team = [
    {
      name: 'Y. Bhargav Sai',
      role: 'COO & Co-Founder',
      bio: 'Visionary leader with great experience in software development and business strategy. Expert in scaling tech companies.',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQHwrB_FWYKHTQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723053575411?e=1758758400&v=beta&t=34yPgMP6BAM0KgRSyHLCnPt39f_OQ2SWuqegEfd0Whc',
      linkedin: '#',
      github: '#',
      email: 'bhargavsaiyekkala2005@gmail.com'
    },
    {
      name: 'N. Maanas Anand',
      role: 'CTO & Co-Founder',
      bio: 'A great Technical architect specializing in AI/ML and cloud infrastructure with knowledge in Operating Systems',
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjXhZMPDtBs5eLRkmHhD8W-n9pHPWnK1g5BS37AaBiuMtfEHqCU=s96-p-k-rw-no',
      linkedin: '#',
      github: '#',
      email: 'maanasanand021@gmail.com'
    },
    {
      name: 'Praneeth Pabbineedi',
      role: 'CPO',
      bio: 'Full-stack developer with expertise in modern web technologies and automation systems.',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQH1VEk9WleWiw/profile-displayphoto-scale_400_400/B4EZiUX_5HGoAk-/0/1754835976632?e=1758758400&v=beta&t=GKOsu3kJOWqqJOhUxAFXT18kmi4KRoe8IGmLymRyPH4',
      linkedin: '#',
      github: '#',
      email: 'pabbineedisaipraneeth@gmail.com'
    },
    {
      name: 'Lokesh Punyamanthula',
      role: 'CIO',
      bio: 'Data scientist and machine learning expert. Specializes in predictive analytics and Neural Networks.',
      image: 'public/images/lokesh.jpg',
      linkedin: '#',
      github: '#',
      email: 'lokeshpunyamanthula@gmail.com'
    }
  ];

  const milestones = [
    { year: '2025', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2025', event: 'First Major Client', description: 'Delivered our first enterprise automation solution' },
    { year: '2025', event: '100+ Projects', description: 'Reached milestone of 100 successful project deliveries' },
    { year: '2025', event: 'AI/ML Division', description: 'Expanded into machine learning and artificial intelligence' },
    { year: '2025', event: 'Global Recognition', description: 'Received industry awards for innovation in software solutions' }
  ];

  return (
    <div className="pt-16 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Omnicore</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're a team of passionate technologists dedicated to transforming businesses through
              innovative software solutions, intelligent automation, and cutting-edge machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth,
                  increase efficiency, and create competitive advantages in the digital age.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become the leading software solutions partner for businesses worldwide,
                  known for our innovation, quality, and transformative impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center group hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 dark:bg-gray-800"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From startup to industry leader - our key milestones and achievements
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-gray-600"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 lg:pr-8">
                  <div
                    className={`card p-6 dark:bg-gray-800 ${
                      index % 2 === 0 ? 'lg:text-right' : ''
                    }`}
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                <div className="lg:w-1/2 lg:pl-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The talented professionals behind our innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center group dark:bg-gray-800"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-gray-100 group-hover:ring-blue-200 dark:ring-gray-700 transition-all duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href={member.github}
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Github className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Mail className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
