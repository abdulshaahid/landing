import { motion } from 'framer-motion';
import { Compass, Twitter, Github, Instagram } from 'lucide-react';
import { fadeIn, stagger } from '../utils/animations';

export function Footer() {
  const sections = [
    {
      title: "Product",
      links: ["Features", "How it Works", "Pricing", "FAQ"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"]
    },
    {
      title: "Resources",
      links: ["Community", "Partners", "Guides", "Support"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4 md:w-5 md:h-5" />, href: "#" },
    { icon: <Github className="w-4 h-4 md:w-5 md:h-5" />, href: "#" },
    { icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />, href: "#" }
  ];

  return (
    <footer className="py-8 md:py-12 px-4 border-t border-[#fffff0]/10">
      <div className="container">
     
        <motion.div 
          className="flex flex-col items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            className="relative mb-6 md:mb-8"
            variants={fadeIn}
          >
            
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-4xl mb-8 md:mb-12"
            variants={fadeIn}
          >
           
          </motion.div>

          <motion.div 
            className="flex gap-4 md:gap-6 mb-6 md:mb-8"
            variants={fadeIn}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className=" hover:text-[#37E5A5] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p 
            className="text-xs md:text-sm  text-center"
            variants={fadeIn}
          >
            © {new Date().getFullYear()} Trawayl. All rights reserved.<br />
            Connecting adventurous souls with extraordinary experiences.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}