
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Public folder assets - use direct URL paths
const banner1 = '/images/banner1.png';
const banner2 = '/images/banner2.png';
const banner3 = '/images/banner3.png';
const dwnarrw = '/images/dwnarrw.svg';
const plant = '/images/plant.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const mainWrapperRef = useRef(null); // Wrapper for both sections
    const horizontalRef = useRef(null);
    const section2Ref = useRef(null);

    useEffect(() => {
        const wrapper = mainWrapperRef.current;
        const horizontal = horizontalRef.current;
        const section2 = section2Ref.current;

        if (!wrapper || !horizontal || !section2) return;

        const scrollDistance = horizontal.scrollWidth - window.innerWidth;

        // Create one master timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                // 'end' is horizontal distance + the height of the parallax reveal
                end: () => `+=${scrollDistance + window.innerHeight}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        // Step 1: Do the horizontal scroll
        tl.to(horizontal, {
            x: -scrollDistance,
            ease: "none"
        })
            // Step 2: Immediately bring Section 2 up (Parallel Axis Reveal)
            .fromTo(section2,
                { y: "100vh" }, // Start off-screen at the bottom
                { y: "0vh", ease: "none" },
                ">" // Start right after the horizontal scroll finishes
            );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={mainWrapperRef} className="relative overflow-hidden">

            {/* section1 */}
            <div
                className="relative w-full h-screen overflow-hidden z-0"
            >
                {/* Down Arrow - Fixed Position */}
                <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-0">
                    <img src={dwnarrw} alt="Scroll Down" className="w-9 h-11 transition-all duration-300 cursor-pointer hover:translate-y-2" />
                    <p className="text-white font-normal text-sm">Click to see Services</p>
                </div>

                {/* Horizontal scrolling container */}
                <div
                    ref={horizontalRef}
                    className="flex flex-row h-full w-[300vw]"
                >
                    {/* Image 1 - Text at bottom-right */}
                    <div className="relative w-screen h-screen flex-shrink-0">
                        <img
                            src={banner1}
                            alt="Banner 1"
                            className="w-full h-full object-cover bottom-20"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Plant Card - Bottom Left */}
                        <div className="absolute bottom-16 left-20 w-80">
                            <div className="bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30">
                                <div className="w-10 h-10 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                                    <img src={plant} alt="Plant Icon" className="w-10 h-10" />
                                </div>
                                <p className="text-white text-sm leading-relaxed font-inter font-[300]">
                                    Long before forests rise and waters flow, healthy soil builds the foundation—holding nutrients, life, and the promise of sustainability.
                                </p>
                            </div>
                        </div>

                        {/* Text Content - Bottom Right */}
                        <div className="absolute bottom-16 right-20 text-right max-w-2xl px-4">
                            <h2 className="text-5xl md:text-6xl font-medium text-white mb-6 leading- font-inter">
                                Healthy soil as the <br /> Supportive Base
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 leading-">
                                Everything strong starts below the surface. Healthy soil supports life silently, creating the conditions for growth, resilience, and renewal.
                            </p>
                        </div>
                    </div>

                    {/* Image 2 - Text at right side, slightly above bottom */}
                    <div className="relative w-screen h-screen flex-shrink-0">
                        <img
                            src={banner2}
                            alt="Banner 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Keyword Tags - Bottom Left */}
                        <div className="absolute bottom-16 left-20 flex flex-wrap gap-3 max-w-md">
                            <div className="bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full px-6 py-3 border border-white/30 flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-white text-sm font-inter font-[300]">ecosystem balance</span>
                            </div>
                            <div className="bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full px-6 py-3 border border-white/30 flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-white text-sm font-inter font-[300]">biodiversity</span>
                            </div>
                            <div className="bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full px-6 py-3 border border-white/30 flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-white text-sm font-inter font-[300]">biological integrity</span>
                            </div>
                            <div className="bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full px-6 py-3 border border-white/30 flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-white text-sm font-inter font-[300]">natural equilibrium</span>
                            </div>
                        </div>

                        {/* Text Content - Right Side, Above Bottom */}
                        <div className="absolute bottom-32 right-20 text-right max-w-2xl px-4">
                            <h2 className="text-5xl md:text-6xl font-medium text-white mb-6 font-inter">
                                Technical analysis <br /> of purity
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 leading-">
                                Purity is examined across layers, from surface to depth, revealing how clean systems sustain structure, life, and equilibrium.
                            </p>
                        </div>
                    </div>

                    {/* Image 3 - Text at right side, lower-middle area */}
                    <div className="relative w-screen h-screen flex-shrink-0">
                        <img
                            src={banner3}
                            alt="Banner 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Text Items with Green Dots - Bottom Left */}
                        <div className="absolute bottom-24 left-20 flex flex-col gap-6 max-w-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-[#0F9200] rounded-full"></div>
                                </div>
                                <p className="text-white text-lg font-inter font-[300] leading-tight">
                                    Balanced systems sustain<br /> living ecosystems.
                                </p>
                            </div>

                            <div className="flex items-start gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                        <div className="w-3 h-3 bg-[#0F9200] rounded-full"></div>
                                    </div>
                                    <p className="text-white text-lg font-inter font-[300] leading-tight">
                                        Life thrives through <br />natural balance.
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[2px] rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                        <div className="w-3 h-3 bg-[#0F9200] rounded-full"></div>
                                    </div>
                                    <p className="text-white text-lg font-inter font-[300] leading-tight">
                                        Growth emerges from <br />ecological harmony.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Text Content - Right Side, Lower-Middle */}
                        <div className="absolute top-[27%] right-20 text-right max-w-2xl px-4">
                            <h2 className="text-5xl md:text-6xl font-medium text-white mb-6 leading- font-inter">
                                Life and growth <br /> through natural balance
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 leading-">
                                Natural balance sustains life, allowing ecosystems to grow through the interconnected rhythm of land, water, and biodiversity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 2*/}
            <section ref={section2Ref} className="absolute top-0 left-0 w-full min-h-screen bg-white py-20 px-6 z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] flex flex-col  items-center   justify-center">
                <div className="max-w-7xl mx-auto text-center   ">
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                            Who We Are
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-[2.8vw] font-normal leading-tight mb-8 text-gray-900">
                        SarvSustain empowers organizations to operate responsibly, <br />
                        transparently, and sustainably. From our base in Dubai, we combine <br />
                        global best practice with regional insight to turn ESG and GHG <br />
                        ambitions into measurable results.
                    </h1>

                    {/* Learn More Button */}
                    <button className="border-2 border-green-600 text-green-600 px-10 py-2 rounded-full font-medium hover:bg-green-50 transition-colors">
                        Learn More
                    </button>
                </div>
            </section>


        </div>
    );
};

export default Banner;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

