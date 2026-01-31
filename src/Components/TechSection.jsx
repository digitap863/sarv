import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MdAnalytics, MdAutoMode, MdDescription, MdMonitor, MdPublic, MdVerified } from 'react-icons/md';

const techbg = '/images/techbg.png';
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
            className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={techbg}
                    alt="Technology background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 min-h-[600px] md:min-h-[700px]">

                {/* Left Content Card */}
                <motion.div
                    className="absolute left-6 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 max-w-xl z-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Subtitle */}
                    <motion.p
                        className="text-white/90 text-xs md:text-sm uppercase tracking-[3px] mb-4 font-medium text-center"
                        variants={itemVariants}
                    >
                        SCIENCE MEETS INNOVATION
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h2
                        className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6 leading-tight tracking-wide font-philosopher text-center"
                        variants={itemVariants}
                    >
                        TECHNOLOGY THAT SUPPORTS SUSTAINABILITY
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-white/80 text-sm md:text-base leading-relaxed mb-4 text-center"
                        variants={itemVariants}
                    >
                        We Combine Environmental Science With Intelligent Software To Analyse Data, Identify Risks, Verify Results, And Support Long-Term Environmental Sustainability.
                    </motion.p>

                    {/* Additional Text */}
                    <motion.p
                        className="text-white/70 text-xs md:text-sm leading-relaxed text-center"
                        variants={itemVariants}
                    >
                        From Real-Time Monitoring To Advanced Reporting, Our Tools Help Organizations Make Informed, Responsible Decisions.
                    </motion.p>
                </motion.div>

                {/* Right Side - Tech Features (One by One Animation) */}
                <div className="absolute -bottom-10 right-0 pointer-events-none">
                   <img src={lines} alt="lines" className="w-full h-full object-contain pt-2" />
                </div>
            </div>

            {/* Top and Bottom fade overlays */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#FBFCFB] to-transparent z-[3]" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FBFCFB] to-transparent z-[3]" />
        </section>
    );
}

export default TechSection;