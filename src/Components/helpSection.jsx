import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
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

const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function HelpSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

    return (
        <section
            ref={sectionRef}
            className="h-auto flex items-center justify-center bg-gradient-to-b from-[#FBFCFB] to-[#FBFCFB] px-4 py-20"
        >
            <motion.div
                className="text-center max-w-2xl"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Main Heading */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 font-philosopher"
                    variants={itemVariants}
                >
                    We can help you achieve your sustainability goals.
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-emerald-700 mb-8 text-lg"
                    variants={itemVariants}
                >
                    Take the first step toward environmental responsibility. Our team is ready to guide your organization's sustainability journey.
                </motion.p>

                {/* Buttons Container */}
                <motion.div
                    className="flex gap-4 justify-center flex-wrap"
                    variants={itemVariants}
                >
                    <motion.button
                        className="bg-gradient-to-r from-[#205B23] to-[#257C88] hover:opacity-90 text-white px-6 py-3 rounded-md font-medium transition-all"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start Your Sustainability Journey
                    </motion.button>
                    <motion.button
                        className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-all"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Our Experts
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}