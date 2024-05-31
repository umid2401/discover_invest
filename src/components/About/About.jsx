/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
   <div className='mt-8 px-32'>
       <div className="about ">
       <div className="lg:flex lg:flex-row gap-40 flex flex-col  w-full">
            <div className='lg:w-2/4  w-full ' data-aos="fade-right"  data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000">
                <h1 className='font-bold text-[60px] '>About</h1>
                   <h1 className='font-bold text-[60px] pl-6'>DISCOVER INVEST</h1>
                    <p className='text-[20px]'>
                      We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for the environmental aspects related to the construction and operation of buildings and infrastructure.
                    </p>
               
            </div> 
            <div className='lg:w-2/4 w-full' data-aos="fade-left"> 
                <div className=' flex flex-wrap mt-40 '>
                   
                            {/* employ */}
                            <div className='employe w-[360px] h-[234px]'>
                                <div className='oveylay border-2 bg-white w-full h-full hover:bg-inherit flex flex-col items-center transition delay-300 duration-300 ease-in-out'>
                                <h3 className='text-[#fab448] font-bold text-3xl mt-16'>4000+</h3>
                                <p className='text-bold text-lg text-white'>The number of employees</p>
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