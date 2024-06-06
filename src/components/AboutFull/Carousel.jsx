import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);
  return (
    <div className="slider-container lg:px-28 sm:px-10 px-5 mt-20 truncate">
    
    <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        speed= {500}
        autoplaySpeed= {2000}
        cssEase={"linear"}
      >

        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448] w-[2px] ">2008</h3>
        </div>
        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448] w-[2px]">2009</h3>
        </div>
        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448] w-[2px]">2011</h3>
        </div>
        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448]  w-[2px]">2013</h3>
        </div>

        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448]  w-[2px]">2008</h3>
        </div>
        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448]  w-[2px]">2009</h3>
        </div>
        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448]  w-[2px]">2011</h3>
        </div>
        <div>
          <h3 className="text-lg font-[500] text-gray-600 px-20 pb-3 border-0 border-b-2 border-[#fab448]  w-[2px]">2013</h3>
        </div>
       
     
       
        
      </Slider>
      <div className="mx-auto xl:w-3/4 lg:w-4/5 mt-20 px-10">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}      slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        fade={true}
        waitForAnimate= {false}
        >
            
           <div>
            <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
               <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                    <h3 className="font-bold text-4xl">2008</h3>
                    <p className="md:font-bold lg:text-lg text-base text-wrap">
                        In 2008 the construction company Discover Invest was established.
                    </p>
                </div>
                </div>
        </div>

        <div>
            <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
               <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                    <h3 className="font-bold text-4xl">2009</h3>
                    <p className="md:font-bold lg:text-lg text-base text-wrap">
                     In 2009 working on project began at the first construction site. It was a factory for the production of aluminum profiles.
                    </p>
                </div>
                </div>
        </div>

        <div>
            <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
               <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                    <h3 className="font-bold text-4xl">2011</h3>
                    <p className="md:font-bold lg:text-lg text-base text-wrap">
                    In 2011 the need for a car park arose and was built so everyone can imagine how big the company is.
                    </p>
                </div>
                </div>
        </div>

        <div>
            <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
               <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                    <h3 className="font-bold text-4xl">2013</h3>
                    <p className="md:font-bold lg:text-lg text-base text-wrap">
                       In 2013 the design and architecture department was formed.
                    </p>
                </div>
                </div>
        </div>

        <div>
            <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
               <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                    <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                        <h3 className="font-bold text-4xl">2008</h3>
                        <p className="md:font-bold lg:text-lg text-base text-wrap">
                            In 2008 the construction company Discover Invest was established.
                        </p>
                    </div>
            </div>
        </div>

           <div>
              <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
                 <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                    <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                        <h3 className="font-bold text-4xl">2009</h3>
                        <p className="md:font-bold lg:text-lg text-base text-wrap">
                        In 2009 working on project began at the first construction site. It was a factory for the production of aluminum profiles.
                        </p>
                    </div>
                </div>
           </div>

           <div>
              <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
                 <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                    <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                        <h3 className="font-bold text-4xl">2011</h3>
                        <p className="md:font-bold lg:text-lg text-base text-wrap">
                         In 2011 the need for a car park arose and was built so everyone can imagine how big the company is.
                        </p>
                    </div>
                </div>
           </div>

           <div>
              <div className="lg:flex lg:flex-row flex flex-col lg:gap-20 gap-5  items-center">
                 <img src="https://di.uz/image/timeline/2022103107231.svg" alt="" />
                    <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-3">
                        <h3 className="font-bold text-4xl">2013</h3>
                        <p className="md:font-bold lg:text-lg text-base text-wrap">
                            In 2013 the design and architecture department was formed.
                        </p>
                    </div>
                </div>
           </div>
      </Slider>
      </div>
 
   
      
    </div>
  )
}

export default Carousel