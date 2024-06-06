// import React from 'react'
import p1 from "../../assets/p1.webp"
import p2 from "../../assets/p2.webp"
import p3 from "../../assets/p3.webp"
import p4 from "../../assets/p4.webp"
import p5 from "../../assets/p5.webp"
import p6 from "../../assets/p6.webp"
// icon
import {Minus} from "@phosphor-icons/react";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {

  return (
    <div className='flex flex-col gap-5 truncate'>
      {/* title */}
      <div className="lg:flex lg:flex-row flex flex-col  lg:items-center lg:justify-between lg:px-28 px-8 bg-gray-100 py-20">
          <h1 className='font-[600] lg:text-[60px] md:text-[40px] text-[35px] w-2/4 '>Projects</h1>
          <p className="lg:w-2/4 w-full text-wrap 2xl:text-lg xl:text-base lg:text-sm mt-8 lg:mt-0 ">
            We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:
          </p>
      </div>
     

         {/* first line */}
        <div className='lg:flex lg:gap-5 xl:px-32 md:px-16 px-4 mt-20'>   
            <div className='p1 w-full  relative hover:opacity-75 mb-8 lg:mb-0' data-aos="fade-right">
              <img className='xl:h-[450px] sm:h-[420px] h-[320px] w-full'  src={p1} alt="fg2hkj" />
               <div className='absolute hover:top-0 bottom-0 w-full h-full  pt-12 flex flex-col justify-between hover:justify-normal    px-10 py-8 text-white'>
                <div></div>
                <div>
                    <h2 className='text-[32px] z-[1000] hover:text-[#fab448]'>Magic City</h2>
                    <p className='md:text-[19px] text-[12px] text-wrap'>
                    Magic city is a large socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.
                    </p>
                </div>
               </div>
            </div>

            <div className='p1 w-full  relative hover:opacity-75' data-aos="fade-left">
              <img  className='xl:h-[450px] sm:h-[420px] h-[320px] w-full'  src={p6} alt="fg2hkj"  />
               <div className='absolute hover:top-0 bottom-0 w-full h-full  pt-12 flex flex-col justify-between hover:justify-normal    px-10 py-8 text-white'>
                <div></div>
                <div>
                    <h2 className='text-[32px] z-[1000] hover:text-[#fab448]'>Boulevard</h2>
                    <p className='md:text-[19px] text-[12px] text-wrap'>
                       A multifunctional residential complex created to provide comfort to the residents of Uzbekistan.
                    </p>
                </div>
               </div>
            </div>
           
        </div>

         {/* second line */}
        <div className='lg:flex lg:gap-5 xl:px-32 md:px-16 px-4'>   
            <div className='p1 w-full  relative hover:opacity-75 mb-8 lg:mb-0' data-aos="fade-right">
              <img className='xl:h-[450px] sm:h-[420px] h-[320px] w-full'  src={p2} alt="fg2hkj" />
               <div className='absolute hover:top-0 bottom-0 w-full h-full  pt-12 flex flex-col justify-between hover:justify-normal    px-10 py-8 text-white'>
                <div></div>
                <div>
                    <h2 className='text-[32px] z-[1000] hover:text-[#fab448]'>Gardens Residence</h2>
                    <p className='md:text-[19px] text-[12px] text-wrap'>
                       A grandiose residential quarter in the heart of the capital.
                    </p>
                </div>
               </div>
            </div>

            <div className='p1 w-full  relative hover:opacity-75' data-aos="fade-left">
              <img  className='xl:h-[450px] sm:h-[420px] h-[320px] w-full'  src={p3} alt="fg2hkj"  />
               <div className='absolute hover:top-0 bottom-0 w-full h-full  pt-12 flex flex-col justify-between hover:justify-normal    px-10 py-8 text-white'>
                <div></div>
                <div>
                    <h2 className='text-[32px] z-[1000] hover:text-[#fab448]'>Fonon</h2>
                    <p className='md:text-[19px] text-[12px] text-wrap'>
                     Fonon is a jewelry factory in Uzbekistan built on the basis of Italian ones in 2020. Fonon is the only large enterprise in Central Asia producing jewelry made of precious metals in European and Oriental style.
                    </p>
                </div>
               </div>
            </div>
           
        </div>


         {/* Third line */}
        <div className='lg:flex lg:gap-5 xl:px-32 md:px-16 px-4  '>   
            <div className='p1 w-full  relative hover:opacity-75 mb-8 lg:mb-0' data-aos="fade-right">
              <img className='xl:h-[450px] sm:h-[420px] h-[320px] w-full'  src={p4} alt="fg2hkj" />
               <div className='absolute hover:top-0 bottom-0 w-full h-full  pt-12 flex flex-col justify-between hover:justify-normal    px-10 py-8 text-white'>
                <div></div>
                <div>
                    <h2 className='text-[32px] z-[1000] hover:text-[#fab448]'>Invento</h2>
                    <p className='md:text-[19px] text-[12px] text-wrap'>
                       International kindergarten and school located in the international business center Tashkent City
                    </p>
                </div>
               </div>
            </div>

            <div className='p1 w-full  relative hover:opacity-75' data-aos="fade-left">
              <img  className='xl:h-[450px] sm:h-[420px] h-[320px] w-full'  src={p5} alt="fg2hkj"  />
               <div className='absolute hover:top-0 bottom-0 w-full h-full  pt-12 flex flex-col justify-between hover:justify-normal    px-10 py-8 text-white'>
                <div></div>
                <div>
                    <h2 className='text-[32px] z-[1000] hover:text-[#fab448]'>Presidential Schools</h2>
                    <p className='md:text-[19px] text-[12px] text-wrap'>
                       The Presidential School is a specialized public educational institution whose activities are aimed at identifying and educating gifted children to train highly qualified specialists.
                    </p>
                </div>
               </div>
            </div>  
        </div>
    </div>
  )
}

export default Projects