import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SplitType from 'split-type';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
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

export default function About() {
  const sectionRef = useRef(null);
  const location = useLocation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });


  useEffect(() => {
    const initializeAnimations = () => {
      const splitType = document.querySelector('.middletext');

      if (splitType) {
        if (splitType.isSplit) {
          splitType.revert();
        }

        const text = new SplitType(splitType, {
          types: 'chars,words',
          absolute: false
        });

        ScrollTrigger.getAll().forEach(st => {
          if (st.vars.trigger === '.middletext') {
            st.kill();
          }
        });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: '.middletext',
            start: 'top 90%',// when the top of the text reaches 80% of the viewport
            end: 'top 30%',// when the top of the text reaches 20% of the viewport
            scrub: true,// smooth scrubbing
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.1,
        });

        ScrollTrigger.refresh();
      }
    };

    const timer = setTimeout(() => {
      initializeAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Only kill ScrollTriggers specific to this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === '.middletext') {
          trigger.kill();
        }
      });
      gsap.killTweensOf('.middletext');
    };
  }, [location.pathname]);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="relative bg-white py-20 px-6 md:min-h-screen h-[80vh] flex flex-col items-center justify-center z-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.div className="flex justify-center mb-8" variants={itemVariants}>
          <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            Who We Are
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.p
          className="md:text-[2.8vw] text-[7vw] font-normal leading-tight mb-8 text-gray-800 middletext"
          variants={itemVariants}
        >
          SarvSustain empowers organizations to operate responsibly, <br className="md:block hidden"/>
          transparently, and sustainably. From our base in Dubai, we combine <br className="md:block hidden"/>
          global best practice with regional insight to turn ESG and GHG <br className="md:block hidden"/>
          ambitions into measurable results.
        </motion.p>

        {/* Learn More Button */}
        <motion.button
          className="border-2 border-green-600 text-green-600 px-10 py-2 rounded-full font-medium hover:bg-green-600 hover:text-white transition-colors"
          variants={itemVariants}
        >
          Learn More
        </motion.button>
      </div>
    </motion.section>
  );
}
