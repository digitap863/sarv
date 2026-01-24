import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const banner1 = '/images/banner1.png';
const banner2 = '/images/banner2.png';
const banner3 = '/images/banner3.png';
const dwnarrw = '/images/dwnarrw.svg';
const plant = '/images/plant.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.9,
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
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const pointsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const Banner = () => {
    const mainWrapperRef = useRef(null);
    const horizontalRef = useRef(null);

    // Refs for each slide to detect when in view
    const slide1Ref = useRef(null);
    const slide2Ref = useRef(null);
    const slide3Ref = useRef(null);

    // useInView hooks for each slide
    const slide1InView = useInView(slide1Ref, { once: true, amount: 0.5 });
    const slide2InView = useInView(slide2Ref, { once: true, amount: 0.3, margin: "0px -50% 0px 0px" });
    const slide3InView = useInView(slide3Ref, { once: true, amount: 0.3, margin: "0px -50% 0px 0px" });

    useEffect(() => {
        const wrapper = mainWrapperRef.current;
        const horizontal = horizontalRef.current;

        if (!wrapper || !horizontal) return;

        const scrollDistance = horizontal.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: () => `+=${scrollDistance + 1000}`,
                pin: true,
                scrub: 4,
                invalidateOnRefresh: true,
                markers: false,
            }
        });

        tl.to(horizontal, {
            x: -scrollDistance,
            ease: "none"
        });

        return () => {
            if (tl && tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            if (tl) {
                tl.kill();
            }
        };
    }, []);



    return (
        <div ref={mainWrapperRef} className="relative overflow-hidden">
            {/* section1 */}
            <div className="relative w-full h-screen overflow-hidden z-0">
                {/* Down Arrow - Fixed Position */}
                <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-0" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}>
                    <img src={dwnarrw} alt="Scroll Down" className="w-9 h-11 transition-all duration-300 cursor-pointer hover:translate-y-2" />
                    <p className="text-white font-normal text-sm">Click to see Services</p>
                </div>

                {/* Horizontal scrolling container */}
                <div ref={horizontalRef} className="flex flex-row h-full w-[300vw]">
                    {/* Slide 1 */}
                    <div ref={slide1Ref} className="relative w-screen h-screen flex-shrink-0">
                        <img
                            src={banner1}
                            alt="Banner 1"
                            className="w-full h-full object-cover bottom-20"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Plant Card - Bottom Left */}
                        <motion.div
                            className="absolute bottom-8 left-4 w-72 md:bottom-16 md:left-20 md:w-80"
                            initial="hidden"
                            animate={slide1InView ? "visible" : "hidden"}
                            variants={cardVariants}
                        >
                            <div className="bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-[1.5px] rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/30">
                                <div className="w-10 h-10 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                                    <img src={plant} alt="Plant Icon" className="w-10 h-10" />
                                </div>
                                <p className="text-white text-xs md:text-sm leading-relaxed font-inter font-[300]">
                                    Long before forests rise and waters flow, healthy soil builds the foundation—holding nutrients, life, and the promise of sustainability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Text Content - Bottom Right */}
                        <motion.div
                            className="absolute md:bottom-8 bottom-[35%] right-4 text-right max-w-xs md:max-w-2xl px-2 md:bottom-16 md:right-20 md:px-4"
                            initial="hidden"
                            animate={slide1InView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-2xl md:text-5xl lg:text-6xl font-medium text-white mb-3 md:mb-6 leading-tight font-inter"
                                variants={itemVariants}
                            >
                                Healthy soil as the <br /> Supportive Base
                            </motion.h2>
                            <motion.p
                                className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed"
                                variants={itemVariants}
                            >
                                Everything strong starts below the surface. Healthy soil supports life silently, creating the conditions for growth, resilience, and renewal.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Slide 2 */}
                    <div ref={slide2Ref} className="relative w-screen h-screen flex-shrink-0">
                        <img
                            src={banner2}
                            alt="Banner 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Keyword Tags - Bottom Left */}
                        <motion.div
                            className="absolute bottom-8 left-4 flex flex-wrap gap-2 max-w-xs md:bottom-16 md:left-20 md:gap-3 md:max-w-md"
                            initial="hidden"
                            animate={slide2InView ? "visible" : "hidden"}
                            variants={tagContainerVariants}
                        >
                            {['ecosystem balance', 'biodiversity', 'biological integrity', 'natural equilibrium'].map((tag, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/30 flex items-center gap-2"
                                    variants={tagVariants}
                                >
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-white text-xs md:text-sm font-inter font-[300]">{tag}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Text Content - Right Side */}
                        <motion.div
                            className="absolute md:bottom-16 bottom-[35%] right-4 text-right max-w-xs md:max-w-2xl px-2 md:bottom-32 md:right-20 md:px-4"
                            initial="hidden"
                            animate={slide2InView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-2xl md:text-5xl lg:text-6xl font-medium text-white mb-3 md:mb-6 font-inter"
                                variants={itemVariants}
                            >
                                Technical analysis <br /> of purity
                            </motion.h2>
                            <motion.p
                                className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed"
                                variants={itemVariants}
                            >
                                Purity is examined across layers, from surface to depth, revealing how clean systems sustain structure, life, and equilibrium.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Slide 3 */}
                    <div ref={slide3Ref} className="relative w-screen h-screen flex-shrink-0">
                        <img
                            src={banner3}
                            alt="Banner 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Text Items with Green Dots - Bottom Left */}
                        <motion.div
                            className="absolute bottom-12 left-4 flex flex-col gap-4 max-w-xs md:bottom-24 md:left-20 md:gap-6 md:max-w-2xl"
                            initial="hidden"
                            animate={slide3InView ? "visible" : "hidden"}
                            variants={pointsContainerVariants}
                        >
                            <motion.div className="flex items-start gap-4" variants={cardVariants}>
                                <div className="md:w-12 md:h-12 w-8 h-8 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                    <div className="md:w-3 md:h-3 w-2 h-2 bg-[#0F9200] rounded-full"></div>
                                </div>
                                <p className="text-white text-sm md:text-lg font-inter font-[300] leading-tight">
                                    Balanced systems sustain<br /> living ecosystems.
                                </p>
                            </motion.div>

                            <div className="flex items-start gap-4 md:gap-8">
                                <motion.div className="flex items-start gap-4" variants={cardVariants}>
                                    <div className="md:w-12 h-12 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                        <div className="md:w-3 md:h-3 w-2 h-2 bg-[#0F9200] rounded-full"></div>
                                    </div>
                                    <p className="text-white text-sm md:text-lg font-inter font-[300] leading-tight">
                                        Life thrives through <br />natural balance.
                                    </p>
                                </motion.div>

                                <motion.div className="flex items-start gap-4" variants={cardVariants}>
                                    <div className="md:w-12 h-12 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                        <div className="md:w-3 md:h-3 w-2 h-2 bg-[#0F9200] rounded-full"></div>
                                    </div>
                                    <p className="text-white text-sm md:text-lg font-inter font-[300] leading-tight">
                                        Growth emerges from <br />ecological harmony.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text Content - Right Side */}
                        <motion.div
                            className="absolute top-[35%] right-4 text-right max-w-xs md:max-w-2xl px-2 md:top-[27%] md:right-20 md:px-4"
                            initial="hidden"
                            animate={slide3InView ? "visible" : "hidden"}
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-2xl md:text-5xl lg:text-6xl font-medium text-white mb-3 md:mb-6 leading-tight font-inter"
                                variants={itemVariants}
                            >
                                Life and growth <br /> through natural balance
                            </motion.h2>
                            <motion.p
                                className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed"
                                variants={itemVariants}
                            >
                                Natural balance sustains life, allowing ecosystems to grow through the interconnected rhythm of land, water, and biodiversity.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;