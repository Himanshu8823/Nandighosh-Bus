import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Logo from '../assets/images/nandighoshbus_logo.jpeg';

const Hero = () => {
  // Memoize static content
  const heroContent = useMemo(() => ({
    title: 'Nandighosh Bus',
    tagline: 'Connecting Odisha, Comfortably',
    ctaText: 'Book Your Seat',
    imageAlt: 'Nandighosh luxury bus traveling through Odisha',
  }), []);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="nandighosh-bus.avif?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt={heroContent.imageAlt}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center"
          width="1920"
          height="1080"
          srcSet="
            nandighosh-bus.avif?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80 640w,
            nandighosh-bus.avif?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80 1280w,
            nandighosh-bus.avif?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80 1920w
          "
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={variants}
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden border-2 border-orange-500"
          >
            <img
              src={Logo}
              alt="Nandighosh Bus Logo"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          <motion.h1
            variants={variants}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            variants={variants}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          >
            {heroContent.tagline}
          </motion.p>

          <motion.div variants={variants}>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
              aria-label="Book your bus seat"
            >
              {heroContent.ctaText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;