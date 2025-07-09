import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FaBus, FaTicketAlt, FaClock, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  const features = useMemo(() => [
    {
      id: 1,
      title: "AC Sleeper Coaches",
      description: "Travel in ultimate comfort with our fully air-conditioned sleeper coaches featuring premium bedding.",
      icon: <FaBus className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 2,
      title: "Online Ticketing",
      description: "Book your seats instantly through our user-friendly platform with secure payment options.",
      icon: <FaTicketAlt className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 3,
      title: "Timely Departures",
      description: "We maintain 95% on-time performance with real-time tracking and notifications.",
      icon: <FaClock className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 4,
      title: "Clean Facilities",
      description: "Hygienic toilets and regular sanitization for your health and safety.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ], []);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Premium Features</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the Nandighosh difference with services designed for your comfort and convenience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="relative group"
            >
              <div className="h-full bg-white p-6 rounded-xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>                                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-300 rounded-xl pointer-events-none transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-orange-400/30">
            <motion.div 
              className="py-8 px-4 text-center"
              variants={statItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-orange-100 font-medium">Happy Passengers</div>
            </motion.div>
            
            <motion.div 
              className="py-8 px-4 text-center"
              variants={statItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-orange-100 font-medium">Modern Buses</div>
            </motion.div>
            
            <motion.div 
              className="py-8 px-4 text-center"
              variants={statItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-orange-100 font-medium">On-Time Rate</div>
            </motion.div>
            
            <motion.div 
              className="py-8 px-4 text-center"
              variants={statItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-orange-100 font-medium">Customer Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;