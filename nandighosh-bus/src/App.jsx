import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Routes from './components/Routes';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Routes Section */}
        <motion.section 
          id="routes"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <Routes />
        </motion.section>
        
        {/* Features Section */}
        <motion.section
          id="features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <Features />
        </motion.section>
        
        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Contact />
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;