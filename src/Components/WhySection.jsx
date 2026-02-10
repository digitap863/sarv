import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Background image
const whybg = '/images/whybg.png';
const whybgmob = '/images/whybgmob.png';
// Cloud images
const c1 = '/images/c1.png';
const c2 = '/images/c2.png';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};


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

function WhySection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <>
        <style>{cloudAnimation}</style>
        <section
            ref={sectionRef}
            id="mission"
            className="relative w-full h-auto  md:min-h-[600px] overflow-hidden bg-gradient-to-b from-[#FBFCFB] to-[#FBFCFB]"
        >
            {/* Background Image - Forest/Trees */}
            <div className="absolute bottom-0 left-0 right-0 z-0">
                <img
                    src={whybg}
                    alt="Forest background"
                    className="w-full h-auto object-cover opacity-90 md:block hidden"
                />
                <img
                    src={whybgmob}
                    alt="Forest background"
                    className="w-full h-auto object-cover opacity-90 md:hidden block"
                />
            </div>

            
                <img src={c1} alt="" className="hidden lg:block absolute top-0 left-[0%] w-auto h-[30vh] " style={{ animation: 'floatCloud 80s linear infinite', }} />
                <img src={c2} alt="" className="hidden lg:block absolute top-0 left-[45%] w-auto h-[30vh] " style={{ animation: 'floatCloud 80s linear infinite', animationDelay: '2s' }} />


           

            {/* Content Container */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Subtitle */}
                <motion.p
                    className="text-[#1a472a] text-sm md:text-base uppercase tracking-[4px] md:mb-4 mb-3 font-medium"
                    variants={itemVariants}
                >
                    WHY WE EXIST
                </motion.p>

                {/* Main Heading */}
                <motion.h2
                    className="text-[#1a472a] text-2xl md:text-4xl lg:text-5xl font-bold uppercase mb-10 md:tracking-wide font-philosopher whitespace-nowrap"
                    variants={itemVariants}
                >
                    WHY SUSTAINABILITY MATTERS
                </motion.h2>

                {/* First Paragraph */}
                <motion.p
                    className="text-[#205B23] text-base md:text-lg lg:text-xl  md:mb-2 mb-1 max-w-4xl mx-auto"
                    variants={itemVariants}
                >
                    We Believe The Future Depends On The Choices We Make Today.
                </motion.p>

                {/* Bold Highlighted Paragraph */}
                <motion.p
                    className="text-[#1a472a] text-base md:text-lg lg:text-xl font-bold leading-relaxed md:mb-6 mb-3 max-w-4xl mx-auto"
                    variants={itemVariants}
                >
                    Clean Water, Breathable Air, And Healthy Soil Are Not Luxuries — They Are Responsibilities.
                </motion.p>

                {/* Third Paragraph */}
                <motion.p
                    className="text-[#205B23] text-base md:text-lg leading-relaxed mb-10 max-w-4xl mx-auto"
                    variants={itemVariants}
                >
                    Our Role Is To Help Industries, Organizations, And Governments Operate Responsibly, Comply
                    With Environmental Regulations, And Protect The Planet For Generations To Come.
                </motion.p>

                {/* Decorative Divider Line */}
                <motion.div
                    className="w-32 h-[2px] bg-[#1a472a]/40 mx-auto mt-8"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                />
            </motion.div>

            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#FBFCFB] to-transparent z-[2]" />
        </section>
        </>
    );
}

export default WhySection;
