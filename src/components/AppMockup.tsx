import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace , faMap , faCertificate } from '@fortawesome/free-solid-svg-icons'



export function AppMockup() {
  return (
    <section className="section py-12 mb-8 md:py-20 bg-black ">
      <motion.div 
        className="container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 px-4">
          
          {/* Left side - App features */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8 md:space-y-12"
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 gradient-text">
              Travel Smarter with<br />Our Mobile App
            </h2>
            {[
              {
                icon: <FontAwesomeIcon icon={faHandPeace} className="w-8 h-8 md:w-12 md:h-12 text-[#4ECDC4]" />,
                title: "Easy to Use",
                description: "Book trips without hassle, hidden fees, or endless confirmations."
              },
              {
                icon: <FontAwesomeIcon icon={faMap} className="w-8 h-8 md:w-12 md:h-12 text-[#FFD93D]" />,
                title: "Discover Adventures",
                description: "Find and join exciting trips with just a few taps."
              },
              {
                icon: <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 md:w-12 md:h-12 text-[#FF8F8F]" />,
                title: "Travel Like Never Before",
                description: "Experience authentic local adventures and create memories."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 md:gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-2 md:p-3 rounded-full bg-[#000000] ">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl text-[#fdfff5] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-[#ffffff]/60   ">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Real Mockup Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src='https://i.ibb.co/nN39kH0C/iphone.png' // Change this path based on your setup
              alt="Trawayl App Mockup" 
              className="w-[280px] md:w-[320px] rounded-[40px] shadow-2xl"
            />
          </motion.div>

        </div>
      </motion.div>
      
    </section>
    
  );
}
