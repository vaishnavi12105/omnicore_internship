import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  TrendingUp,
  Code2,
  Zap,
  Brain
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping web development, from AI-powered tools to progressive web apps and the rise of edge computing.',
      content: `
        Web development has always been one of the most dynamic fields in technology. As we step into 2024, the pace of innovation is faster than ever. Developers are not only expected to build performant applications but also ensure scalability, security, and excellent user experience.

One major trend is the rise of AI-powered development tools. Platforms like GitHub Copilot and ChatGPT are making coding more efficient by suggesting solutions, automating boilerplate, and even assisting in debugging. While these tools won’t replace developers, they are becoming essential partners in the development workflow.

Another shift is the increased adoption of Progressive Web Apps (PWAs). Businesses are leaning toward PWAs because they combine the best of web and mobile apps—fast, offline-capable, and installable without app stores.

Edge computing is also gaining ground. With more applications requiring real-time interactions (e.g., streaming, gaming, IoT), companies are moving away from centralized cloud servers to distributed edge networks, reducing latency and improving reliability.

Meanwhile, frameworks like Next.js, SvelteKit, and Remix are pushing developers to rethink how applications are built, emphasizing performance and developer experience.

Looking ahead, developers should invest in learning TypeScript, AI-assisted coding, and serverless architectures, as these are quickly becoming industry standards.
      `,
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'web',
      tags: ['Web Development', 'Trends', 'AI', 'PWA'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Automating Business Processes: A Complete Guide',
      excerpt: 'Learn how to identify automation opportunities, choose the right tools, and implement solutions that drive real business value.',
      content: `
        Automation is no longer a luxury—it’s a necessity for businesses aiming to remain competitive. But successful automation requires more than just adopting tools. It starts with identifying repetitive, rule-based tasks that drain employee productivity.

        Typical candidates for automation include data entry, report generation, email workflows, and customer onboarding. For instance, Robotic Process Automation (RPA) tools like UiPath or Automation Anywhere allow businesses to replicate human interactions with digital systems.

        However, businesses often make the mistake of automating without a clear strategy. A complete automation plan involves:
        1. Process discovery – mapping out workflows and identifying bottlenecks.
        2. Selecting the right tools – from low-code platforms like Zapier to enterprise-level systems.
        3. Implementation – starting small, testing, and scaling gradually.
        4. Measuring ROI – tracking time saved, error reduction, and cost improvements.

        The future of automation is intelligent automation—a mix of RPA with machine learning and natural language processing. This allows automation not only of repetitive tasks but also of decision-making, such as loan approvals or fraud detection.

        Businesses that embrace automation will enjoy lower operational costs, higher efficiency, and empowered employees who can focus on value-driven tasks.
      `,
      author: 'Michael Thompson',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'automation',
      tags: ['Automation', 'Business Process', 'Efficiency', 'ROI'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'Machine Learning in Practice: Real-World Applications',
      excerpt: 'Discover how businesses are leveraging machine learning for predictive analytics, customer insights, and operational optimization.',
      content: `
        Machine learning (ML) is no longer just an academic topic—it’s transforming industries every day. From Netflix recommendations to fraud detection in banks, ML is already embedded in daily life.

        Some of the most impactful real-world applications include:
        - Predictive analytics in healthcare – hospitals use ML to predict disease outbreaks, patient deterioration, and even optimize treatment plans.
        - Customer insights in retail – ML models analyze purchasing behavior to provide personalized recommendations, improving sales and customer loyalty.
        - Operational optimization in manufacturing – predictive maintenance powered by ML reduces downtime and improves efficiency.
        - Fraud detection in finance – algorithms monitor millions of transactions in real time, flagging suspicious activity that humans would miss.

        But real-world adoption isn’t without challenges. Companies must deal with data quality, model bias, and scalability. A predictive model trained on biased data can lead to discriminatory decisions, while unscalable models fail under large workloads.

        The takeaway: ML is only as good as the data and processes behind it. Businesses should invest not only in machine learning engineers but also in robust data pipelines, ethics, and monitoring systems.
      `,
      author: 'Emily Davis',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'ml',
      tags: ['Machine Learning', 'AI', 'Predictive Analytics', 'Data Science'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 4,
      title: 'Building Scalable E-commerce Platforms',
      excerpt: 'Best practices for creating e-commerce solutions that can handle growth, from architecture decisions to performance optimization.',
      content: `
        E-commerce has exploded in the past decade, but building a platform that scales with user demand is no simple task. Whether you’re Shopify, Amazon, or a niche store, scalability determines whether your platform thrives or crashes during peak sales.

        A scalable e-commerce platform needs a modular architecture. Instead of a monolith, modern systems rely on microservices where payments, search, inventory, and user accounts are separate services that scale independently.

        Performance optimization is equally important. Techniques like caching (e.g., Redis), CDNs, and optimized database queries can drastically improve load times. Studies show that even a 1-second delay in page load can reduce conversions by 7%.

        Another critical factor is security. With e-commerce handling sensitive payment information, compliance with standards like PCI-DSS and practices like tokenization and multi-factor authentication are mandatory.

        Finally, e-commerce platforms must embrace AI and personalization. From personalized product recommendations to intelligent search and chatbots, AI-driven experiences are no longer optional—they’re expected by modern consumers.

        The future belongs to platforms that seamlessly integrate scalability, performance, and personalization while remaining secure and user-friendly.
      `,
      author: 'Alex Rodriguez',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'web',
      tags: ['E-commerce', 'Scalability', 'Performance', 'Architecture'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'The ROI of Business Automation: Measuring Success',
      excerpt: 'How to calculate and demonstrate the return on investment of automation initiatives with real metrics and case studies.',
      content: `
        Automation sounds great in theory, but how can businesses actually measure its success? The key lies in calculating Return on Investment (ROI).

        To calculate ROI, companies must consider:
        - Cost of automation tools – licensing fees, setup, and maintenance.
        - Labor savings – reduced hours spent on manual work.
        - Error reduction – fewer mistakes lead to fewer losses.
        - Scalability benefits – ability to handle more work without proportional hiring.

        For example, if a company invests $50,000 in automation but saves $150,000 annually in labor and errors, the ROI is 200% in the first year alone.

        Beyond numbers, automation also improves employee morale by eliminating repetitive tasks. This leads to higher retention, another indirect ROI benefit.

        The most successful organizations don’t just implement automation—they create a feedback loop where results are constantly measured, tools are optimized, and ROI is reassessed.
      `,
      author: 'Sarah Chen',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'automation',
      tags: ['ROI', 'Metrics', 'Business Value', 'Case Studies'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Customer Service: Implementation Guide',
      excerpt: 'Step-by-step guide to implementing AI chatbots and automated customer service solutions that enhance user experience.',
      content: `
        Customer service is one of the areas where AI has the most immediate impact. From chatbots to virtual assistants, AI is redefining how businesses interact with customers.

        The first step in implementing AI customer service is identifying the right use cases—FAQ responses, ticket routing, and appointment booking are good starting points. Next, businesses must choose between rule-based chatbots (simple but limited) and AI-driven bots (powered by NLP for better interactions).

        Integration is crucial. AI systems should work seamlessly with existing CRMs, ticketing systems, and support channels. For example, a bot should be able to escalate complex issues to human agents without frustrating the customer.

        The benefits are clear:
        - 24/7 availability without added staff.
        - Faster resolution times.
        - Personalized responses based on customer history.

        However, businesses should avoid over-automation. Customers still value human empathy in certain situations, so the right balance between AI and human support is key.

        The future of customer service will likely involve hybrid AI-human teams, where AI handles routine issues and humans focus on complex, high-value interactions.
      `,
      author: 'Michael Thompson',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'ml',
      tags: ['AI', 'Customer Service', 'Chatbots', 'Implementation'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', icon: TrendingUp },
    { id: 'web', label: 'Web Development', icon: Code2 },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'ml', label: 'Machine Learning', icon: Brain }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="pt-16 dark:bg-gray-900 transition-colors duration-300">
      
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Tech <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on web development, automation, 
              and machine learning from our team of industry professionals.
            </p>
          </motion.div>

          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card overflow-hidden group cursor-pointer bg-white dark:bg-gray-800 border dark:border-gray-700 transition-colors duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded flex items-center"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center group"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

   
      <section className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              All Articles ({filteredPosts.length})
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group cursor-pointer bg-white dark:bg-gray-800 border dark:border-gray-700 transition-colors duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
