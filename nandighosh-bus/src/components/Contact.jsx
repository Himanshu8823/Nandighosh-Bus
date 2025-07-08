import { motion } from 'framer-motion';
import { HiOutlineDeviceMobile, HiOutlineMail } from 'react-icons/hi';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us or Download Our App
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out directly or enjoy seamless booking with our mobile app
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-2 rounded-lg mr-4">
                <HiOutlineMail className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                 Message Us
              </h3>
            </div>
            
            <form className="space-y-5" name='contact-form'>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Mobile App Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-2 rounded-lg mr-4">
                <HiOutlineDeviceMobile className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Mobile App
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600">
                Download our app for faster bookings, exclusive offers, and real-time bus tracking.
              </p>

              <div className="space-y-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.nandighosh.bus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <div className="bg-white p-2 rounded-lg">
                    <FaGooglePlay className="text-gray-800 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Google Play</h4>
                    <p className="text-sm text-gray-500">Get it on Android</p>
                  </div>
                </a>

                <a 
                  href="https://apps.apple.com/in/app/nandighosh-bus/id123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <div className="bg-white p-2 rounded-lg">
                    <FaAppStore className="text-gray-800 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">App Store</h4>
                    <p className="text-sm text-gray-500">Download on iOS</p>
                  </div>
                </a>
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-500 text-center">
                  App version 2.1.3 • 10,000+ downloads
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;