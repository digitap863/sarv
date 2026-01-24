import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const logo = '/images/logo.svg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const navItems = [
        { href: '#about', label: 'About Us' },
        { href: '#solutions', label: 'Solutions' },
        // { href: '#mission', label: 'Mission & Vision' },
        { href: '#contact', label: 'Talk to Us' }
    ];

    return (
        <>
            <motion.nav
                className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 md:w-[90%] w-[95%] max-w-7xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: [0.6, 0.05, 0.01, 0.9]
                }}
            >
                <motion.div
                    className="relative z-10 md:px-6 px-0 py-4"
                    animate={{
                        paddingTop: scrolled ? '0.75rem' : '1rem',
                        paddingBottom: scrolled ? '0.75rem' : '1rem'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-3 z-50"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.img
                                src={logo}
                                alt="Sarv Sustain"
                                className="md:h-20 h-12 w-auto"
                                animate={{
                                    height: scrolled ? '5rem' : '5rem'
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        {/* Desktop - Centered Navigation Items */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                            <motion.ul
                                className="flex items-center gap-8 bg-[#848484]/70 backdrop-blur-md rounded-full px-10 py-3 border border-white"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3,
                                    ease: "easeOut"
                                }}
                            >
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.href}
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.4 + (index * 0.1),
                                            ease: "easeOut"
                                        }}
                                    >
                                        <motion.a
                                            href={item.href}
                                            className="text-white hover:text-teal-300 transition-colors font-medium relative inline-block"
                                            whileHover={{
                                                scale: 1.05,
                                                y: -2
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.label}
                                            <motion.span
                                                className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 origin-left"
                                                initial={{ scaleX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Mobile - Hamburger Menu Button */}
                        <motion.button
                            className="lg:hidden z-50 flex flex-col gap-1.5 p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.span
                                className="w-6 h-0.5 bg-white rounded-full"
                                animate={{
                                    rotate: mobileMenuOpen ? 45 : 0,
                                    y: mobileMenuOpen ? 8 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-6 h-0.5 bg-white rounded-full"
                                animate={{
                                    opacity: mobileMenuOpen ? 0 : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-6 h-0.5 bg-white rounded-full"
                                animate={{
                                    rotate: mobileMenuOpen ? -45 : 0,
                                    y: mobileMenuOpen ? -8 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>

                        {/* Spacer for layout balance on desktop */}
                        <div className="hidden lg:block w-48"></div>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}

            {/* Mobile Menu Slide-in */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white/85 backdrop-blur-md z-50 lg:hidden shadow-2xl"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 200
                            }}
                        >
                            <div className="flex flex-col h-full pt-24 px-8">
                                <motion.ul
                                    className="flex flex-col gap-6"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={{
                                        open: {
                                            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                        },
                                        closed: {
                                            transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                        }
                                    }}
                                >
                                    {navItems.map((item) => (
                                        <motion.li
                                            key={item.href}
                                            variants={{
                                                open: {
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: {
                                                        y: { stiffness: 1000, velocity: -100 }
                                                    }
                                                },
                                                closed: {
                                                    y: 50,
                                                    opacity: 0,
                                                    transition: {
                                                        y: { stiffness: 1000 }
                                                    }
                                                }
                                            }}
                                        >
                                            <a
                                                href={item.href}
                                                className="text-black/70 text-2xl font-medium hover:text-black/30 transition-colors block py-3 border-b border-black/10"
                                                onClick={handleLinkClick}
                                            >
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Navbar;