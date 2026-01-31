import About from '../../Components/About.jsx';
import Banner from '../../Components/Banner.jsx';
// import CoreServices from '../../Components/CoreServices.jsx';
import Footer from '../../Components/Footer.jsx';
import Navbar from '../../Components/Navbar.jsx';
import Services from '../../Components/Services.jsx';
// import Solutions from '../../Components/Solutions.jsx';
import AirSection from '../../Components/AirSection.jsx';
import GreenSection from '../../Components/GreenSection.jsx';
import EarthSection from '../../Components/EarthSection.jsx';
import WhySection from '../../Components/WhySection.jsx';
import TechSection from '../../Components/TechSection.jsx';
import HelpSection from '../../Components/helpSection.jsx';


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <AirSection />
      <GreenSection />
      <EarthSection />
      <WhySection />
      <TechSection />
      <HelpSection />
      {/* <CoreServices /> */}
      {/* <Solutions /> */}
      <Footer />
    </>
  )
}

export default Home




