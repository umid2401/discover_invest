// import React from 'react'
import Mission_1 from '../../assets/misson1.jpg'

const AboutCards = () => {
  return (
    <div className='lg:px-28 sm:px-10 px-5 mt-20 flex justify-center mx-auto'>
        <div className='flex flex-wrap'>
            {/* card 1 */}
            <div className='lg:w-[330px] w-full  h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>14</h3>
                    <p className='font-[500]'>Years on the Market</p>
                </div>
            </div>

            {/* card 2*/}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>4000+</h3>
                    <p className='font-[500]'>The number of employees</p>
                </div>
            </div> 
             
            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>150+</h3>
                    <p className='font-[500]'>Projects</p>
                </div>
            </div>

            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>16</h3>
                    <p className='font-[500]'>Residential complexes</p>
                </div>
            </div>

            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>250+</h3>
                    <p className='font-[500]'>Special techniques recuperated</p>
                </div>
            </div>  
            {/* card 1 */}
            <div className='lg:w-[330px] w-full h-[150px] sm:h-[190px] relative m-6 '>
                <img className='w-full h-full' src={Mission_1} alt="" />
                {/* <div className='w-full h-full absolute top-0 bg-white hover:bg-transparent'></div> */}
                <div className='absolute top-0 w-full h-full bg-white hover:bg-transparent text-black border border-black hover:text-white pl-8 '>
                    <h3 className='text-5xl text-[#fab448]  font-bold my-5'>14</h3>
                    <p className='font-[500]'>Hospitals</p>
                </div>
            </div>  
           
        
             
      </div>
    </div>
  )
}

export default AboutCards