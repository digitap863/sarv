import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IoWaterOutline } from "react-icons/io5";

const Green = '/images/Green.png';
const arroww = '/images/arroww.png';


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


function GreenSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <>
            <style>{cloudAnimation}</style>
            <section
                ref={sectionRef}
                className="relative w-full min-h-[500px] md:min-h-[800px]  overflow-hidden"
            >
                <div className='absolute -top-10 left-0 z-10 bg-[#FBFCFB]  h-20 w-full blur-sm' />
                <div className='absolute -top-10 -left-10 z-10 bg-[#FBFCFB]  h-20 w-40 blur-sm' />
                <div className='absolute -top-10 -right-10 z-10 bg-[#FBFCFB]  h-20 w-40 blur-sm' />

                <div className='absolute -bottom-10 left-0 z-10 bg-[#FBFCFB]  h-20 w-full blur-sm' />
                <div className='absolute -bottom-10 -left-10 z-10 bg-[#FBFCFB]  h-20 w-40 blur-sm' />
                <div className='absolute -bottom-10 -right-10 z-10 bg-[#FBFCFB]  h-20 w-40 blur-sm' />




                <div className="absolute inset-0 z-0">
                    <img
                        src={Green}
                        alt="Aerial view with clouds"
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
                        <IoWaterOutline className="text-white text-5xl mb-2 " />

                        {/* AIR Label */}
                        <motion.span
                            className="text-white/90 text-sm tracking-[4px] uppercase font-light border border-white/50 w-26 pl-6 pr-2 py-2 rounded-full bg-black/30"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            WATER
                        </motion.span>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-white text-2xl md:text-4xl uppercase lg:text-4xl font-bold italic leading-tight tracking-wide font-philosopher md:whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Water sustains life for generations
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            className="text-white/90 text-base md:text-lg font-light tracking-wide mt-2"
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
                            className="absolute bottom-10 left-[33%] w-[300px] md:w-[370px] h-auto z-10 opacity-100"
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            animate={isInView ? { opacity: 0.8, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className="  backdrop-blur-sm border border-white/30 rounded-xl p-6 md:p-8 max-w-sm absolute bottom-[25%] right-[2%]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {/* Card Title */}
                        <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                            Lorem Ipsum
                        </h3>

                        {/* Card List */}
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Lorem Ipsum is simply dummy t  is simply ext00</span>
                            </li>
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Lorem Ipsum is simply dummy t  is simply ext</span>
                            </li>
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Lorem Ipsum is simply dummy t  is simply ext</span>
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

export default GreenSection;