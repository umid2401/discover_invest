// import React from 'react'
import {TrayArrowDown} from "@phosphor-icons/react";

const ContactFull = () => {
  return (
    <div className="contactFull w-full h-screen truncate">
        <div className="lg:pt-48 pt-96 xl:pl-36 lg:pl-28 md:pl-16 sm:pl-8 px-4  lg:w-2/4 w-full flex flex-col lg:gap-20 gap-12">
            <h2 className="2xl:text-8xl lg:text-6xl   text-6xl   font-semibold sm:tracking-widest text-white">CONTACTS</h2>
            <p className="2xl:text-2xl lg:text-xl  font-semibold text-wrap  text-white">
              Leave your contacts by filling out the current form and we will contact you as soon as possible.
            </p>
            <button>
              <TrayArrowDown size={60} color="#fab448"/>
            </button>
        </div>
    </div>
  )
}

export default ContactFull