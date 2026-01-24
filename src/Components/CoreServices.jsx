// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// const cloud1 = '/images/cloud1.png';
// const cloud2 = '/images/cloud2.png';
// const core = '/images/core.png';
// const coree = '/images/coree.png';
// const dot = '/images/dot.png';
// const kol1 = '/images/kol1.png';
// const kol2 = '/images/kol2.png';
// const kol3 = '/images/kol3.png';
// const kol4 = '/images/kol4.png';

// // Add CSS animation for clouds
// const cloudAnimation = `
//   @keyframes floatCloud {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(100vw);
//     }
//   }
// `;

// // Animation variants for service cards
// const cardContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.8,
//             delayChildren: 0.2
//         }
//     }
// };

// const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: 0.5,
//             ease: "easeOut"
//         }
//     }
// };

// export default function CoreServices() {
//     // Refs for each service card
//     const card1Ref = useRef(null);
//     const card2Ref = useRef(null);
//     const card3Ref = useRef(null);
//     const card4Ref = useRef(null);

//     // useInView hooks for each card
//     const card1InView = useInView(card1Ref, { once: true, amount: 0.3 });
//     const card2InView = useInView(card2Ref, { once: true, amount: 0.3 });
//     const card3InView = useInView(card3Ref, { once: true, amount: 0.3 });
//     const card4InView = useInView(card4Ref, { once: true, amount: 0.3 });

//     return (
//         <>
//             <style>{cloudAnimation}</style>
//             <section className="relative w-full overflow-hidden min-h-[1100px]" id="solutions">
//                 {/* white blur in the top */}
//                 <div className="absolute -top-5 left-0 w-full h-20 bg-white blur z-10"></div>
//                 <div className="absolute -top-5 -left-10 w-20 h-20 bg-white blur z-10"></div>
//                 <div className="absolute -top-5 -right-0 w-20 h-20 bg-white blur z-10"></div>

//                 {/* white blur in the bottom */}
//                 <div className="absolute -bottom-5 left-0 w-full h-20 bg-white blur z-10"></div>
//                 <div className="absolute -bottom-5 -left-10 w-20 h-20 bg-white blur z-10"></div>
//                 <div className="absolute -bottom-5 -right-0 w-20 h-20 bg-white blur z-10"></div>

//                 {/* Background Image - Object Cover */}
//                 <img
//                     src={coree}
//                     alt="Background Pattern"
//                     className="absolute inset-0 w-full h-full object-cover opacity-100"
//                 />

//                 {/* Content */}
//                 <div className="relative z-10 py-20 px-6 lg:pl-20">

//                     <img src={cloud1} alt="" className="absolute -top-10 left-0 w-auto h-[60vh] -z-10" style={{ animation: 'floatCloud 60s linear infinite' }} />
//                     <img src={cloud2} alt="" className="absolute -bottom-36 left-0 w-auto h-[60vh] -z-10" style={{ animation: 'floatCloud 80s linear infinite', animationDelay: '10s' }} />
//                     {/* left side cloud */}
//                     <img src={cloud1} alt="" className="absolute top-56 -left-[13%] w-auto h-[60vh] -z-10" style={{ animation: 'floatCloud 80s linear infinite', animationDelay: '20s' }} />

//                     {/* Header */}
//                     <div className="text-center mb-16 z-10">
//                         <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 z-10">
//                             Services
//                         </div>
//                         <h2 className="text-5xl md:text-6xl font-medium text-gray-900">
//                             Our Core Services
//                         </h2>
//                     </div>

//                     {/* Services Cards Container */}
//                     <div className="max-w-7xl mx-auto relative h-[620px] ">

//                         {/* Center Globe Image - Object Contain */}
//                         <div className="absolute  top-[40%] left-[48%] transform -translate-x-[48%] -translate-y-[40%] max-w-7xl h-auto flex items-center justify-center">
//                             <img
//                                 src={core}
//                                 alt="Core Services Center"
//                                 className="w-full h-full object-cover"
//                             />

//                             {/* Center Learn More Button */}
//                             <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 z-20">
//                                 <button className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl px-8 py-2 text-white border border-white/30 hover:bg-gray-600 transition-colors whitespace-nowrap">
//                                     Learn More
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Service Cards */}
//                         {/* Top Left - ESG & GHG Auditing */}
//                         <motion.div
//                             ref={card1Ref}
//                             className="absolute -top-2 -left-5 w-80"
//                             initial="hidden"
//                             animate={card1InView ? "visible" : "hidden"}
//                             variants={cardContainerVariants}
//                         >
//                             <motion.img src={dot} alt="" className="-right-41 -bottom-15 absolute" variants={itemVariants} />
//                             <motion.img src={kol1} alt="" className="-right-36 -bottom-10 absolute" variants={itemVariants} />
//                             <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
//                                 <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
//                                     ESG & GHG Auditing / Assurance
//                                 </h3>
//                                 <ul className="space-y-2 text-sm text-white/90">
//                                     <li>• Independent assurance (ISAE 3000)</li>
//                                     <li>• GHG statement verification (ISO 14064-3)</li>
//                                     <li>• EMS/OHS/Compliance gaps: ISO 14001, ISO 45001, ISO 37301</li>
//                                 </ul>
//                             </motion.div>
//                         </motion.div>

