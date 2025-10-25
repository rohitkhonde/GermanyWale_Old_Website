import React from 'react';
import hero from "../../../assets/Hero/heroimg.png";
import heroback from "../../../assets/Hero/heroback.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SignUpForm from "./Form";
import { href } from 'react-router-dom';

const Hero = ({onBookCallClick}) => {
  return (
    <section className='flex items-center justify-center bg-white-50 py-8 px-4 sm:px-6 lg:px-22 relative overflow-hidden'>
      {/* Background image positioned behind text */}
     
      <div className="container absolute left-10 -top-35 w-full h-full z-0 flex items-center justify-start overflow-hidden">
        <img 
          src={heroback} 
          alt="Background" 
          className="w-120 h-full object-cover opacity-100" 
          style={{ 
        
          }}
        />
      </div>

      <div className='container flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-12 relative z-10'>
        {/* Left-section text-div - Centered on mobile/tablet */}
        <motion.div 
          className="flex flex-col w-[100%] lg:w-1/2 px-4 sm:px-6 items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Empowering dreams of Studying in{' '}
            <motion.span 
              className="bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ backgroundPosition: '100% 50%' }}
              animate={{ backgroundPosition: '0% 50%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              Germany
            </motion.span>
          </motion.h1>

          <motion.p 
            className='font-light text-[#3B4353] text-lg max-w-md relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
Study in Germany made easy  with 100% admission guaranteed, expert guidance and trusted mentorship every step of the way. Germanywale turns your dream into reality.          </motion.p>

          <motion.div
            className="w-full flex justify-center lg:justify-start relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button
            onClick={onBookCallClick}
              className='px-8 sm:px-14 py-3 font-medium text-white transition-all hover:opacity-90 w-full sm:w-auto'
              style={{
                background: "linear-gradient(91.44deg, #FF9422 17.06%, #D63715 52.08%)",
                borderRadius: "10px 0 10px 0",
              }}
              
              whileHover={{ scale: 1.02 }}
            >
              Book a Call
            </button>
          </motion.div>

          <motion.div 
            className="flex space-x-4 pt-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { icon: <FaInstagram className="text-lg" />, href: "https://www.instagram.com/germanywale_official/" },
              { icon: <FaYoutube className="text-lg" />, href: "https://youtube.com/@germanywale_official?si=J911aUDSMS29WXCj" },
              { icon: <FaLinkedinIn className='text-lg' />,href:"https://www.linkedin.com/company/35885346/admin/feed/posts/"},
              { icon: <FaFacebookF className="text-lg" />, href: "https://www.facebook.com/germanywale.official" },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-black text-black hover:bg-gradient-to-r from-[#D63715] to-[#FF9422] hover:text-white hover:border-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right section Image div - Animated and centered on mobile */}
        <motion.div 
          className='w-full lg:w-1/2 flex justify-center px-2 sm:px-0 relative z-10'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img 
            src={hero} 
            alt="Hero Image" 
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;