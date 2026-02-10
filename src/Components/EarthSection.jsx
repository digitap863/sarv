import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PiPlant } from "react-icons/pi";
const Soil = '/images/Soil.png';
const arroww = '/images/arroww.png';
const plantt = '/images/plantt.png';


const cloudAnimation = `
  @keyframes floatCloud {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100vw);
    }
  }
`;


function EarthSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <>
            <style>{cloudAnimation}</style>
            <section
                ref={sectionRef}
                className="relative w-full md:h-screen h-[85vh] sticky top-0 overflow-hidden"
            >

                <motion.img
                    src={plantt}
                    alt=""
                    className='hidden md:block absolute bottom-0 right-0 z-10'
                    initial={{ opacity: 0, x: 150, y: 150 }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 150, y: 150 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                />

                {/* White Gradient Overlay - Top and Bottom to Transparent Middle */}
                <div
                    className="absolute inset-0 z-[5] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, #FBFCFB 0%, rgba(251,252,251,0.5) 5%, rgba(251,252,251,0) 10%, rgba(251,252,251,0) 90%, rgba(251,252,251,0.3) 95%, #FBFCFB 100%)'
                    }}
                />

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={Soil}
                        alt="Soil/Earth background"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
                </div>


                {/* Content Container */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 min-h-[500px] md:min-h-[600px]">

                    {/* Left Content */}
                    <motion.div
                        className="flex flex-col gap-4 max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Air Icon */}
                        <PiPlant className="text-white text-4xl md:text-5xl mb-2" />

                        {/* AIR Label */}
                        <motion.span
                            className="text-white/90 text-sm tracking-[4px] uppercase font-light border border-white/50 w-26 pl-6 pr-2 py-2 rounded-full bg-black/30"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            SOIL
                        </motion.span>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-white text-xl md:text-4xl uppercase lg:text-4xl font-bold italic leading-tight tracking-wide font-philosopher md:whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Soil is the foundation of life.
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            className="text-white/70 text-base md:text-lg font-light tracking-widest capitalize md:mt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Protecting it protects everything above it.
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.img
                            src={arroww}
                            alt="Arrow decoration"
                            className="hidden md:block absolute bottom-0 left-[18%] w-[300px] md:w-[370px] h-auto z-10 opacity-100"
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            animate={isInView ? { opacity: 0.8, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className="mt-10 backdrop-blur-md border border-white/30 rounded-xl p-5 md:p-8 max-w-md md:absolute md:bottom-[25%] md:right-[2%] w-full md:w-auto"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {/* Card Title */}
                        <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                            Soil Quality
                        </h3>

                        {/* Card List */}
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Soil contamination assessment & analysis</span>
                            </li>
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Risk evaluation for land use and development</span>
                            </li>
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Restoring soil health for sustainable ecosystems</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Top and Bottom gradient borders */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </section>
        </>
    );
}

export default EarthSection;