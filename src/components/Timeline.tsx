import { motion } from 'framer-motion';
import { Search, CreditCard, Users, Map, Gift } from 'lucide-react';

export function Timeline() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#37E5A5]" />,
      title: "Explore & Choose",
      description: "Browse curated trip packages, tourist vehicle rentals, or group camping trips from verified local providers."
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#4ECDC4]" />,
      title: "Book Instantly",
      description: "Select your preferred package or rental and book directly through Trawayl—no middlemen, no hidden fees."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FFD93D]" />,
      title: "Connect with Providers",
      description: "After booking, get instant confirmation and connect with the local provider for trip details."
    },
    {
      icon: <Map className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FF8F8F]" />,
      title: "Enjoy Your Trip",
      description: "Travel hassle-free with trusted services, well-planned itineraries, and community-based group travel options."
    },
    {
      icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#95A5FF]" />,
      title: "Share & Earn Rewards",
      description: "Review your experience, share photos, and earn loyalty points & cashback for future trips!"
    }
  ];

  return (
    <section className="section py-8 sm:py-12 md:py-20 bg-black/50">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl text-[#fffff0] sm:text-4xl md:text-4xl font-bold mb-3 sm:mb-4">How Trawayl Works</h2>
          <p className="text-sm sm:text-base text-[#ffffff]/60    max-w-2xl mx-auto px-4">
            Your journey to extraordinary adventures in five simple steps
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4">
          {/* Mobile Timeline Line */}
          <div className="absolute md:hidden left-8 sm:left-10 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#37E5A5] via-[#4ECDC4] to-[#95A5FF] opacity-30" />

          {/* Desktop Timeline Path */}
          <svg
            className="absolute hidden md:block left-0 top-1/2 w-full h-[calc(100%-80px)] -translate-y-1/2"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C300,100 300,300 600,300 C900,300 900,100 1200,100"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="8 8"
              fill="none"
              className="path-animation"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#37E5A5" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#95A5FF" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid md:grid-cols-5 gap-12 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex md:flex-col ${
                  index % 2 === 0 ? 'md:pt-0 md:pb-32' : 'md:pt-32 md:pb-0'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Mobile Layout */}
                <motion.div 
                  className="flex md:hidden items-start gap-4 sm:gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-2 sm:p-5 rounded-2xl bg-[#151515]  backdrop-blur-sm
                                    shadow-lg shadow-[#37E5A5]/5 hover:shadow-[#37E5A5]/20 transition-all duration-300">
                        {step.icon}
                      </div>
                      
                    </motion.div>
                   
                  </div>
                  <motion.div 
                    className="flex-1 pt-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <h3 className="text-lg sm:text-xl text-[#fffff0] font-bold mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-[#ffffff]/60  leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>

                {/* Desktop Layout */}
                <motion.div
                  className="hidden md:flex relative z-10 flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-4 rounded-full bg-[#151515]  mb-4 backdrop-blur-sm
                                shadow-lg shadow-[#37E5A5]/5 hover:shadow-[#37E5A5]/10 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#37E5A5] mb-4 shadow-lg shadow-[#37E5A5]/20" />
                  <h3 className="text-lg md:text-xl text-[#fffff0] font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#ffffff]/60   ">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}