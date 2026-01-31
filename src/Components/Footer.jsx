import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Public folder assets
const logofooter = '/images/logofooter.png';
const footerbg = '/images/footerbg.png';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, amount: 0.2 });

    return (
        <footer
            ref={footerRef}
            className="relative w-full overflow-hidden"
            id="contact"
        >
            {/* Background Image - Forest/Trees */}
            <div className="absolute bottom-0 left-0 right-0 h-full">
                <img
                    src={footerbg}
                    alt="Forest background"
                    className="w-full h-auto object-cover object-bottom opacity-100"
                />
                {/* Dark overlay */}
                {/* <div className="absolute inset-0 "></div> */}
            </div>

            {/* Main Footer Content */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Left Section - Logo, Tagline & Newsletter */}
                    <motion.div
                        className="lg:col-span-4 space-y-6"
                        variants={itemVariants}
                    >
                        {/* Logo */}
                        <div className="mb-4">
                            <img
                                src={logofooter}
                                alt="Sarv Sustain"
                                className="h-20 w-auto"
                            />
                        </div>

                        {/* Tagline */}
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            We Can Help You Achieve Your<br />
                            Sustainability Goals.
                        </p>

                        {/* Newsletter Section */}
                        <div className="pt-4 space-y-3">
                            <p className="text-white/80 text-sm">
                                Get Our Weekly Newsletter (Zero Spam)
                            </p>
                            <div className="flex items-center gap-2">
                                <input
                                    type="email"
                                    placeholder="Type In Your Email"
                                    className="flex-1 bg-[#2a3a2a]/50 border border-gray-600/30 rounded-md px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#3d9a7a] transition-colors max-w-[200px]"
                                />
                                <button className="bg-[#3d9a7a] hover:bg-[#2d7a6a] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors">
                                    Send
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={itemVariants}
                    >
                        <h3 className="text-white font-semibold text-base mb-5">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/mission" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Mission
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/about-us" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Solutions Links */}
                    <motion.div
                        className="lg:col-span-3"
                        variants={itemVariants}
                    >
                        <h3 className="text-white font-semibold text-base mb-5">Solutions</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/solutions/esg" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    ESG
                                </a>
                            </li>
                            <li>
                                <a href="/solutions/ghg" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    GHG
                                </a>
                            </li>
                            <li>
                                <a href="/solutions/software" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Software
                                </a>
                            </li>
                            <li>
                                <a href="/solutions/regulatory-compliance" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Regulatory Compliance
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Resources Links */}
                    <motion.div
                        className="lg:col-span-3"
                        variants={itemVariants}
                    >
                        <h3 className="text-white font-semibold text-base mb-5">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/blog" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/case-studies" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a href="/documentation" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="/support" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Divider Line */}
                <motion.div
                    className="border-t border-gray-600/30 mt-12 pt-6"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {/* Copyright */}
                    <p className="text-gray-500 text-sm text-center">
                        © 2026 Tapclone. All Rights Reserved.
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
}
