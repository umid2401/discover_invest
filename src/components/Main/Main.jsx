import VideoBG from '../../assets/Ташкент_сити_Hilton_Congress_Hall_online_video_cutter_com.mp4'
import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="main ">
      <video src={VideoBG} autoPlay loop muted />
      <div className="content">
        <div className='lg:ml-32 sm:ml-16 ml-8  lg:mt-48 mt-2'>
            <div className='lg:flex lg:flex-col md:flex-row md:flex md:mt-[200px] sm:mt-[160px]  mt-[220px] lg:mt-40 2xl:mt-32'>
               <h1 className='2xl:text-[80px] md:text-[60px]  sm:text-[50px] text-[40px]  xl:text-[60px] lg:text-[50px] font-[600] sm:tracking-widest'>DISCOVER</h1>
               <h1 className='2xl:text-[80px] md:text-[60px]  sm:text-[50px] text-[40px]  xl:text-[60px] lg:text-[50px] font-[600] sm:tracking-widest'>INVEST</h1>
            </div>
              <p className='sm:text-[28px] font-[400] mt-3'>{t("maintext")}</p>
            
              <div className='mt-5 flex gap-8 pr-10'>
                <a className='bg-[#fab448] hover:bg-white hover:text-black py-3 w-[150px] text-center text-lg cursor-pointer block'>{t("mainButton1")}</a>
                <a className='bg-[#fab448] hover:bg-white hover:text-black  py-3 w-[150px] text-center text-lg cursor-pointer block'>{t("mainButton2")}</a>
              </div>
             
        </div>
      </div>
    </div>
  )
}

export default Main