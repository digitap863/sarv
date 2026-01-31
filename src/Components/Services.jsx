import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Service images - using available images
const serviceImages = {
    service1: '/images/ser1.png',
    service2: '/images/ser2.png',
    service3: '/images/ser3.png',
    service4: '/images/ser4.png',
    service5: '/images/ser5.png',
    service6: '/images/ser6.png',
};

// Services data
const servicesData = [
    {
        id: 1,
        image: serviceImages.service1,
        title: "ESG REPORTING & STRATEGY",
        features: [
            "Materiality Mapping & Stakeholder Engagement",
            "Maturity Assessments & Transformation Roadmaps",
            "ESG Risk Integration (ISO 31000)"
        ]
    },
    {
        id: 2,
        image: serviceImages.service2,
        title: "GHG ACCOUNTING & CARBON ADVISORY",
        features: [
            "GHG Inventories (Scopes 1, 2, 3; GHG Protocol)",
            "Net-Zero Pathways & Decarbonisation Modelling",
            "Offsets, Credits & ISO 14068 (Carbon Neutrality) Alignment"
        ]
    },
    {
        id: 3,
        image: serviceImages.service3,
        title: "TECHNOLOGY-DRIVEN SUSTAINABILITY",
        features: [
            "SaaS Platforms For ESG Data Capture & Reporting",
            "Automation For GHG Accounting & Audit Trails",
            "AI-Enabled Climate Risk Analytics & Dashboards"
        ]
    },
    {
        id: 4,
        image: serviceImages.service4,
        title: "ESG REPORTING & STRATEGY",
        features: [
            "Materiality Mapping & Stakeholder Engagement",
            "Maturity Assessments & Transformation Roadmaps",
            "ESG Risk Integration (ISO 31000)"
        ]
    },
    {
        id: 5,
        image: serviceImages.service5,
        title: "ESG & GHG AUDITING / ASSURANCE",
        features: [
            "Independent Sustainability Assurance (ISAE 3000)",
            "EMS, OHS & Compliance Gap Assessments",
            "EMS, OHS & Compliance Gap Assessments"
        ]
    },
    {
        id: 6,
        image: serviceImages.service6,
        title: "SUSTAINABILITY, ESG & NET-ZERO TRAINING & CAPABILITY BUILDING",
        features: [
            "Board & Executive ESG Awareness Programs",
            "Net-Zero, Climate Risk & GHG Accounting Workshops",
            "Sector-Specific ESG Regulatory Readiness Sessions"
        ]
    }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={cardRef}
            layout
            className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ y: -5 }}
        >
            {/* Service Image */}
            <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9]">
                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-[#1a472a] text-lg md:text-xl font-bold uppercase mb-4 leading-tight tracking-wide">
                    {service.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-grow ">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed pl-6">
                            <span className="text-[#1a472a] mt-1 flex-shrink-0">•</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Explore Button */}
                <motion.button
                    className="inline-flex items-center justify-center gap-2 bg-[#205B23] text-white py-3 px-8 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#2d7a50] w-fit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>Explore</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const [showAll, setShowAll] = useState(false);

    // Show only first 3 services or all based on toggle
    const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative bg-[#FBFCFB] py-20 px-6 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto bg-[#FBFCFB]">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Subtitle */}
                    <motion.p
                        className="text-[#1a472a]  md:text-base uppercase tracking-[3px] mb-3 font-medium"
                        variants={headerVariants}
                    >
                        WHAT WE DO
                    </motion.p>

                    {/* Main Title */}
                    <motion.h2
                        className="text-[#1a472a] text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 tracking-wide font-philosopher"
                        variants={headerVariants}
                    >
                        CORE SERVICES
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-[#205B23] text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
                        variants={headerVariants}
                    >
                        Comprehensive <span className="font-semibold text-[#1a472a]">Environmental Consulting</span> Designed To Guide Organizations Toward Sustainable
                        Practices And Regulatory Compliance.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <AnimatePresence mode="sync">
                        {displayedServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Services Button */}
                <motion.div
                    className="flex justify-end mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex flex-col items-center justify-center gap-0 bg-white border border-[#205B23] text-[#205B23] py-2 px-10 rounded-2xl font-medium transition-all duration-300 hover:border-[#205B23] hover:shadow-[0_4px_20px_rgba(26,71,42,0.15)]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="text-sm">
                            {showAll ? 'Show Less' : 'View all Services'}
                        </span>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-[#1a472a]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </motion.button>
                </motion.div>

                {/* Bottom Divider Line */}
                <motion.div
                    className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-[#1a472a]/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                />
            </div>
        </section>
    );
}