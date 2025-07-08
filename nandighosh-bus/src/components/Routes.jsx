import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FaMapMarkerAlt, FaClock, FaStar, FaArrowRight } from 'react-icons/fa';
import { HiCheck } from 'react-icons/hi';

const Routes = () => {
  const routes = useMemo(() => [
    {
      id: 1,
      name: 'Balasore to Sambalpur',
      distance: '320 km',
      duration: '6-7 hours',
      features: ['AC Sleeper', 'Non-stop', 'Evening Departure'],
      price: '₹850',
      popular: true,
      scenery: 'sambalpur'
    },
    {
      id: 2,
      name: 'Balasore to Jamshedpur',
      distance: '150 km',
      duration: '3-4 hours',
      features: ['AC Seater', 'Snacks Included', 'Multiple Departures'],
      price: '₹500',
      scenery: 'jamshedpur'
    },
    {
      id: 3,
      name: 'Balasore to Berhampur',
      distance: '220 km',
      duration: '4-5 hours',
      features: ['Non-AC Sleeper', 'Express Service', 'Morning Departure'],
      price: '₹600',
      scenery: 'berhampur'
    }
  ], []);

  const getSceneryImage = (type) => {
    switch(type) {
      case 'sambalpur': 
        return 'bg-[url("./assets/images/BalasoreToSambalpur.jpg")]';
      case 'jamshedpur':
        return 'bg-[url("./assets/images/BalasoreToJamshedpur.jpg")]';
      case 'berhampur':
        return 'bg-[url("./assets/images/BalasoreToBerhampur.jpg")]';
      default:
        return 'bg-gradient-to-r from-orange-400 to-pink-500';
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full mb-4">
            Our Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-orange-500">Popular Routes</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Experience comfortable journeys across Odisha with our premium bus services and scenic routes
          </p>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card Container*/}
              <div className="h-full flex flex-col border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200">
                {/* Popular Badge */}
                {route.popular && (
                  <div className="absolute top-2 right-2 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    POPULAR
                  </div>
                )}
                
                {/* Image Header */}
                <div className={`h-48 ${getSceneryImage(route.scenery)} bg-cover bg-center relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{route.name}</h3>
                    <div className="flex items-center mt-2 flex-wrap gap-x-2">
                      <FaMapMarkerAlt className="text-orange-300 text-sm" />
                      <span className="text-orange-300 font-medium text-xs sm:text-sm">
                        {route.distance}
                      </span>
                      <span className="text-orange-300">•</span>
                      <FaClock className="text-orange-300 text-sm" />
                      <span className="text-orange-300 font-medium text-xs sm:text-sm">
                        {route.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="bg-white p-4 sm:p-6 flex-grow flex flex-col">
                  {/* Price Section */}
                  <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <FaStar className="text-orange-500 mr-2" />
                      <div>
                        <span className="font-bold text-gray-900 text-lg sm:text-xl">
                          {route.price}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">per seat</span>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Available
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="mb-4 flex-grow">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-3">
                      Included Amenities
                    </h4>
                    <ul className="space-y-2">
                      {route.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <HiCheck className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <button
                    className="w-full flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group-hover:shadow-md"
                    aria-label={`Book your seat for ${route.name}`}
                  >
                    Book Now
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <button className="inline-flex items-center px-6 py-2 sm:px-8 sm:py-3 border border-orange-500 text-sm sm:text-base font-medium rounded-full text-orange-500 bg-white hover:bg-orange-50 hover:text-orange-600 transition-colors hover:shadow-md">
            Discover All Routes
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Routes;