//                         {/* Top Right - Technology-Driven */}
//                         <motion.div
//                             ref={card2Ref}
//                             className="absolute top-0 right-32 w-80"
//                             initial="hidden"
//                             animate={card2InView ? "visible" : "hidden"}
//                             variants={cardContainerVariants}
//                         >
//                             <motion.img src={dot} alt="" className="-left-41 -bottom-15 absolute" variants={itemVariants} />
//                             <motion.img src={kol2} alt="" className="-left-36 -bottom-10 absolute" variants={itemVariants} />
//                             <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
//                                 <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
//                                     Technology-Driven Sustainability
//                                 </h3>
//                                 <ul className="space-y-2 text-sm text-white/90">
//                                     <li>• SaaS for ESG data capture & reporting</li>
//                                     <li>• Automated carbon accounting & audit trail</li>
//                                     <li>• AI climate-risk analytics & dashboards</li>
//                                 </ul>
//                             </motion.div>
//                         </motion.div>

//                         {/* Bottom Left - GHG Accounting */}
//                         <motion.div
//                             ref={card3Ref}
//                             className="absolute -bottom-20 left-10 w-88"
//                             initial="hidden"
//                             animate={card3InView ? "visible" : "hidden"}
//                             variants={cardContainerVariants}
//                         >
//                             <motion.img src={dot} alt="" className="-right-31 bottom-65 absolute" variants={itemVariants} />
//                             <motion.img src={kol3} alt="" className="-right-26.5 bottom-10 absolute" variants={itemVariants} />
//                             <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
//                                 <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
//                                     GHG Accounting & Carbon Advisory
//                                 </h3>
//                                 <ul className="space-y-2 text-sm text-white/90">
//                                     <li>• GHG inventories (Scopes 1, 2, 3; GHG Protocol)</li>
//                                     <li>• Org. carbon footprints (ISO 14064-1)</li>
//                                     <li>• Product carbon footprints (ISO 14067)</li>
//                                 </ul>
//                             </motion.div>
//                         </motion.div>

//                         {/* Bottom Right - ESG Reporting */}
//                         <motion.div
//                             ref={card4Ref}
//                             className="absolute -bottom-20 right-3 0"
//                             initial="hidden"
//                             animate={card4InView ? "visible" : "hidden"}
//                             variants={cardContainerVariants}
//                         >
//                             <motion.img src={dot} alt="" className="-left-55 bottom-65 absolute" variants={itemVariants} />
//                             <motion.img src={kol4} alt="" className="-left-50.5 bottom-10 absolute" variants={itemVariants} />
//                             <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
//                                 <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
//                                     ESG Reporting & Strategy
//                                 </h3>
//                                 <ul className="space-y-2 text-sm text-white/90">
//                                     <li>• ESG maturity assessments & roadmaps</li>
//                                     <li>• Materiality mapping & stakeholder engagement</li>
//                                     <li>• Alignment: GRI, SASB, TCFD, ISSB, EU CSRD</li>
//                                 </ul>
//                             </motion.div>
//                         </motion.div>


//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }



import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cloud1 = '/images/cloud1.png';
const cloud2 = '/images/cloud2.png';
const core = '/images/core.png';
const coree = '/images/coree.png';
const dot = '/images/dot.png';
const kol1 = '/images/kol1.png';
const kol2 = '/images/kol2.png';
const kol3 = '/images/kol3.png';
const kol4 = '/images/kol4.png';

// Add CSS animation for clouds
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

