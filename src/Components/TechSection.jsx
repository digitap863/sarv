import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MdAnalytics, MdAutoMode, MdDescription, MdMonitor, MdPublic, MdVerified } from 'react-icons/md';

const techbg = '/images/techbg.png';
const techbgmob = '/images/techbgmob.png';
const lines = '/images/linnes.svg';

// Tech features data
const techFeatures = [
    {
        id: 1,
        icon: MdMonitor,
        title: "Real-Time Monitoring",
        position: "top-[12%] left-[48%]"
    },
    {
        id: 2,
        icon: MdAnalytics,
        title: "Data Analytics",
        position: "top-[28%] right-[15%]"
    },
    {
        id: 3,
        icon: MdAutoMode,
        title: "Automated Reporting",
        position: "top-[45%] right-[8%]"
    },
    {
        id: 4,
        icon: MdVerified,
        title: "Verification Systems",
        position: "top-[55%] left-[45%]"
    },
    {
        id: 5,
        icon: MdPublic,
        title: "Global Standards",
        position: "bottom-[18%] left-[50%]"
    },
    {
        id: 6,
        icon: MdDescription,
        title: "Automated Workflows",
        position: "bottom-[12%] right-[5%]"
    }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const featureVariants = {
    hidden: { opacity: 0, scale: 0.5, x: 50 },
    visible: (index) => ({
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.5 + (index * 0.3),
            ease: "easeOut"
        }
    })
};

function TechSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[700px] md:min-h-[800px] overflow-hidden bg-white flex flex-col md:block"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={techbg}
                    alt="Technology background"
                    className="w-full h-full object-cover hidden md:block"
                />
                <img
                    src={techbgmob}
                    alt="Technology background mobile"
                    className="w-full h-full object-cover md:hidden block"
                />
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 md:bg-gradient-to-r md:from-black/50 md:via-transparent md:to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 min-h-[600px] md:min-h-[700px]">

                {/* Lines Image - First on Mobile */}
                <div className="relative md:absolute md:bottom-0 md:right-0 w-full md:w-auto h-full md:h-full flex items-center justify-center order-1 md:order-2 overflow-hidden">
                    <img src={lines} alt="lines" className="w-full h-full object-contain scale-110 md:scale-100" />
                </div>

                {/* Left Content Card - Second on Mobile */}
                <motion.div
                    className="relative md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-10 max-w-xl z-20 order-2 md:order-1 mt-6 md:mt-0 shadow-2xl"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Subtitle */}
                    <motion.p
                        className="text-white/90 text-xs md:text-sm uppercase tracking-[3px] md:mb-4 mb-3 font-medium  text-center"
                        variants={itemVariants}
                    >
                        SCIENCE MEETS INNOVATION
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h2
                        className="text-white text-lg md:text-3xl lg:text-4xl font-bold uppercase md:mb-6 mb-4 leading-tight tracking-wide font-philosopher  text-center"
                        variants={itemVariants}
                    >
                        TECHNOLOGY THAT SUPPORTS SUSTAINABILITY
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-white/80 text-sm md:text-lg leading-relaxed md:mb-6 mb-4  text-center"
                        variants={itemVariants}
                    >
                        We Combine Environmental Science With Intelligent Software To Analyse Data, Identify Risks, Verify Results, And Support Long-Term Environmental Sustainability.
                    </motion.p>

                    {/* Additional Text */}
                    <motion.p
                        className="text-white/70 text-xs md:text-sm leading-relaxed  text-center"
                        variants={itemVariants}
                    >
                        From Real-Time Monitoring To Advanced Reporting, Our Tools Help Organizations Make Informed, Responsible Decisions.
                    </motion.p>
                </motion.div>
            </div>

            {/* Top and Bottom fade overlays */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#FBFCFB] to-transparent z-[3]" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FBFCFB] to-transparent z-[3]" />
        </section>
    );
}

export default TechSection;