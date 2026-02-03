import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
const cloud1 = '/images/cloud1.png';
const cloud2 = '/images/cloud2.png';

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

const cloudHalfAnimation = `
  @keyframes floatCloudHalf {
    0% {
      transform: translateX(-40%);
    }
    100% {
      transform: translateX(40vw);
    }
  }
`;

const Banner = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure video plays on load
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay was prevented:", error);
            });
        }
    }, []);

    return (
        <>
            <style>{cloudAnimation}</style>
            <style>{cloudHalfAnimation}</style>
            <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center">
                {/* Video Background */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover object-center"
                    >
                        <source src="/videos/heroear.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Dark overlay for better text readability */}
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/85 via-white/60 via-40% to-white/10"></div> */}
                </div>

                <img src={cloud1} alt="" className="hidden lg:block absolute -top-10 left-40 w-auto h-[30vh] z-10" style={{ animation: 'floatCloud 60s linear infinite' }} />
                <img src={cloud2} alt="" className="hidden lg:block absolute -bottom-10 left-20 w-auto h-[30vh] z-10" style={{ animation: 'floatCloud 80s linear infinite' }} />
                <img src={cloud1} alt="" className="hidden lg:block absolute top-56 -left-[13%] w-auto h-[30vh] z-10" style={{ animation: 'floatCloudHalf 80s linear infinite', animationDelay: '2s' }} />

                {/* White Gradient Overlay - Bottom Only */}
                <div
                    className="absolute inset-0 z-[3] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(251,252,251,0) 0%, rgba(251,252,251,0) 80%, rgba(251,252,251,0.5) 90%, rgba(251,252,251,0.8) 95%, #FBFCFB 100%)'
                    }}
                />




                {/* Floating Cloud Decorations */}
                <motion.img
                    src={cloud1}
                    alt="Cloud decoration"
                    className="absolute top-[5%] -left-[5%] w-[400px] opacity-80 z-[2] pointer-events-none blur-[1px] lg:w-[300px] lg:top-[2%] md:w-[200px] md:top-0 md:-left-[20%]"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                        opacity: 0.8,
                        x: 0,
                        y: [0, -15, 0]
                    }}
                    transition={{
                        opacity: { duration: 1.5 },
                        x: { duration: 1.5 },
                        y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />

                <motion.img
                    src="/images/cloud2.png"
                    alt="Cloud decoration"
                    className="absolute top-[15%] -right-[10%] w-[500px] opacity-70 z-[2] pointer-events-none blur-[1px] lg:w-[350px] md:w-[250px] md:top-[10%] md:-right-[20%]"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: 0.7,
                        x: 0,
                        y: [0, 20, 0]
                    }}
                    transition={{
                        opacity: { duration: 1.5, delay: 0.3 },
                        x: { duration: 1.5, delay: 0.3 },
                        y: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }
                    }}
                />

                <motion.img
                    src="/images/cloud1.png"
                    alt="Cloud decoration"
                    className="absolute bottom-[20%] left-[10%] w-[350px] opacity-60 z-[2] pointer-events-none blur-[1px] lg:w-[250px] md:w-[180px] md:bottom-[25%] md:-left-[10%]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 0.6,
                        y: [0, 10, 0]
                    }}
                    transition={{
                        opacity: { duration: 1.5, delay: 0.5 },
                        y: {
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />

                <motion.img
                    src="/images/cloud2.png"
                    alt="Cloud decoration"
                    className="absolute bottom-[10%] right-[5%] w-[300px] opacity-50 z-[2] pointer-events-none blur-[1px] lg:w-[200px] md:w-[150px] md:bottom-[15%] md:-right-[10%]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                        opacity: 0.5,
                        x: 0,
                        y: [0, -12, 0]
                    }}
                    transition={{
                        opacity: { duration: 1.5, delay: 0.7 },
                        x: { duration: 1.5, delay: 0.7 },
                        y: {
                            duration: 9,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[60px] flex items-center lg:px-10 md:px-6 md:pt-[100px] md:items-start sm:px-4 sm:pt-[120px]">
                    <motion.div
                        className="max-w-[600px] md:max-w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Subtitle Badge */}
                        <motion.div
                            className="inline-block bg-white py-2.5 px-6 rounded-full mb-[30px] border-[1px] border-black/20 md:py-1 md:px-[18px] md:mb-5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <span className="text-[#2A652D] text-base font-medium  uppercase md:text-[14px] md:tracking-[1.5px] sm:text-[12px] font-philosopher">
                                ENVIRONMENTAL CONSULTING
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="m-0 mb-10 leading-[1.1] md:mb-[23px] font-philosopher "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <span className="block text-[clamp(48px,8vw,90px)] font-extrabold text-[#1a472a] uppercase tracking-[-2px] font-['Inter','Segoe_UI',sans-serif] md:text-[clamp(48px,16vw,70px)] md:tracking-[-1px] sm:text-[clamp(32px,14vw,50px)] font-philosopher">
                                FOR THE
                            </span>
                            <span className="block text-[clamp(48px,8vw,90px)] font-extrabold text-[#1a472a] uppercase tracking-[-2px] font-['Inter','Segoe_UI',sans-serif] md:text-[clamp(48px,16vw,70px)] md:tracking-[-1px] sm:text-[clamp(32px,14vw,50px)] font-philosopher">
                                NEXT
                            </span>
                            <span className="block text-[clamp(48px,8vw,90px)] font-extrabold text-[#1a472a] uppercase tracking-[-2px] font-['Inter','Segoe_UI',sans-serif] md:text-[clamp(36px,16vw,70px)] md:tracking-[-1px] sm:text-[clamp(32px,14vw,50px)] font-philosopher">
                                GENERATION
                            </span>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            className="text-[#1a472a] text-lg md:text-xl font-medium italic mb-8 md:mb-6 tracking-wide"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            "Driven by Purpose. Growing with Care"
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                        >
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-3 bg-gradient-to-br from-[#205B23] to-[#257C88] text-white py-4 px-14 rounded-xl text-base font-semibold no-underline transition-all duration-300 shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:-translate-y-[3px] hover:shadow-[0_4px_4px_rgba(0,0,0,0.50)] hover:from-[#2d7a50] hover:to-[#3d9a60] group md:py-3.5 md:px-7 md:text-sm cursor-pointer"
                            >
                                <span>Start Your Journey</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[5px]"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 md:bottom-[30px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <motion.div
                        className="w-[30px] h-[50px] border-2 border-[rgba(26,90,60,0.5)] rounded-[20px] flex justify-center pt-2 md:w-6 md:h-10"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-1 h-2.5 bg-gradient-to-br from-[#1a5a3c] to-[#2d7a50] rounded-sm"></div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Banner;