// Animation variants for service cards
const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Mobile animation variants
const mobileCardVariants = {
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

export default function CoreServices() {
    // Refs for desktop cards
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    // Refs for mobile cards
    const mobileCard1Ref = useRef(null);
    const mobileCard2Ref = useRef(null);
    const mobileCard3Ref = useRef(null);
    const mobileCard4Ref = useRef(null);

    // useInView hooks for desktop cards
    const card1InView = useInView(card1Ref, { once: true, amount: 0.3 });
    const card2InView = useInView(card2Ref, { once: true, amount: 0.3 });
    const card3InView = useInView(card3Ref, { once: true, amount: 0.3 });
    const card4InView = useInView(card4Ref, { once: true, amount: 0.3 });

    // useInView hooks for mobile cards
    const mobileCard1InView = useInView(mobileCard1Ref, { once: true, amount: 0.3 });
    const mobileCard2InView = useInView(mobileCard2Ref, { once: true, amount: 0.3 });
    const mobileCard3InView = useInView(mobileCard3Ref, { once: true, amount: 0.3 });
    const mobileCard4InView = useInView(mobileCard4Ref, { once: true, amount: 0.3 });

    return (
        <>
            <style>{cloudAnimation}</style>
            <section className="relative w-full overflow-hidden min-h-[1100px] lg:min-h-[1100px]" id="solutions">
                {/* white blur in the top */}
                <div className="absolute -top-5 left-0 w-full h-20 bg-white blur z-10"></div>
                <div className="absolute -top-5 -left-10 w-20 h-20 bg-white blur z-10"></div>
                <div className="absolute -top-5 -right-0 w-20 h-20 bg-white blur z-10"></div>

                {/* white blur in the bottom */}
                <div className="absolute -bottom-5 left-0 w-full h-20 bg-white blur z-10"></div>
                <div className="absolute -bottom-5 -left-10 w-20 h-20 bg-white blur z-10"></div>
                <div className="absolute -bottom-5 -right-0 w-20 h-20 bg-white blur z-10"></div>

                {/* Background Image - Object Cover */}
                <img
                    src={coree}
                    alt="Background Pattern"
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                />

                {/* Content */}
                <div className="relative z-10 py-20 px-6 lg:pl-20">

                    {/* Clouds - Hidden on mobile */}
                    <img src={cloud1} alt="" className="hidden lg:block absolute -top-10 left-0 w-auto h-[60vh] -z-10" style={{ animation: 'floatCloud 60s linear infinite' }} />
                    <img src={cloud2} alt="" className="hidden lg:block absolute -bottom-36 left-0 w-auto h-[60vh] -z-10" style={{ animation: 'floatCloud 80s linear infinite', animationDelay: '10s' }} />
                    <img src={cloud1} alt="" className="hidden lg:block absolute top-56 -left-[13%] w-auto h-[60vh] -z-10" style={{ animation: 'floatCloud 80s linear infinite', animationDelay: '20s' }} />

                    {/* Header */}
                    <div className="text-center mb-16 z-10">
                        <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 z-10">
                            Services
                        </div>
                        <h2 className="text-4xl lg:text-5xl md:text-6xl font-medium text-gray-900">
                            Our Core Services
                        </h2>
                    </div>

                    {/* Desktop Layout - Hidden on mobile */}
                    <div className="hidden lg:block max-w-7xl mx-auto relative h-[620px]">
                        {/* Center Globe Image - Object Contain */}
                        <div className="absolute top-[40%] left-[48%] transform -translate-x-[48%] -translate-y-[40%] max-w-7xl h-auto flex items-center justify-center">
                            <img
                                src={core}
                                alt="Core Services Center"
                                className="w-full h-full object-cover"
                            />

                            {/* Center Learn More Button */}
                            <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <button className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl px-8 py-2 text-white border border-white/30 hover:bg-gray-600 transition-colors whitespace-nowrap">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Service Cards - Desktop Only */}
                        {/* Top Left - ESG & GHG Auditing */}
                        <motion.div
                            ref={card1Ref}
                            className="absolute -top-2 -left-5 w-80"
                            initial="hidden"
                            animate={card1InView ? "visible" : "hidden"}
                            variants={cardContainerVariants}
                        >
                            <motion.img src={dot} alt="" className="-right-41 -bottom-15 absolute" variants={itemVariants} />
                            <motion.img src={kol1} alt="" className="-right-36 -bottom-10 absolute" variants={itemVariants} />
                            <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
                                <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                    ESG & GHG Auditing / Assurance
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• Independent assurance (ISAE 3000)</li>
                                    <li>• GHG statement verification (ISO 14064-3)</li>
                                    <li>• EMS/OHS/Compliance gaps: ISO 14001, ISO 45001, ISO 37301</li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Top Right - Technology-Driven */}
                        <motion.div
                            ref={card2Ref}
                            className="absolute top-0 right-32 w-80"
                            initial="hidden"
                            animate={card2InView ? "visible" : "hidden"}
                            variants={cardContainerVariants}
                        >
                            <motion.img src={dot} alt="" className="-left-41 -bottom-15 absolute" variants={itemVariants} />
                            <motion.img src={kol2} alt="" className="-left-36 -bottom-10 absolute" variants={itemVariants} />
                            <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
                                <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                    Technology-Driven Sustainability
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• SaaS for ESG data capture & reporting</li>
                                    <li>• Automated carbon accounting & audit trail</li>
                                    <li>• AI climate-risk analytics & dashboards</li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Bottom Left - GHG Accounting */}
                        <motion.div
                            ref={card3Ref}
                            className="absolute -bottom-20 left-10 w-88"
                            initial="hidden"
                            animate={card3InView ? "visible" : "hidden"}
                            variants={cardContainerVariants}
                        >
                            <motion.img src={dot} alt="" className="-right-31 bottom-65 absolute" variants={itemVariants} />
                            <motion.img src={kol3} alt="" className="-right-26.5 bottom-10 absolute" variants={itemVariants} />
                            <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
                                <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                    GHG Accounting & Carbon Advisory
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• GHG inventories (Scopes 1, 2, 3; GHG Protocol)</li>
                                    <li>• Org. carbon footprints (ISO 14064-1)</li>
                                    <li>• Product carbon footprints (ISO 14067)</li>
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Bottom Right - ESG Reporting */}
                        <motion.div
                            ref={card4Ref}
                            className="absolute -bottom-20 right-3 0"
                            initial="hidden"
                            animate={card4InView ? "visible" : "hidden"}
                            variants={cardContainerVariants}
                        >
                            <motion.img src={dot} alt="" className="-left-55 bottom-65 absolute" variants={itemVariants} />
                            <motion.img src={kol4} alt="" className="-left-50.5 bottom-10 absolute" variants={itemVariants} />
                            <motion.div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30" variants={itemVariants}>
                                <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                    ESG Reporting & Strategy
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• ESG maturity assessments & roadmaps</li>
                                    <li>• Materiality mapping & stakeholder engagement</li>
                                    <li>• Alignment: GRI, SASB, TCFD, ISSB, EU CSRD</li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Mobile Layout - Vertical Stack - Hidden on desktop */}
                    <div className="block lg:hidden flex flex-col gap-8 max-w-md mx-auto">
                        {/* Card 1 - ESG & GHG Auditing */}
                        <motion.div
                            ref={mobileCard1Ref}
                            initial="hidden"
                            animate={mobileCard1InView ? "visible" : "hidden"}
                            variants={mobileCardVariants}
                            className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                ESG & GHG Auditing / Assurance
                            </h3>
                            <ul className="space-y-2 text-sm text-white/90">
                                <li>• Independent assurance (ISAE 3000)</li>
                                <li>• GHG statement verification (ISO 14064-3)</li>
                                <li>• EMS/OHS/Compliance gaps: ISO 14001, ISO 45001, ISO 37301</li>
                            </ul>
                        </motion.div>

                        {/* Card 2 - Technology-Driven */}
                        <motion.div
                            ref={mobileCard2Ref}
                            initial="hidden"
                            animate={mobileCard2InView ? "visible" : "hidden"}
                            variants={mobileCardVariants}
                            className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                Technology-Driven Sustainability
                            </h3>
                            <ul className="space-y-2 text-sm text-white/90">
                                <li>• SaaS for ESG data capture & reporting</li>
                                <li>• Automated carbon accounting & audit trail</li>
                                <li>• AI climate-risk analytics & dashboards</li>
                            </ul>
                        </motion.div>

                        {/* Card 3 - GHG Accounting */}
                        <motion.div
                            ref={mobileCard3Ref}
                            initial="hidden"
                            animate={mobileCard3InView ? "visible" : "hidden"}
                            variants={mobileCardVariants}
                            className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                GHG Accounting & Carbon Advisory
                            </h3>
                            <ul className="space-y-2 text-sm text-white/90">
                                <li>• GHG inventories (Scopes 1, 2, 3; GHG Protocol)</li>
                                <li>• Org. carbon footprints (ISO 14064-1)</li>
                                <li>• Product carbon footprints (ISO 14067)</li>
                            </ul>
                        </motion.div>

                        {/* Card 4 - ESG Reporting */}
                        <motion.div
                            ref={mobileCard4Ref}
                            initial="hidden"
                            animate={mobileCard4InView ? "visible" : "hidden"}
                            variants={mobileCardVariants}
                            className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                                ESG Reporting & Strategy
                            </h3>
                            <ul className="space-y-2 text-sm text-white/90">
                                <li>• ESG maturity assessments & roadmaps</li>
                                <li>• Materiality mapping & stakeholder engagement</li>
                                <li>• Alignment: GRI, SASB, TCFD, ISSB, EU CSRD</li>
                            </ul>
                        </motion.div>

                        {/* Mobile Learn More Button */}
                        <div className="flex justify-center mt-4">
                            <button className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl px-8 py-3 text-white border border-white/30 hover:bg-gray-600 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}