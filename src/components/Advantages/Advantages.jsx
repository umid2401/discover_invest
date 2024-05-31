import Icon_1 from '../../assets/icon1.svg'
import Icon_2 from '../../assets/icon2.svg'
import Icon_3 from '../../assets/icon3.svg'
import {Minus} from "@phosphor-icons/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Advantages = () => {

  return (
    <div className="advantages w-full h-full mx-auto md:p-28 mt-12" 
      data-aos="fade-right"     
       data-aos-delay="70"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
    > 
      <h1 className='font-[600] lg:text-[60px]  md:text-[40px] text-[35px] flex'><Minus className='lg:mt-3 mt-[-7px]' size={70} color='#fab448' weight="bold" />Our</h1>
      <h1 className='font-[600] lg:text-[60px] md:text-[40px] text-[35px] pl-28'>Advantages</h1>
       
       <div className='lg:flex-row lg:flex   flex flex-col mt-12'>
              {/* card 1 */}
            <div className='w-full lg:w-1/3 px-4  lg:px-10 lg:mt-0 mt-20 hover:text-[#fab448]' 
                  data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
            >
                <img className='text-rose-600' src={Icon_1} alt="icons" />
                <h2 className='2xl:text-[26px] xl:text-[23px] lg:text-[18px] text-[23px] font-[600] mt-5'>our team</h2>
                <p className='2xl:text-[19px] xl:text-[18px] lg:text-[13px] text-[17px]  font-[400] mt-3'>
                  The company recruits experienced employees on a competitive basis
                </p>
            </div>

              {/* card 2 */}
            <div className='w-full lg:w-1/3 px-4  lg:px-10 lg:mt-0 mt-20  hover:text-[#fab448]'
                    data-aos="fade-right" 
                    data-aos-delay="90"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"           
            >
                <img className='text-rose-600' src={Icon_2} alt="icons" />
                <h2 className='2xl:text-[26px] xl:text-[23px] lg:text-[18px] text-[23px] font-[600] mt-5'>Positive customer approach</h2>
                <p className='2xl:text-[19px] xl:text-[18px] lg:text-[13px] text-[17px]  font-[400] mt-3'>
                   By looking at the great work we have done through our website, you will be sure that we have earned the trust of our customers
                </p>
            </div>
              {/* card 3 */}

            <div className='w-full lg:w-1/3 px-4  lg:px-10 lg:mt-0 mt-20  hover:text-[#fab448]'
               data-aos="fade-right" 
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                <img className='text-rose-600' src={Icon_3} alt="icons" />
                <h2 className='2xl:text-[26px] xl:text-[23px] lg:text-[18px] text-[23px] font-[600] mt-5'>All work guaranteed</h2>
                <p className='2xl:text-[19px] xl:text-[18px] lg:text-[13px] text-[17px]  font-[400] mt-3'>
                  We perform our mission carefully and appreciate your belief in our company All mistakes were clearly corrected
                </p>
            </div>

          
       </div>
    

    </div>
  )
}

export default Advantages