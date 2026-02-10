import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    const handleButtonClick = (type) => {
        setModalType(type);
        setModalOpen(true);
    };

    return (
        <>
            <section
                ref={sectionRef}
                className="relative z-10 h-auto flex items-center justify-center bg-[#FBFCFB] px-4 py-20"
            >
                <motion.div
                    className="text-center max-w-2xl"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Main Heading */}
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold text-emerald-800 mb-4 font-philosopher"
                        variants={itemVariants}
                    >
                        We can help you achieve your sustainability goals.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-emerald-700 mb-8 md:text-lg text-sm"
                        variants={itemVariants}
                    >
                        Take the first step toward environmental responsibility. Our team is ready to guide your organization's sustainability journey.
                    </motion.p>

                    {/* Buttons Container */}
                    <motion.div
                        className="flex gap-4 justify-center md:flex-wrap flex-col md:flex-row"
                        variants={itemVariants}
                    >
                        <motion.button
                            className="bg-gradient-to-r from-[#205B23] to-[#257C88] hover:opacity-90 text-white px-6 py-3 rounded-md font-medium transition-all"
                            variants={buttonVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleButtonClick('journey')}
                        >
                            Start Your Sustainability Journey
                        </motion.button>
                        <motion.button
                            className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-all"
                            variants={buttonVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleButtonClick('contact')}
                        >
                            Contact Our Experts
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Coming Soon Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModalOpen(false)}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative bg-gradient-to-br from-[#1a472a] via-[#205B23] to-[#257C88] rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative circles */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                            {/* Floating leaves */}
                            <motion.div
                                className="absolute top-8 left-8 text-2xl"
                                animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                🌿
                            </motion.div>
                            <motion.div
                                className="absolute top-16 right-12 text-xl"
                                animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                🌱
                            </motion.div>
                            <motion.div
                                className="absolute bottom-20 right-8 text-2xl"
                                animate={{ y: [-3, 7, -3], rotate: [-3, 3, -3] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            >
                                🍃
                            </motion.div>

                            {/* Close Button */}
                            <motion.button
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setModalOpen(false)}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {/* Icon */}
                            <motion.div
                                className="mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.div
                                    className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {modalType === 'journey' ? (
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    )}
                                </motion.div>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="text-white text-3xl md:text-4xl font-bold mb-3 font-philosopher"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {modalType === 'journey' ? 'Coming Soon! 🚀' : 'Get In Touch! 💬'}
                            </motion.h3>

                            {/* Subtitle */}
                            <motion.p
                                className="text-white/80 text-sm uppercase tracking-wider mb-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {modalType === 'journey' ? 'Sustainability Portal' : 'Expert Consultation'}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                className="text-white/90 text-base mb-8 leading-relaxed"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {modalType === 'journey'
                                    ? "We're building an amazing sustainability portal just for you. Stay tuned for something incredible!"
                                    : "Our sustainability experts are ready to help you. Reach out to us and let's make a difference together!"
                                }
                            </motion.p>

                            {/* Contact Info */}
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <p className="text-white/70 text-sm mb-2">
                                    {modalType === 'journey' ? 'Want early access?' : 'Email us at'}
                                </p>
                                <a
                                    href="mailto:info@sarvsustain.com"
                                    className="text-white font-medium hover:text-white/80 transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    info@sarvsustain.com
                                </a>
                            </motion.div>

                            {/* Close Button */}
                            <motion.button
                                className="bg-white text-[#1a472a] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setModalOpen(false)}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                {modalType === 'journey' ? 'Got it!' : "I'll reach out!"}
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}