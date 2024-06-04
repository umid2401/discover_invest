// import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import News from '../components/News/OurCompany'

const NewsPage = () => {
  return (
    <div className="2xl:mt-32 xl:mt-28 lg:mt-24">
       <News/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default NewsPage