// import React from 'react'
import Mission_1 from '../../assets/misson1.jpg'
import { useTranslation } from 'react-i18next'

const AboutCards = () => {
    const { t } = useTranslation();
  return (
    <div className='lg:px-28 sm:px-10 px-5 mt-20 flex justify-center mx-auto'>
        <div className='flex flex-wrap'>
            {/* card 1 */}
            <div className='lg:w-[330px] w-full  h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>14</h3>
                    <p className='font-[500]'>{t("aboutWorker5")}</p>
                </div>
            </div>

            {/* card 2*/}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>4000+</h3>
                    <p className='font-[500]'>{t("aboutWorker")}</p>
                </div>
            </div> 
             
            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>150+</h3>
                    <p className='font-[500]'>{t("aboutWorker2")}</p>
                </div>
            </div>

            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>16</h3>
                    <p className='font-[500]'>{t("aboutWorker3")}</p>
                </div>
            </div>

            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>250+</h3>
                    <p className='font-[500]'>{t("aboutWorker4")}</p>
                </div>
            </div>  
            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>9+</h3>
                    <p className='font-[500]'>{t("aboutWorker6")}</p>
                </div>
            </div>  
           
        
             
      </div>
    </div>
  )
}

export default AboutCards