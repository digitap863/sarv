
import React from 'react';
import coree from '../assets/images/coree.png';
import core from '../assets/images/core.png';
import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import dot from '../assets/images/dot.png';
import kol1 from '../assets/images/kol1.png'
import kol2 from '../assets/images/kol2.png'
import kol3 from '../assets/images/kol3.png'
import kol4 from '../assets/images/kol4.png'


export default function CoreServices() {
  return (
    <section className="relative w-full overflow- min-h-[1100px]">
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

        <img src={cloud1} alt="" className="absolute -top-10 left-[30%] w-auto h-[60vh]  -z-10" />
        <img src={cloud2} alt="" className="absolute -bottom-36 left-[25%] w-auto h-[60vh]  -z-10" />
        {/* left side cloud */}
        <img src={cloud1} alt="" className="absolute top-48 -left-[20%] w-auto h-[60vh]  -z-10" />

        {/* Header */}
        <div className="text-center mb-16 z-10">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 z-10">
            Services
          </div>
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900">
            Our Core Services
          </h2>
        </div>

        {/* Services Cards Container */}
        <div className="max-w-7xl mx-auto relative h-[620px] ">
          
          {/* Center Globe Image - Object Contain */}
          <div className="absolute  top-[40%] left-[48%] transform -translate-x-[48%] -translate-y-[40%] max-w-7xl h-auto flex items-center justify-center">
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

          {/* Service Cards */}
          {/* Top Left - ESG & GHG Auditing */}
          <div className="absolute -top-2 -left-5 w-80">
            <div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                ESG & GHG Auditing / Assurance
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Independent assurance (ISAE 3000)</li>
                <li>• GHG statement verification (ISO 14064-3)</li>
                <li>• EMS/OHS/Compliance gaps: ISO 14001, ISO 45001, ISO 37301</li>
              </ul>
            </div>
            <img src={kol1} alt="" className="-right-36 -bottom-10 absolute" />
            <img src={dot} alt="" className="-right-41 -bottom-15 absolute" />
          </div>

          {/* Top Right - Technology-Driven */}
          <div className="absolute top-0 right-32 w-80">
            <div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                Technology-Driven Sustainability
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• SaaS for ESG data capture & reporting</li>
                <li>• Automated carbon accounting & audit trail</li>
                <li>• AI climate-risk analytics & dashboards</li>
              </ul>
            </div>
            <img src={kol2} alt="" className="-left-36 -bottom-10 absolute" />
            <img src={dot} alt="" className="-left-41 -bottom-15 absolute" />
          </div>

          {/* Bottom Left - GHG Accounting */}
          <div className="absolute -bottom-20 left-10 w-88">
            <div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                GHG Accounting & Carbon Advisory
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• GHG inventories (Scopes 1, 2, 3; GHG Protocol)</li>
                <li>• Org. carbon footprints (ISO 14064-1)</li>
                <li>• Product carbon footprints (ISO 14067)</li>
              </ul>
            </div>
            <img src={kol3} alt="" className="-right-26.5 bottom-10 absolute" />
            <img src={dot} alt="" className="-right-31 bottom-65 absolute" />
          </div>

          {/* Bottom Right - ESG Reporting */}
          <div className="absolute -bottom-20 right-3 0">
            <div className="bg-gradient-to-r from-gray-500/70 to-white/10 backdrop-blur-[1.5px] rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-4 text-white leading-tight">
                ESG Reporting & Strategy
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• ESG maturity assessments & roadmaps</li>
                <li>• Materiality mapping & stakeholder engagement</li>
                <li>• Alignment: GRI, SASB, TCFD, ISSB, EU CSRD</li>
              </ul>
            </div>
            <img src={kol4} alt="" className="-left-50.5 bottom-10 absolute" />
            <img src={dot} alt="" className="-left-55 bottom-65 absolute" />
          </div>

       
        </div>
      </div>
    </section>
  );
}