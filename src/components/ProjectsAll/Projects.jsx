// import React from 'react'
import p1 from "../../assets/p1.webp"
import p2 from "../../assets/p2.webp"
import p3 from "../../assets/p3.webp"
import p4 from "../../assets/p4.webp"
import p5 from "../../assets/p5.webp"
import p6 from "../../assets/p6.webp"
// icon
 

// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col gap-5 truncate'>
      {/* title */}
      <div className="lg:flex lg:flex-row flex flex-col  lg:items-center lg:justify-between lg:px-28 px-8 bg-gray-100 py-20">
          <h1 className='font-[600] lg:text-[60px] md:text-[40px] text-[35px] w-2/4 '>{t(`navProjects`)}</h1>
          <p className="lg:w-2/4 w-full text-wrap 2xl:text-lg xl:text-base lg:text-sm mt-8 lg:mt-0 ">
          {t(`MainText`)}
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
                    {t(`ProjectsText`)}
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
                    {t(`ProjectsText2`)}
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
                    {t(`ProjectsText3`)}
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
                    {t(`ProjectsText4`)}
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
                    {t(`ProjectsText5`)}
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
                    {t(`ProjectsTex6`)}
                    </p>
                </div>
               </div>
            </div>  
        </div>
    </div>
  )
}

export default Projects