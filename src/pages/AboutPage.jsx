import About from "../components/AboutFull/About"
import AboutCards from "../components/AboutFull/AboutCards"
import AboutHero from "../components/AboutFull/AboutHero"
import AboutMission from "../components/AboutFull/AboutMission"
import Carousel from "../components/AboutFull/Carousel"
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const AboutPage = () => {
  return (
    <div className="2xl:mt-32 xl:mt-28 lg:mt-24">
      <AboutHero/>
      <About/>
      <AboutMission/>
      <Carousel/>
      <AboutCards/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default AboutPage