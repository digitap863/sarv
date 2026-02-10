import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const aboutImage = '/images/about.png';
const aboutmob = '/images/aboutmob.png';
const cloud1 = '/images/clou1.png';
const cloud2 = '/images/clou2.png';
const aboo = '/images/aboo.png';
const ico1 = '/images/ico1.png';
const ico2 = '/images/ico2.png';
const ico3 = '/images/ico3.png';
const ico4 = '/images/ico4.png';
const ico5 = '/images/ico5.png';


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


const cloudAnimation2 = `
  @keyframes floatCloud2 {
    0% {
      transform: translateX(-40%);
    }
    100% {
      transform: translateX(40vw);
    }
  }
`;



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (

    <>
      <style>{cloudAnimation}</style>
      <style>{cloudAnimation2}</style>

      <section
        ref={sectionRef}
        id="about"
        className="relative h-auto md:py-20 py-12 md:px-6 px-3 overflow-hidden bg-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={aboutImage}
            alt="About background"
            className="w-full h-full object-cover object-center md:block hidden"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
          {/* White overlay for text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60"></div> */}
        </div>

        {/* Cloud Decorations */}

        <img src={cloud1} alt="" className="hidden lg:block absolute top-6 left-[13%] w-auto h-[30vh] " style={{ animation: 'floatCloud 80s linear infinite', }} />
        <img src={cloud2} alt="" className="hidden lg:block absolute bottom-6 left-[0%] w-auto h-[30vh] " style={{ animation: 'floatCloud 80s linear infinite', animationDelay: '0s' }} />
        <img src={cloud1} alt="" className="hidden lg:block absolute top-[45%] left-[0%] w-auto h-[30vh] " style={{ animation: 'floatCloud2 80s linear infinite', animationDelay: '15s' }} />




        <div className="max-w-7xl mx-auto relative ">
          <div className=" gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className="z-10"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Main Heading */}

              <h1 className="text-[#1a472a] text-xl md:text-2xl  mb-3 leading-tight ">OUR PURPOSE</h1>
              <motion.h2
                className="text-[#1a472a] text-2xl md:text-4xl lg:text-5xl font-bold uppercase italic md:mb-10 mb-4 leading-tight font-philosopher"
                variants={itemVariants}
              >
                WE BELIEVE  IN Business DRIVEN BY PURPOSE <br className='md:block hidden' />  AND GROWING WITH CARE
              </motion.h2>

              {/* Description Points */}
              <motion.div className="md:space-y-2 space-y-3 md:mb-12 mb-8 md:pl-3 md:pt-3 relative " variants={itemVariants}>



                <motion.p
                  className="text-[#205B23] text-base md:text-lg md:leading-relaxed tracking-wide capitalize "
                  variants={itemVariants}
                >
                  Frameworks that emphasise long-term, responsible stewardship of both nature and <br /> society by choices of today
                </motion.p>
                <motion.p
                  className="text-[#205B23] text-base md:text-lg md:leading-relaxed tracking-wide "
                  variants={itemVariants}
                >
                  Workplaces And Organisations Rooted In Fairness, Diversity, And Human Well-Being.
                </motion.p>
                <motion.p
                  className="text-[#205B23] text-base md:text-lg md:leading-relaxed tracking-wide "
                  variants={itemVariants}
                >
                  Governance That Balances Risk, Responsibility And Long Term Value Creation.
                </motion.p>

              </motion.div>

              {/* aboutmob image in the mobile view only */}
              <div className="md:hidden block relative bg-white">
                <motion.img
                  src={aboutmob}
                  alt="About background"
                  className="w-full h-auto object-cover object-center"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                />
                {/* Top blend - 1px overlap to hide seam */}
                <div className="absolute -top-[1px] left-0 right-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
                {/* Bottom blend - 1px overlap */}
                <div className="absolute -bottom-[1px] left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
                {/* Left blend */}
                <div className="absolute top-0 bottom-0 -left-[1px] w-10 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                {/* Right blend */}
                <div className="absolute top-0 bottom-0 -right-[1px] w-10 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
              </div>

              {/* Mission Statement */}
              <motion.div
                className="md:mt-16 mt-0"
                variants={itemVariants}
              >
                {/* Mission Heading */}
                <h3 className="text-[#1a472a] text-2xl md:text-3xl font-bold uppercase mb-4 font-philosopher">
                  OUR MISSION
                </h3>

                {/* Mission Subtitle */}
                <p className="text-[#1a472a] text-base md:text-lg uppercase tracking-wide mb-8 font-medium">
                  OUR MISSION IS TO HELP ORGANIZATIONS TO<br />
                  DEVELOP AND IMPLEMENT—
                </p>

                {/* Mission Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 max-w-4xl md:pl-0 pl-4">
                  {/* Item 1 - Strategic Planning */}
                  <motion.div
                    className="flex items-center gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#205B23]/20 flex items-center justify-center flex-shrink-0">
                      <img src={ico1} alt="" className='w-auto h-auto' />
                    </div>
                    <span className="text-[#205B23] text-sm md:text-base font-medium">Strategic Planning & Integration</span>
                  </motion.div>

                  {/* Item 2 - Sustainability Performance */}
                  <motion.div
                    className="flex items-center gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#205B23]/20 flex items-center justify-center flex-shrink-0">
                      <img src={ico2} alt="" className='w-auto h-auto' />
                    </div>
                    <span className="text-[#1a472a] text-sm md:text-base font-medium">Sustainability Performance Improvement</span>
                  </motion.div>

                  {/* Item 3 - Regulatory Compliance */}
                  <motion.div
                    className="flex items-center gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#205B23]/20 flex items-center justify-center flex-shrink-0">
                      <img src={ico3} alt="" className='w-auto h-auto' />
                    </div>
                    <span className="text-[#1a472a] text-sm md:text-base font-medium">Regulatory Compliance & Reporting</span>
                  </motion.div>

                  {/* Item 4 - Enhanced Stakeholder Value */}
                  <motion.div
                    className="flex items-center gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#205B23]/20 flex items-center justify-center flex-shrink-0">
                      <img src={ico4} alt="" className='w-auto h-auto' />
                    </div>
                    <span className="text-[#1a472a] text-sm md:text-base font-medium">Enhanced Stakeholder Value</span>
                  </motion.div>

                  {/* Item 5 - Risk Mitigation */}
                  <motion.div
                    className="flex items-center gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#205B23]/20 flex items-center justify-center flex-shrink-0">
                      <img src={ico5} alt="" className='w-auto h-auto' />
                    </div>
                    <span className="text-[#1a472a] text-sm md:text-base font-medium">Risk Assessment & Mitigation</span>
                  </motion.div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
