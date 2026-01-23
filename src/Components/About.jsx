import React from 'react';

export default function About() {
  return (
    <section className="relative bg-red-500 py-20 px-6 h-[110vh] z-10 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            Who We Are
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-normal leading-tight mb-8 text-gray-900">
          SarvSustain empowers organizations to operate responsibly, <br/>
          transparently, and sustainably. From our base in Dubai, we combine <br/>
          global best practice with regional insight to turn ESG and GHG <br/>
          ambitions into measurable results.
        </h1>

        {/* Learn More Button */}
        <button className="border-2 border-green-600 text-green-600 px-10 py-2 rounded-full font-medium hover:bg-green-50 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}




// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useEffect, useRef } from 'react';
// import banner1 from '../assets/images/banner1.png';
// import banner2 from '../assets/images/banner2.png';
// import banner3 from '../assets/images/banner3.png';
// import dwnarrw from '../assets/images/dwnarrw.svg';
// import plant from '../assets/images/plant.png';

// gsap.registerPlugin(ScrollTrigger);


// const Banner = () => {
//     const mainWrapperRef = useRef(null); // Wrapper for both sections
//     const horizontalRef = useRef(null);
//     const section2Ref = useRef(null);

//     useEffect(() => {
//         const wrapper = mainWrapperRef.current;
//         const horizontal = horizontalRef.current;
//         const section2 = section2Ref.current;

//         if (!wrapper || !horizontal || !section2) return;

//         const scrollDistance = horizontal.scrollWidth - window.innerWidth;

//         // Create one master timeline
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 // 'end' is horizontal distance + the height of the parallax reveal
//                 end: () => `+=${scrollDistance + window.innerHeight}`, 
//                 pin: true,
//                 scrub: 1,
//                 invalidateOnRefresh: true,
//             }
//         });

//         // Step 1: Do the horizontal scroll
//         tl.to(horizontal, {
//             x: -scrollDistance,
//             ease: "none"
//         })
//         // Step 2: Immediately bring Section 2 up (Parallel Axis Reveal)
//         .fromTo(section2, 
//             { y: "100vh" }, // Start off-screen at the bottom
//             { y: "0vh", ease: "none" },
//             ">" // Start right after the horizontal scroll finishes
//         );

//         return () => {
//             ScrollTrigger.getAll().forEach(t => t.kill());
//         };
//     }, []);

//     return (
//         <div ref={mainWrapperRef} className="relative overflow-hidden">
            
//             {/* SECTION 1: Horizontal Content */}
//             <div className="relative w-full h-screen overflow-hidden z-0">
//                 {/* Fixed Arrow */}
//                 <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
//                      <img src={dwnarrw} alt="Scroll Down" className="w-9 h-11" />
//                 </div>

//                 <div ref={horizontalRef} className="flex flex-row h-full w-[300vw]">
//                     {/* Banners (Keep your existing Slide 1, 2, 3 divs here) */}
//                     <div className="relative w-screen h-screen flex-shrink-0">
//                         <img src={banner1} className="w-full h-full object-cover" alt="Banner 1" />
//                         {/* ... your text content ... */}
//                     </div>
//                     <div className="relative w-screen h-screen flex-shrink-0">
//                          <img src={banner2} className="w-full h-full object-cover" alt="Banner 2" />
//                     </div>
//                     <div className="relative w-screen h-screen flex-shrink-0">
//                          <img src={banner3} className="w-full h-full object-cover" alt="Banner 3" />
//                     </div>
//                 </div>
//             </div>

//             {/* SECTION 2: Vertical Reveal */}
//             <section 
//                 ref={section2Ref}
//                 className="absolute top-0 left-0 w-full min-h-screen bg-white py-20 px-6 z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
//             >
//                 <div className="max-w-6xl mx-auto text-center">
//                     {/* ... Section 2 Content ... */}
//                     <div className="flex justify-center mb-8">
//                         <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium">Who We Are</span>
//                     </div>
//                     <h1 className="text-4xl text-gray-900">SarvSustain empowers organizations...</h1>
//                 </div>
//             </section>
//         </div>
//     );
// };


// export default Banner;
