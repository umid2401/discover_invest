/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import Mission_1 from '../../assets/misson1.jpg'

import { useTranslation } from 'react-i18next'

const About = () => {
    const { t,} = useTranslation();
  return (
   <div className='aboutf w-[100%] max-w-[1920px] mx-auto mt-[-50px] z-50 bg-white lg:px-28 sm:px-10 px-5 truncate'>
       <div className="about ">
       <div className="lg:flex lg:flex-row gap-8 flex flex-col  w-full">
            <div className='lg:w-2/4  w-full ' data-aos="fade-right"  data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000">
                <h1 className='font-bold 2xl:text-[60px] sm:text-[40px] '>{t("aboutTitle2")}</h1>
                   <h1 className='font-bold  2xl:text-[60px] sm:text-[40px] pl-6'>{t("aboutTitle")}</h1>
                    <p className='2xl:text-[20px] lg:text-15px text-[13px] text-wrap'>
                    {t("aboutText")}
                    </p>
               
            </div>
             
            <div className='lg:w-2/4 w-full' data-aos="fade-left"> 
                <div className='flex flex-wrap mt-10 '>
                   
                            {/* employ */}
                        <div className='relative 2xl:w-[300px] md:w-[350px] lg:w-[190px] xl:w-[240px]  sm:w-[250px] w-[144px] md:h-[200px] h-[150px]'>
                               <img className='w-full h-full' src={Mission_1} alt="" />
                                <div className='absolute top-0 border-2 bg-white w-full h-full hover:bg-inherit flex flex-col items-center transition delay-300 duration-300 ease-in-out text-black hover:text-white'>
                                    <h3 className='text-[#fab448] font-bold text-3xl mt-16'>4000+</h3>
                                    <p className='text-bold md:text-lg  text-[12px] text-wrap'>{t("aboutWorker")}</p>
                                </div>
                        </div>

                         {/* employ */}
                        <div className='relative 2xl:w-[300px] md:w-[350px]  lg:w-[190px] xl:w-[240px] sm:w-[250px] w-[144px] md:h-[200px] h-[150px]'>
                               <img className='w-full h-full' src={Mission_1} alt="" />
                                <div className='absolute top-0 border-2 bg-white w-full h-full hover:bg-inherit flex flex-col items-center transition delay-300 duration-300 ease-in-out text-black hover:text-white'>
                                    <h3 className='text-[#fab448] font-bold text-3xl mt-16'>150+</h3>
                                    <p className='text-bold md:text-lg  text-[12px]  '>{t("aboutWorker2")}</p>
                                </div>
                        </div>

                            {/* employ */}
                        <div className='relative  2xl:w-[300px] md:w-[350px] lg:w-[190px] xl:w-[240px] sm:w-[250px] w-[144px] md:h-[200px] h-[150px]'>
                               <img className='w-full h-full' src={Mission_1} alt="" />
                                <div className='absolute top-0 border-2 bg-white w-full h-full hover:bg-inherit flex flex-col items-center transition delay-300 duration-300 ease-in-out text-black hover:text-white'>
                                    <h3 className='text-[#fab448] font-bold text-3xl mt-16'>16</h3>
                                    <p className='text-bold md:text-lg  text-[12px]  '>{t("aboutWorker3")}</p>
                                </div>
                        </div>

                         {/* employ */}
                        <div className='relative  2xl:w-[300px] md:w-[350px] lg:w-[190px] xl:w-[240px] sm:w-[250px] w-[144px] md:h-[200px] h-[150px]'>
                               <img className='w-full h-full' src={Mission_1} alt="" />
                                <div className='absolute top-0 border-2 bg-white w-full h-full hover:bg-inherit flex flex-col items-center transition delay-300 duration-300 ease-in-out text-black hover:text-white'>
                                    <h3 className='text-[#fab448] font-bold text-3xl mt-16'>250+</h3>
                                    <p className='text-bold md:text-lg  text-[12px] text-wrap'>{t("aboutWorker4")}</p>
                                </div>
                        </div>
                         {/* employ */}
                        <div className='relative  2xl:w-[300px] md:w-[350px] lg:w-[190px] xl:w-[240px] sm:w-[250px] w-[144px] md:h-[200px] h-[150px] '>
                               <img className='w-full h-full' src={Mission_1} alt="" />
                                <div className='absolute top-0 border-2 bg-white w-full h-full hover:bg-inherit flex flex-col items-center transition delay-300 duration-300 ease-in-out text-black hover:text-white'>
                                    <h3 className='text-[#fab448] font-bold text-3xl mt-16'>14</h3>
                                    <p className='text-bold md:text-lg text-[12px] text-wrap'>{t("aboutWorker5")}</p>
                                </div>
                        </div>
                      
                </div>
            </div>
       </div>
    </div>
 
  
   </div>
  )
}

export default About