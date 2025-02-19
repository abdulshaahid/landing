import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun , faBus, faPeopleGroup, faTents, faPanorama, faPersonHiking } from '@fortawesome/free-solid-svg-icons'

export function Features() {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faMountainSun} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#FF6B6B]" />,
      title: "Curated Travel Packages",
      description: "Handpicked experiences from verified tour package providers"
    },
    {
      icon: <FontAwesomeIcon icon={faBus} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#4ECDC4]" />,
      title: "Seamless Transportation",
      description: "Book Tourist vehicles instantly with trusted tourist vehicle providers"
    },
    {
      icon: <FontAwesomeIcon icon={faPeopleGroup} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#FFD93D]" />,
      title: "Group Adventures",
      description: "Join like-minded travelers on exciting journeys"
    },
    {
      icon: <FontAwesomeIcon icon={faTents} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#95A5FF]" />,
      title: "Camp Experiences",
      description: "Connect with verified strangers camp providers"
    },
    {
      icon: <FontAwesomeIcon icon={faPanorama} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#FF8F8F]" />,
      title: "Photo-worthy Moments",
      description: "Discover Instagram-worthy destinations"
    },
    {
      icon: <FontAwesomeIcon icon={faPersonHiking} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#98FB98]" />,
      title: "Unique Experiences",
      description: "Access exclusive local activities and events"
    }
  ];

  return (
    <section className="section py-8 mb-8 sm:py-12 md:py-20" id="features">

      <motion.div 
        className="container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
          variants={fadeIn}
        >
          
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#fffff0] mb-3 sm:mb-4">Experience Travel Like Never Before</h2>
          <p className="text-sm sm:text-base text-[#ffffff]/60   max-w-2xl mx-auto">
            Discover a new way to explore the world with our innovative features designed
            for modern travelers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 px-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-2 sm:mb-2 p-4 sm:p-4 rounded-full bg-[#000000] backdrop-blur-sm ">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl text-[#fffff0] font-semibold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#ffffff]/60  ">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}