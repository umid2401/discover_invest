//  sliders
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";

// LInk
import {NavLink } from 'react-router-dom'

// pictures
import news_1 from '../../assets/n1.webp'
import news_2 from '../../assets/n2.webp'
import news_3 from '../../assets/n3.webp'
import news_4 from '../../assets/n4.webp'
 

// icon
import {Minus, CaretLeft, CaretRight} from "@phosphor-icons/react";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { useTranslation } from 'react-i18next'
 

function Company() {
  const { t } = useTranslation();
   
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  };

  const Datas = [
    {
        img: news_1,
        date: "2023-01-27",
        title: `${t("NewsText")}`,
        link: " " 
    },
    {
        img: news_2,
        date: "2022-12-31",
        title: `${t("NewsText2")}`,
        link: " " 
    },
    {
        img: news_3,
        date: "2022-10-02",
        title: `${t("NewsText3")}`,
        link: " " 
    },
    {
        img: news_4,
        date: "2022-12-19",
        title: `${t("NewsText4")}`,
        link: " " 
    },  
  ]


  return (
    <div className="company slider   mx-auto md:pl-28 px-8 pt-20 truncate">
        <div className=" flex justify-between lg:px-20" 
            data-aos="fade-right"     
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <div>
              <h1 className='font-[600] lg:text-[60px]  md:text-[40px] text-[35px] flex'><Minus className='lg:mt-3 mt-[-7px] sm:block hidden' size={70} color='#fab448' weight="bold" />Company</h1>
              <h1 className='font-[600] lg:text-[60px] md:text-[40px] text-[35px] sm:pl-28 pl-8'>{t("NewsTitle")}</h1>
            </div>
            
            <div className="mt-10 flex gap-5 px-4 md:px-0 invisible lg:visible" >
                <button type="button" onClick={previous} >
                    <div className="border-[#fab448] border-solid border p-3 hover:bg-[#fab448] hover:text-white">
                    <CaretLeft  size={20} weight="bold"  />
                    </div> 
                </button>
                <button type="button" onClick={next} >
                    <div className="border-[#fab448] border-solid border p-3 hover:bg-[#fab448] hover:text-white">
                    <CaretRight size={20} weight="bold" />
                    </div> 
                </button>
            </div>
        </div>
        <Slider
            ref={slider => {
            sliderRef = slider;
            }}
            {...settings}
        >
            {
            Datas.map((item, index)=> (
                // eslint-disable-next-line react/no-unknown-property
                <div key={index} className="mt-16 sm:px-12 px-4 ">
                    <div className="relative w-[350px] h-[350px]  ">
                      <p className="absolute top-3 px-8 text-white z-[99]">{item.date}</p>
                        <img className="w-full h-full " src={item.img} alt="" />
                        <div className="absolute top-0 w-full h-full bg-black opacity-25"></div>
                        <div className="text-wrap absolute text-white bottom-2 z-[100] px-8 ">
                            <h3 className="sm:px-4  2xl:px-0 font-[600] md:text-[18px]  text-[14px] ">{item.title}</h3>
                            <NavLink to={"/news"}> 
                              <a className="sm:px-2 2xl:px-0 underline text-blue-400 font-[600] text-[16px]">{t("NewsButton")}</a>
                            </NavLink>
                        </div>
                    </div>
                   
                 
                </div>
            ))
            }
        
        </Slider>

           {/* button */}
        <div className='text-center relative mt-20 h-[150px]'>
            <span className='text-center inline absolute top-3  -z-10  text-lg text-[#fab448] border border-solid py-4 px-5 w-[150px] h-[60px] border-[#fab448] mt-[-30px] ml-[20px]'></span>
            <button type='button' className='text-center text-lg  bg-white border border-solid py-4 px-5 w-[150px] border-[#fab448] hover:mt-[-100px] hover:ml-[20px] hover:bg-[#fab448] hover:text-white'>
               <NavLink to={"/news"}>
                 All News
               </NavLink>
              </button>
        </div>
       
    </div>
  );
}

export default Company;
