import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Public folder assets
const logofooter = '/images/logofooter.png';
const footerbg = '/images/footerbg.png';
const footerbgmob = '/images/footerbgmob.png';

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
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState('');

    // Newsletter states
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleResourceClick = (e, resourceName) => {
        e.preventDefault();
        setSelectedResource(resourceName);
        setModalOpen(true);
    };

    // Newsletter subscription handler
    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage({ type: 'error', text: 'Please enter your email' });
            return;
        }

        setIsLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:3001/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ type: 'success', text: '✅ Subscribed successfully!' });
                setEmail('');
            } else {
                setMessage({ type: 'error', text: data.message || 'Subscription failed' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Network error. Please try again.' });
        } finally {
            setIsLoading(false);
            // Clear message after 5 seconds
            setTimeout(() => setMessage({ type: '', text: '' }), 5000);
        }
    };

    return (
        <footer
            ref={footerRef}
            className="relative w-full overflow-hidden"
            id="contact"
        >
            {/* Background Image - Forest/Trees */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <img
                    src={footerbg}
                    alt="Forest background"
                    className="w-full h-full object-cover object-bottom hidden md:block"
                />
                <img
                    src={footerbgmob}
                    alt="Forest background mobile"
                    className="w-full h-full object-cover object-bottom md:hidden block"
                />
            </div>

            {/* Main Footer Content */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Desktop and Mobile Layout Toggle */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">

                    {/* Link Sections Container - Order 1 on Mobile */}
                    <div className="grid grid-cols-2 md:grid-cols-8 lg:col-span-8 gap-8 order-1 md:order-2">
                        {/* Company Links */}
                        <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
                            <h3 className="text-white font-semibold text-lg md:text-base mb-5">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="/" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">Home</a></li>
                                <li><a href="#about" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">About Us</a></li>
                                <li><a href="#mission" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">Mission</a></li>
                                <li><a href="#services" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">Services</a></li>
                            </ul>
                        </motion.div>

                        {/* Solutions Links */}
                        <motion.div className="col-span-1 md:col-span-3" variants={itemVariants}>
                            <h3 className="text-white font-semibold text-lg md:text-base mb-5">Solutions</h3>
                            <ul className="space-y-3">
                                <li><a href="#services" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">ESG</a></li>
                                <li><a href="#services" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">GHG</a></li>
                                <li><a href="#services" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">Software</a></li>
                                <li><a href="#services" className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors">Regulatory Compliance</a></li>
                            </ul>
                        </motion.div>

                        {/* Resources Links */}
                        <motion.div className="col-span-2 md:col-span-3" variants={itemVariants}>
                            <h3 className="text-white font-semibold text-lg md:text-base mb-5">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" onClick={(e) => handleResourceClick(e, 'Blog')} className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors cursor-pointer">Blog</a></li>
                                <li><a href="#" onClick={(e) => handleResourceClick(e, 'Case Studies')} className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors cursor-pointer">Case Studies</a></li>
                                <li><a href="#" onClick={(e) => handleResourceClick(e, 'Documentation')} className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors cursor-pointer">Documentation</a></li>
                                <li><a href="#" onClick={(e) => handleResourceClick(e, 'Support')} className="text-white/80 text-sm hover:text-[#3d9a7a] transition-colors cursor-pointer">Support</a></li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Left Section (Desktop) / Bottom Section (Mobile) - Order 3 on Mobile */}
                    <div className="hidden md:flex flex-col lg:col-span-4 space-y-6 order-1">
                        {/* Logo */}
                        <div className="mb-4">
                            <img src={logofooter} alt="Sarv Sustain" className="h-20 w-auto" />
                        </div>
                        {/* Tagline */}
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            We Can Help You Achieve Your<br />Sustainability Goals.
                        </p>
                        {/* Desktop Newsletter */}
                        <form onSubmit={handleSubscribe} className="pt-4 space-y-3">
                            <p className="text-white/80 text-sm">Get Our Weekly Newsletter (Zero Spam)</p>
                            <div className="flex items-center gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Type In Your Email"
                                    className="flex-1 bg-[#2a3a2a]/50 border border-gray-600/30 rounded-md px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#3d9a7a] transition-colors max-w-[200px]"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`bg-[#3d9a7a] hover:bg-[#2d7a6a] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? '...' : 'Send'}
                                </button>
                            </div>
                            {message.text && (
                                <p className={`text-xs ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message.text}</p>
                            )}
                        </form>
                    </div>

                    {/* Mobile Only: Newsletter & Centered Logo/Tagline - Order 2 & 3 */}
                    <div className="md:hidden flex flex-col space-y-12 order-2 mt-8">
                        {/* Mobile Newsletter - Pill Shaped */}
                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <p className="text-white/60 text-sm text-center">Get Our Weekly Newsletter</p>
                            <div className="relative flex items-center bg-[#252525]/80 backdrop-blur-sm rounded-full p-1 border border-white/10 mx-auto w-full max-w-sm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Type In Your Email"
                                    className="flex-1 bg-transparent px-6 py-3 text-white text-sm placeholder-gray-500 focus:outline-none"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`bg-[#518fbb] hover:bg-[#3d7aa3] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors ${isLoading ? 'opacity-70' : ''}`}
                                >
                                    {isLoading ? '...' : 'Send'}
                                </button>
                            </div>
                            {message.text && (
                                <p className={`text-xs text-center ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message.text}</p>
                            )}
                        </form>

                        {/* Centered Logo & Tagline for Mobile */}
                        <div className="flex flex-col items-center text-center space-y-4">
                            <img src={logofooter} alt="Sarv Sustain" className="h-24 w-auto" />
                            <p className="text-white text-sm font-medium max-w-xs px-4">
                                We Can Help You Achieve Your Sustainability Goals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <motion.div
                    className="border-t border-gray-600/30 mt-12 pt-6"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {/* Copyright */}
                    <p className="text-gray-500 text-xs md:text-sm text-center">
                        © 2026 Tapclone. All Rights Reserved.
                    </p>
                </motion.div>
            </motion.div>

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
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative bg-gradient-to-br from-[#1a472a] via-[#205B23] to-[#257C88] rounded-2xl p-6 md:p-10 max-w-sm w-full text-center shadow-2xl overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative elements */}
                            <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                            {/* Close Button */}
                            <motion.button
                                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setModalOpen(false)}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {/* Icon */}
                            <motion.div
                                className="mb-5"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">📚</span>
                                </div>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="text-white text-2xl font-bold mb-2 font-philosopher"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Coming Soon!
                            </motion.h3>

                            {/* Resource Name */}
                            <motion.p
                                className="text-[#3d9a7a] text-sm font-medium uppercase tracking-wider mb-3"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.35 }}
                            >
                                {selectedResource}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                className="text-white/80 text-sm mb-5 leading-relaxed"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                We're working on bringing you valuable {selectedResource.toLowerCase()} content. Stay tuned!
                            </motion.p>

                            {/* Contact */}
                            <motion.a
                                href="mailto:info@sarvsustain.com"
                                className="inline-flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors"
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.45 }}
                            >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@sarvsustain.com
                            </motion.a>

                            {/* Button */}
                            <motion.button
                                className="mt-5 bg-white text-[#1a472a] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors w-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setModalOpen(false)}
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Got it!
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
