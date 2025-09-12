import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');

    
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-90 text-white dark:text-gray-200 transition-colors duration-300" />
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with Tech Insights
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get the latest trends in web development, automation, and AI delivered to your inbox. 
              Join 5,000+ professionals who trust our insights.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto transition-colors duration-300"
              >
                <CheckCircle2 className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="opacity-90">
                  You've successfully subscribed to our newsletter.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 
                               bg-white dark:bg-gray-800 
                               focus:outline-none focus:ring-4 focus:ring-white/30 dark:focus:ring-blue-500/50 
                               transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-blue-600 hover:bg-gray-100 
                               dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
                               font-semibold px-8 py-4 rounded-lg 
                               transition-all duration-300 transform hover:scale-105
                               disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm opacity-75 mt-4 text-gray-200 dark:text-gray-400 transition-colors duration-300">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 dark:bg-gray-600/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 dark:bg-gray-600/10 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 dark:bg-gray-600/20 rounded-full animate-float animation-delay-400"></div>
    </section>
  );
};

export default NewsletterSignup;
