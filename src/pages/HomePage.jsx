// import React from 'react'

import About from "../components/About/About"
import Advantages from "../components/Advantages/Advantages"
import Main from "../components/Main/Main"
import Projects from "../components/Projects/Projects"
import Team from '../components/Team/Team'
import OurCompany from '../components/OurCompany/OurCompany'
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

const HomePage = () => {
  return (
    <div>
        <Main/>
        <About/>
        <Advantages/>
        <Team/>
        <Projects/>
        <OurCompany/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage