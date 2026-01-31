import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const aboutImage = '/images/about.png';
const cloud1 = '/images/cloud1.png';
const cloud2 = '/images/cloud2.png';
const aboo = '/images/aboo.png';

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
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
    >
      {/* Cloud Decorations */}
      <motion.img
        src={cloud1}
        alt=""
        className="absolute top-10 left-0 w-[200px] opacity-60 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img
        src={cloud2}
        alt=""
        className="absolute top-20 right-0 w-[250px] opacity-50 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 0.5, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

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
            <motion.h2
              className="text-[#1a472a] text-3xl md:text-4xl lg:text-5xl font-bold italic mb-10 leading-tight font-philosopher"
              variants={itemVariants}
            >
              WE BELIEVE THE FUTURE DESERVES BETTER.
            </motion.h2>

            {/* Description Points */}
            <motion.div className="space-y-2 mb-12 pl-3 pt-3 relative " variants={itemVariants}>



              <motion.p
                className="text-[#205B23] text-base md:text-lg leading-relaxed tracking-wide "
                variants={itemVariants}
              >
                Clean Air, Safe Water, Healthy Soil And A Climate Protected By Choices Of Today.
              </motion.p>
              <motion.p
                className="text-[#205B23] text-base md:text-lg leading-relaxed tracking-wide "
                variants={itemVariants}
              >
                Workplaces And Societies Rooted In Fairness, Diversity, And Human Well-Being.
              </motion.p>
              <motion.p
                className="text-[#205B23] text-base md:text-lg leading-relaxed tracking-wide "
                variants={itemVariants}
              >
                Governance That Balances Risk, Responsibility And Long Term Value Creation.
              </motion.p>

              <img src={aboo} alt="" className="auto absolute -top-8 left-0" />
              <div className="absolute -bottom-12 left-0 w-[40%] h-10 bg-white blur"></div>


            </motion.div>

            {/* Mission Statement */}
            <motion.div
              className="mt-16 lg:pl-48"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl font-base leading-snug  bg-linear-to-r from-[#205B23] to-[#205B23]/70 bg-clip-text text-5xl  text-transparent"
                variants={itemVariants}
              >
                <span className="text-[#1a472a]">Our Mission Is To Help Organizations</span>
                <br />
                <span className="text-[#1a472a]">Take Responsibility Today—</span>
                <br />
                <motion.span
                  className="text-[#3d9a7a] italic"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  So Tomorrow Can Thrive.
                </motion.span>
              </motion.h3>
            </motion.div>
          </motion.div>
        </div>
        <motion.img
          src={aboutImage}
          alt=""
          className="absolute -bottom-5 -right-10 w-auto h-auto object-cover"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>

      {/* Small decorative leaf element on the left */}
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-24 opacity-30 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 150 C50 150 10 100 10 60 C10 20 50 0 50 0 C50 0 90 20 90 60 C90 100 50 150 50 150Z"
            fill="#1a472a"
          />
          <line x1="50" y1="150" x2="50" y2="0" stroke="#0d2615" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32  blur-sm bg-gradient-to-b from-[#FBFCFB] to-white/100">

      </div>

    </section>
  );
}
