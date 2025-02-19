import { MountainSnow, Bus, Tent, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PartnerModal } from './PartnerModal';
export function Partners() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section py-8 md:py-20 px-4 md:px-6">
      <div className="container bg-[#37e5a5]/90 p-5 md:p-20 rounded-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl text-black md:text-4xl font-bold mb-3 md:mb-6 gradient-text">
              Own a Travel Business?<br />Let's Grow Together
            </h2>
            <p className="text-sm md:text-xl text-[#171717] mb-4 md:mb-8 text-muted-foreground">
              Join Trawayl's network of verified tour providers and connect with travelers
              seeking authentic adventures. Zero marketing hassle, more bookings.
            </p>
            <button 
              className="btn-primary bg-black flex items-center gap-2 text-sm md:text-base text-white/90 px-4 py-2 rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              Early Partner with Us
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="grid grid-cols-1 gap-4 max-w-[280px] md:max-w-[320px] mx-auto">
              {[
                { icon: <MountainSnow className="w-5 h-5 md:w-8 md:h-8 text-[#FF6B6B]" />, text: "Tour Package Providers" },
                { icon: <Bus className="w-5 h-5 md:w-8 md:h-8 text-[#4ECDC4]" />, text: "Tourist Vehicle Providers" },
                { icon: <Tent className="w-5 h-5 md:w-8 md:h-8 text-[#FFD93D]" />, text: "Strangers Camp Providers" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 bg-black/90 p-3 md:p-4 rounded-full hover:bg-black/90 transition-colors"
                >
                  {item.icon}
                  <span className="text-sm md:text-lg text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>

      <PartnerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}