import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MdAir } from "react-icons/md";

const Air = '/images/Air.png';
const clooud = '/images/clooud.png';
const arroww = '/images/arroww.png';
const c1 = '/images/c1.png';
const c2 = '/images/c2.png';


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


function AirSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <>
            <style>{cloudAnimation}</style>
            <section
                ref={sectionRef}
                className="relative w-full min-h-[500px] md:h-screen overflow-hidden sticky top-0"
            >
                {/* White Gradient Overlay - Top and Bottom to Transparent Middle */}
                <div
                    className="absolute inset-0 z-[5] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, #FBFCFB 0%, rgba(251,252,251,0.8) 5%, rgba(251,252,251,0) 20%, rgba(251,252,251,0) 80%, rgba(251,252,251,0.8) 95%, #FBFCFB 100%)'
                    }}
                />

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={Air}
                        alt="Aerial view with clouds"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
                </div>

                {/* Extra Cloud Decoration - Bottom Left */}
                <img
                    src={clooud}
                    alt="Cloud decoration"
                    className="absolute bottom-0 left-[35%] w-[300px] md:w-[400px] h-auto z-10 opacity-80"
                    style={{ animation: 'floatCloud 80s linear infinite', }}
                />

                <img
                    src={c1}
                    alt="Cloud decoration"
                    className="absolute -top-20 left-0 w-[300px] md:w-[400px] h-auto z-10 opacity-80"
                    style={{ animation: 'floatCloud 80s linear infinite', }}
                />

                <img
                    src={c2}
                    alt="Cloud decoration"
                    className="absolute -top-20 right-0 w-[300px] md:w-[400px] h-auto z-10 opacity-80"
                    style={{ animation: 'floatCloud 80s linear infinite', }}
                />

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
                        <MdAir className="text-white text-5xl mb-2 " />

                        {/* AIR Label */}
                        <motion.span
                            className="text-white/80 text-sm tracking-[4px] uppercase font-light border border-white/50 w-20 pl-6 pr-2 py-2 rounded-full "
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            AIR
                        </motion.span>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-white text-2xl md:text-4xl lg:text-4xl font-bold italic leading-tight tracking-wide font-philosopher md:whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            CLEAN AIR IS A RIGHT OF FUTURE GENERATIONS.
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            className="text-white/90 text-base md:text-lg font-light tracking-wide mt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Protecting It Protects Everything Above It.
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.img
                            src={arroww}
                            alt="Arrow decoration"
                            className="absolute bottom-0 left-[15%] w-[300px] md:w-[370px] h-auto z-10 opacity-100"
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            animate={isInView ? { opacity: 0.8, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className=" bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-8 max-w-sm absolute bottom-[5%] -right-[1%]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {/* Card Title */}
                        <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                            Air Quality
                        </h3>

                        {/* Card List */}
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Ambient air quality monitoring & emission analysis</span>
                            </li>
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Pollution control and regulatory compliance support</span>
                            </li>
                            <li className="flex items-start gap-2 text-white/90 text-sm md:text-base">
                                <span className="text-white mt-0.5">•</span>
                                <span>Protecting public health and climate systems</span>
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

export default AirSection;