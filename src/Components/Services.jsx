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
        title: "ESG REPORTING & STRATEGY DEVELOPMENT",
        features: [
            "Materiality Mapping & Stakeholder Engagement",
            "Compliance Assessments & Transformation Roadmaps",
            "ESG Risk Management And Target Setting"
        ]
    },
    {
        id: 2,
        image: serviceImages.service2,
        title: "GHG ACCOUNTING & CARBON ADVISORY",
        features: [
            "GHG Inventories (Scopes 1, 2, 3; GHG Protocol)",
            "Organisational And Product Carbon Footprints (ISO 14064, ISO 14067)",
            "Net-Zero Pathways & Decarbonisation Modelling"
        ]
    },
    {
        id: 3,
        image: serviceImages.service3,
        title: "AIR & WATER QUALITY MONITORING & REGULATORY ADVISORY",
        features: [
            "Ambient Air Quality Monitoring (ISO 4225, ISO 16000 Series)",
            "Industrial Emissions & Effluent Compliance Assessments",
            "UAE Environmental Laws & EU Air / Water Directives Alignment"
        ]
    },
    {
        id: 4,
        image: serviceImages.service4,
        title: "TECHNOLOGY-DRIVEN SUSTAINABILITY",
        features: [
            "SaaS Platforms For ESG Data Capture & Reporting",
            "Automation For GHG Accounting & Audit Trails",
            "AI-Enabled Climate Risk Analytics & Dashboards"
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
            "Net-Zero, Climate Risk & GHG Accounting Workshops For Organisations And Educational Institutions",
            "Sector-Specific ESG Regulatory Readiness Sessions For Organisations"
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
const ServiceCard = ({ service, index, onExplore }) => {
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
                    onClick={() => onExplore(service.title)}
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
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    // Show only first 3 services or all based on toggle
    const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

    // Handle explore button click
    const handleExplore = (serviceTitle) => {
        setSelectedService(serviceTitle);
        setModalOpen(true);
    };

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
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                onExplore={handleExplore}
                            />
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

                            {/* Floating particles */}
                            <motion.div
                                className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full"
                                animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute top-20 right-16 w-3 h-3 bg-white/30 rounded-full"
                                animate={{ y: [10, -10, 10], opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-16 right-10 w-2 h-2 bg-white/50 rounded-full"
                                animate={{ y: [-5, 15, -5], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            />

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

                            {/* Rocket Icon */}
                            <motion.div
                                className="mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.div
                                    className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    </svg>
                                </motion.div>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="text-white text-3xl md:text-4xl font-bold mb-3 font-philosopher"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Coming Soon! 🚀
                            </motion.h3>

                            {/* Service Name */}
                            <motion.p
                                className="text-white/80 text-sm uppercase tracking-wider mb-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {selectedService}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                className="text-white/90 text-base mb-8 leading-relaxed"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                We're working hard to bring you this service. Stay tuned for something amazing!
                            </motion.p>

                            {/* Contact Info */}
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <p className="text-white/70 text-sm mb-1">Want to know more?</p>
                                <a
                                    href="mailto:info@sarvsustain.com"
                                    className="text-white font-medium hover:text-white/80 transition-colors"
                                >
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
                                Got it!
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}