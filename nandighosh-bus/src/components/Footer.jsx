import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const footerData = useMemo(() => ({
    services: ['Bus Booking', 'Group Travel', 'Tour Packages'],
    support: ['Contact Us', 'FAQs', 'Cancellation Policy'],
    socialLinks: [
      { icon: <FaFacebook className="w-5 h-5" />, name: 'Facebook' },
      { icon: <FaTwitter className="w-5 h-5" />, name: 'Twitter' },
      { icon: <FaInstagram className="w-5 h-5" />, name: 'Instagram' }
    ],
    contactInfo: [
      { 
        icon: <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3 flex-shrink-0" />,
        text: '123 Bus Stand, Bhubaneswar',
        link: null
      },
      { 
        icon: <FaPhone className="text-orange-500 mr-3" />,
        text: '+91 98765 43210',
        link: 'tel:+919876543210'
      },
      { 
        icon: <HiOutlineMail className="text-orange-500 mr-3 text-xl" />,
        text: 'info@nandighoshbus.com',
        link: 'mailto:info@nandighoshbus.com'
      }
    ]
  }), []);

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-900 text-white py-12 w-full mt-auto"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center md:text-left">
          
          {/* Brand and Social */}
          <div className="space-y-4 mx-auto md:mx-0 max-w-xs">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                NB
              </div>
              <span className="text-xl font-bold">Nandighosh Bus</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting Odisha comfortably since 2010
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {footerData.socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 mx-auto md:mx-0 max-w-xs">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              {footerData.contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm text-left"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-gray-400 text-sm text-left">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 mx-auto md:mx-0 max-w-xs">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {footerData.services.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4 mx-auto md:mx-0 max-w-xs">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {footerData.support.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright - sticks to bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Nandighosh Bus. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;