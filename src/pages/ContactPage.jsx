// import React from 'react'

import ContactFull from "../components/ContactFull/ContactFull"
import Contact from "../components/ContactFullDown/Contact"
import Footer from "../components/Footer/Footer"


const ContactPage = () => {
  return (
    <div className="2xl:mt-32 xl:mt-28 lg:mt-24">
      <ContactFull/>
      <Contact/>

      {/* map */}
        <div className="w-screen h-96 lg:h-[600px] mx-auto rounded-3xl ">
            <iframe width="100%" height="100%"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Alisher%20Navoiy%20nomli%20O%CA%BBzbekiston%20milliy%20bog%CA%BBi,%20Toshkent+(Alisher%20Navoiy%20nomli%20O%CA%BBzbekiston%20milliy%20bog%CA%BBi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>     
        </div>

      <Footer/>
    </div>
  )
}

export default ContactPage