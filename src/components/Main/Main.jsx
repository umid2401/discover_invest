import VideoBG from '../../assets/video_2024-05-29_20-01-29.mp4'

const Main = () => {
  return (
    <div className="main ">
      <video src={VideoBG} autoPlay loop muted />
      <div className="content">
        <div className='lg:ml-32 sm:ml-16 ml-8  lg:mt-48 mt-2'>
            <div className='lg:flex lg:flex-col md:flex-row md:flex md:mt-[450px] sm:mt-[350px]  mt-[450px] lg:mt-80 2xl:mt-52'>
               <h1 className='2xl:text-[107px] md:text-[64px]  sm:text-[64px] text-[58px]  xl:text-[70px] lg:text-[54px] font-[600] sm:tracking-widest'>DISCOVER</h1>
               <h1 className='2xl:text-[107px] md:text-[64px] sm:text-[64px] text-[58px]  xl:text-[70px] lg:text-[54px] font-[600] sm:tracking-widest'>INVEST</h1>
            </div>
              <p className='sm:text-[28px] font-[400] mt-3'>Perfection in everything</p>
     
               {/* <div className='flex gap-8 mt-20 flex-wrap'>
                    <div className=' w-[164px] height-[200px] text-[20px]  border-2 border-[#fab448] ml-5 relative '>
                        <button className='w-[164px] height-[200px] p-3 text-[20px] bg-[#fab448]  hover:mb-[12px] hover:mt-[-12px]  hover:ml-[10px] hover:mr-[-14px] absolute top-3 right-3'>
                            <a href="#">Projects</a>
                        </button>
                    </div>

                    <div className=' w-[164px] height-[200px] text-[20px]  border-2 hover:border-1 border-[#fab448] ml-5 relative '>
                        <button className='w-[164px] height-[200px] p-3 text-[20px] hover:border-0 border-2 border-[#fab448]  hover:mb-[12px] hover:mt-[-12px]  hover:ml-[10px] hover:mr-[-14px] absolute top-3 right-3'>
                            <a href="#">Contacts</a>
                        </button>
                    </div>
                    
                
                    <button className='px-12 py-3  invisible border-2 hover:border-0 border-[#fab448]  hover:mb-[12px] hover:mt-[-12px] hover:ml-[10px] hover:mr-[-10px]'>
                        <a href="#">Contacts</a>
                    </button>
               </div> */}
        </div>
      </div>
    </div>
  )
}

export default Main