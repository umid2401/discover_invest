// import React from 'react'
import FooterLogo from '../../assets/footerLogo.svg'

const Footer = () => {
  return (
    <div className="flex bg-gray-50 md:px-32 px-4 py-4 items-center">
        <img src={FooterLogo} alt="" />
        <p className='text-gray-300 text-center w-full sm:text-base text-[12px]'>© 2022 Discover Invest. All rights reserved.</p>
    </div>
  )
}

export default Footer