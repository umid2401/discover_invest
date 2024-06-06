//  sliders
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";

// pictures
import team_1 from '../../assets/team1.webp'
import team_2 from '../../assets/team2.webp'
import team_3 from '../../assets/team3.webp'
import team_4 from '../../assets/team4.webp'
import team_5 from '../../assets/team5.webp'

// icon
import {Minus, CaretLeft, CaretRight} from "@phosphor-icons/react";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { useTranslation } from 'react-i18next'

function PreviousNextMethods() {
  const { t, i18n } = useTranslation();
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
    autoplay: true,
    Loop: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
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
        img: team_1,
        name: "Artiqbaev Saxobiddin Doniyor o'g'li",
        job: "Project Manager"
    },
    {
        img: team_2,
        name: "Kuziev Jakhongir Bakhodirovich",
        job: "Project Manager"
    },
    {
        img: team_3,
        name: "Norbekov Shavkat Bo'riboy o'g'li",
        job: "Project Manager"
    },
    {
        img: team_4,
        name: "Xusanov Akromjon Turaxon o'g'li",
        job: "Project Manager"
    },
    {
        img: team_5,
        name: "Boltaev Obidjon Uchqin o'g'li",
        job: "Project Manager"
    },
  ]

  return (
    <div className=" slider   mx-auto md:px-28 px-8 pt-20  bg-gray-50 truncate">
        <div className=" flex justify-between lg:px-20" 
            data-aos="fade-right"     
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <div>
               <h1 className='font-[600] lg:text-[60px]  md:text-[40px] text-[35px] flex'><Minus className='lg:mt-3 mt-[-7px] sm:block hidden' size={70} color='#fab448' weight="bold" />Our</h1>
              <h1 className='font-[600] lg:text-[60px] md:text-[40px] text-[35px] sm:pl-28 pl-8'>Team</h1>
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
                <div key={index} className="mt-16">
                <img className=" md:w-[300px] md:h-[450px]  sm:px-3 px-0 2xl:px-1" src={item.img} alt="" />
                <div className=" text-wrap ">
                  <h3 className="sm:px-4   text-left  2xl:px-0 font-[600] text-[22px]">{item.name}</h3>
                  <p className="sm:px-4 2xl:px-0  text-[16px]">{t("OurTeamJob")}</p>
                </div>
          
                </div>
            ))
            }
        
        </Slider>
    </div>
  );
}

export default PreviousNextMethods;
