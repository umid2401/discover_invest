/* eslint-disable react/no-unescaped-entities */
import AboutPage from '../../assets/aboutPage.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
   <div className='mt-20 2xl:px-32 xl:px-28 lg:px-20 sm:px-8 px-4 truncate'>
       <div className="about ">
       <div className="lg:flex lg:flex-row flex flex-col  w-full">

            <div className='lg:w-2/4  w-full ' data-aos="fade-right"  data-aos-offset="100" data-aos-delay="100" data-aos-duration="2000">
                <h1 className='font-bold 2xl:text-[50px]  lg:text-[40px] sm:text-[60px] text-[30px]'>About</h1>
                   <h1 className='font-bold 2xl:text-[50px]  lg:text-[40px] sm:text-[60px] text-[30px] pl-6'>DISCOVER INVEST</h1>
            </div> 
            
            <div className='lg:w-2/4 w-full' data-aos="fade-left"  data-aos-offset="100" data-aos-delay="100" data-aos-duration="2000"> 
                <div className=' flex flex-wrap'>
                   <img className='w-full ' src={AboutPage} alt="" />
                   <p className='leading-7 text-[18px] mt-4 text-wrap'>
                    We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for the environmental aspects related to the construction and operation of buildings and infrastructure.
                   </p>
                   <div className='text-center relative mt-20 h-[150px]'>
                      <span className='text-center inline absolute top-3  -z-10  text-lg text-[#fab448] border border-solid py-4 px-5 w-[150px] h-[60px] border-[#fab448] mt-[-30px] ml-[20px]'></span>
                      <button type='button' className='text-center text-lg border border-solid py-4 px-5 w-[150px] border-[#fab448] hover:mt-[-100px] hover:ml-[20px] bg-[#fab448] text-white'>All projects</button>
                  </div>
                </div>
            </div>
       </div>
    </div>
 
  
   </div>
  )
}

export default About