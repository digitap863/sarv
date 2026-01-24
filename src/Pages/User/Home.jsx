import About from '../../Components/About.jsx';
import Banner from '../../Components/Banner.jsx';
// import CoreServices from '../../Components/CoreServices.jsx';
import Footer from '../../Components/Footer.jsx';
import Navbar from '../../Components/Navbar.jsx';
import Solutions from '../../Components/Solutions.jsx';


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      {/* <CoreServices /> */}
      <Solutions />
      <Footer />
    </>
  )
}

export default Home
