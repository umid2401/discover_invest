// pictures
import news_1 from '../../assets/n1.webp'
import news_2 from '../../assets/n2.webp'
import news_3 from '../../assets/n3.webp'
import news_4 from '../../assets/n4.webp'
 

// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { useTranslation } from 'react-i18next'
 

function Company() {
  const { t } = useTranslation();

  const Datas = [
    {
        img: news_1,
        date: "2023-01-27",
        title: `${t(`NewsText`)}`,
        link: " " 
    },
    {
        img: news_2,
        date: "2022-12-31",
        title: `${t(`NewsText2`)}`,
        link: " " 
    },
    {
        img: news_3,
        date: "2022-10-02",
        title: `${t(`NewsText3`)}`,
        link: " " 
    },
    {
        img: news_4,
        date: "2022-12-19",
        title: `${t(`NewsText4`)}`,
        link: " " 
    },  
  ]


  return (
    <div className="company mx-auto  truncate ">
         
        <div className="lg:flex lg:flex-row flex flex-col  lg:items-center lg:justify-between lg:px-28 px-8 bg-gray-100 py-20">
          <h1 className='font-[600] lg:text-[60px] md:text-[40px] text-[35px] w-2/4 '>{t(`NewsTitle`)}</h1>
          <p className="w-2/4 text-wrap 2xl:text-lg xl:text-base lg:text-sm mt-8 lg:mt-0 ">
          {t(`MainText`)}
          </p>
        </div>
        
       
       <div className='flex flex-row flex-wrap md:pl-28 px-8 pt-20'>
            {
            Datas.map((item, index)=> (
                // eslint-disable-next-line react/no-unknown-property
                <div key={index} className="mt-16 sm:px-12 flex ">
                    <div className="relative sm:w-[350px] sm:h-[350px]  ">
                      <p className="absolute top-3 px-8 text-white z-[99]">{item.date}</p>
                        <img className="w-full h-full " src={item.img} alt="" />
                        <div className="absolute top-0 w-full h-full bg-black opacity-25"></div>
                        <div className="text-wrap absolute text-white bottom-2 z-[100] px-8 ">
                            <h3 className="sm:px-2  2xl:px-0 font-[600] md:text-[18px] text-[14px] ">{item.title}</h3>
                            <a href='#' className="sm:px-4 2xl:px-0 underline text-blue-400 text-[16px]">{t(`NewsButton`)}</a>
                        </div>
                    </div>
                   
                 
                </div>
            ))
            }
      </div>    
    </div>
  );
}

export default Company;
