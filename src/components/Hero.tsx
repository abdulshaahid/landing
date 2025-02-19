import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { fadeIn, stagger } from "../utils/animations";
import { EmailForm } from "./EmailForm";
import { HeroFeatures } from "./HeroFeatures";
import { SparklesText } from "@/components/ui/sparkles-text"
import { BackgroundLines } from "@/components/ui/background-lines";



export function Hero() {
  return (

    <section className="section pt-0 md:pt-0">
    <BackgroundLines className=" flex items-center justify-center w-full flex-col px-4">


      <motion.div
        className="container relative z-10"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <motion.div className="relative mb-6 md:mb-8" variants={fadeIn}>
            <div className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 rounded-full bg-black border border-[#37E5A5]/10">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-[#37E5A5]" />
              <span className="text-xs md:text-sm">
                Revolutionizing Travel Planning
              </span>
            </div>
          </motion.div>

          <motion.div className="space-y-4 mb-8" variants={fadeIn}>
            <h1 >
            <SparklesText className="text-6xl md:text-6xl lg:text-8xl font-bold text-[#fdfff5]" text="Trawayl" />
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-[#fdfff5]/80 ">
              The Finest Way To Travel.
            </p>
          </motion.div>

          <motion.p
            className="text-base md:text-l text-muted-foreground text-[#999999] mb-8 md:mb-12"
            variants={fadeIn}
          >
            "Trawayl connects adventure seekers with expert tour providers,
            vehicle providers, unique experiences, strangers' camps, and fellow
            explorers, redefining the way you discover the world."
          </motion.p>

          <EmailForm />
          <HeroFeatures />

        </div>
      </motion.div>

      </BackgroundLines>

    </section>

  );
}
