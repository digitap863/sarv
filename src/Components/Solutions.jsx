import { motion } from 'framer-motion';
import { useState } from 'react';

const solu1 = '/images/solu1.png';
const solu2 = '/images/solu2.png';
const solu3 = '/images/solu3.png';
const solu4 = '/images/solu4.png';
const soluexpand1 = '/images/soluexpand1.png';
const soluexpand2 = '/images/soluexpand2.png';
const soluexpand3 = '/images/soluexpand3.png';
const soluexpand4 = '/images/soluexpand4.png';
const darkcloud = '/images/darkcloud.png';

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

const solutions = [
    {
        id: 1,
        title: 'ESG',
        collapsedImage: solu1,
        expandedImage: soluexpand1,
        heading: 'Environmental, Social & Governance (ESG)',
        subtitle: 'Transparency, accountability, and responsible governance.',
        points: [
            'ESG Reporting And Disclosure',
            'ESG Software Implementation',
            'Assurance Auditing And Implementation',
            'Sustainability Performance Tracking'
        ]
    },
    {
        id: 2,
        title: 'GHG',
        collapsedImage: solu2,
        expandedImage: soluexpand2,
        heading: 'Greenhouse Gas (GHG) Emissions & Climate Impact',
        subtitle: 'Measurement → Reduction → Responsibility',
        points: [
            'CO2 green house gas Accounting',
            'Scope 1, 2 & 3 emission analysis',
            'emission reduction strategies',
            'Climate impact studies & reporting'
        ]
    },
    {
        id: 3,
        title: ' Services & Regulatory ',
        collapsedImage: solu3,
        expandedImage: soluexpand3,
        heading: 'Advisory Services & Regulatory Requirements ',
        subtitle: 'Mandatory environmental compliance for large industries.',
        points: [
            'Government - mandatory  environmental regulations',
            'Environment impact assessment',
            'Policy guidance & compliance audits ',
            'Risk  identification &  migration'
        ]
    },
    {
        id: 4,
        title: 'Technologies & Software',
        collapsedImage: solu4,
        expandedImage: soluexpand4,
        heading: 'Environmental Technologies & Software Solutions',
        subtitle: 'Data-driven sustainability.',
        points: [
            'Sustainability  software  platforms',
            'Water quality analysis and monitoring',
            'Soil quality assessment',
            'Air quality analysis and reporting & reporting'
        ]
    }
];

export default function Solutions() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <style>{cloudAnimation}</style>
            <section className="relative w-full py-20 px-6 bg-white overflow-hidden">

                <img src={darkcloud} alt="" className="hidden lg:block absolute top-6 -left-[13%] w-auto h-[60vh] " style={{ animation: 'floatCloud 80s linear infinite', }} />
                <img src={darkcloud} alt="" className="hidden lg:block absolute bottom-6 -left-[13%] w-auto h-[60vh] " style={{ animation: 'floatCloud 80s linear infinite', animationDelay: '20s' }} />

                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <p className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
                        SUPPORTING THE AIM
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 z-10">
                        CORE <span className="text-green-700">SERVICES</span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed z-10">
                        Comprehensive <span className="text-green-700 font-semibold">Environmental Consulting</span> Designed To Guide Organizations Toward Sustainable Practices And Regulatory Compliance.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
                    {solutions.map((solution) => {
                        const isHovered = hoveredId === solution.id;
                        const isOtherHovered = hoveredId !== null && hoveredId !== solution.id;

                        return (
                            <motion.div
                                key={solution.id}
                                className="relative rounded-3xl overflow-hidden cursor-pointer"
                                onMouseEnter={() => setHoveredId(solution.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                animate={{
                                    flex: isHovered ? '2' : '1',
                                    opacity: isOtherHovered ? 1 : 1,
                                    scale: isOtherHovered ? 0.95 : 1,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                                style={{
                                    minHeight: '500px',
                                    willChange: 'flex, transform, opacity'
                                }}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0" style={{ willChange: 'transform' }}>
                                    {/* Collapsed Image */}
                                    <motion.img
                                        src={solution.collapsedImage}
                                        alt={solution.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        animate={{
                                            opacity: isHovered ? 0 : 1,
                                            scale: isHovered ? 1.05 : 1,
                                        }}
                                        transition={{ 
                                            duration: 0.6,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        style={{ willChange: 'opacity, transform' }}
                                    />
                                    {/* Expanded Image */}
                                    <motion.img
                                        src={solution.expandedImage}
                                        alt={solution.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            scale: isHovered ? 1.05 : 1,
                                        }}
                                        transition={{ 
                                            duration: 0.6,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        style={{ willChange: 'opacity, transform' }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-between p-6 md:p-5">
                                    <motion.div
                                        animate={{ opacity: isHovered ? 0 : 1 }}
                                        transition={{ 
                                            duration: 0.4,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        className="w-1 h-16 bg-white/50 absolute top-[0%] left-1/2 transform -translate-x-[50%]"
                                        style={{ willChange: 'opacity' }}
                                    />
                                    
                                    {/* Vertical Title (Collapsed State) */}
                                    <motion.div
                                        className="absolute top-[16%] left-1/2 transform -translate-x-[50%]"
                                        animate={{
                                            opacity: isHovered ? 0 : 1,
                                            x: isHovered ? -20 : 0,
                                        }}
                                        transition={{ 
                                            duration: 0.4,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        style={{ willChange: 'opacity, transform' }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-white text-2xl font-medium writing-mode-vertical transform">
                                                {solution.title}
                                            </h3>
                                        </div>
                                    </motion.div>

                                    {/* Expanded Content */}
                                    <motion.div
                                        className="flex flex-col justify-end h-full"
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            x: isHovered ? 0 : -30,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: isHovered ? 0.1 : 0,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        style={{ willChange: 'opacity, transform' }}
                                    >
                                        <div>
                                            <h3 className="text-white text-2xl md:text-2xl font-semibold mb-3 leading-tight">
                                                {solution.heading}
                                            </h3>
                                            <p className="text-white/90 text-sm md:text-base mb-6">
                                                {solution.subtitle}
                                            </p>
                                            <ul className="space-y-1">
                                                {solution.points.map((point, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="text-white text-sm md:text-base flex items-start gap-2"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{
                                                            opacity: isHovered ? 1 : 0,
                                                            x: isHovered ? 0 : -10,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                            delay: isHovered ? 0.2 + index * 0.1 : 0,
                                                            ease: [0.25, 0.1, 0.25, 1]
                                                        }}
                                                        style={{ willChange: 'opacity, transform' }}
                                                    >
                                                        <span className="text-green-400 mt-1">•</span>
                                                        <span>{point}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* Number (Always Visible) */}
                                    <motion.div
                                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                                        animate={{ opacity: isHovered ? 0 : 1 }}
                                        transition={{ 
                                            duration: 0.4,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                        style={{ willChange: 'opacity' }}
                                    >
                                        <span className="text-white text-6xl md:text-8xl font-bold opacity-80" style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>
                                            0{solution.id}
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <style jsx>{`
                .writing-mode-vertical {
                    writing-mode: vertical-rl;
                }
            `}</style>
            </section>
        </>
    );
}