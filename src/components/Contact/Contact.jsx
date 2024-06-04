import {Minus, MapPinLine, FacebookLogo, InstagramLogo, TelegramLogo} from "@phosphor-icons/react";


const Contact = () => {
  return (
    <div className="lg:flex lg:flex-row flex  flex-col w-full contact truncate mt-20 md:px-20 sm:px-10 px-4">

        {/* contact */}
        <div className=" w-full lg:w-2/3  lg:mr-10 ">
            <h1 className='font-[600] lg:text-[60px]  md:text-[40px] text-[35px] flex'>
                <Minus className='lg:mt-3 mt-[-7px] sm:block hidden' size={70} color='#fab448' weight="bold" />
                Contacts
            </h1>

            {/* info */}
            <div className="lg:flex lg:flex-row flex  flex-col gap-12  mt-20">
                <div className="lg:w-1/3 w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6">Address</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 lg:text-[10px] 2xl:text-base">
                    Uzbekistan, Tashkent, National Park of Uzbekistan named after Alisher Navoi
                    </p>
                </div>

                <div className="lg:w-1/3 w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6 ">Phone</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 lg:text-[10px] 2xl:text-base2">
                      +998 71 288 88 88
                    </p>
                </div>
                <div className="lg:w-1/3 w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6">Working hours</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 lg:text-[10px] 2xl:text-base">
                      09:00 - 18:00 Mon-Sat
                    </p>
                </div>
            </div>

            {/* icons */}
            <div className="icons flex gap-12 mt-20">
             <FacebookLogo className="hover:text-[#fab448]" size={32} weight="fill" />
              <InstagramLogo className="hover:text-[#fab448]"  size={32} weight="fill"/>
              <TelegramLogo className="hover:text-[#fab448]" size={32} weight="fill"/>
            </div>
        </div>

         
        {/* form */}
        <div className="mt-20 bg-white w-full lg:w-1/3 sm:p-16 px-4 py-10">
                <form className=" flex  flex-col  lg:gap-8 gap-6">
                    <div  className="flex flex-col"> 
                        <label htmlFor="">Phone number</label>
                        <input type="text" placeholder="+998" className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div  className="flex flex-col">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="What is your name?" className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div className="w-full text-center">
                        <div className="invisible">invisible</div>
                      <div className="py-4 lg:px-10 border-none bg-[#fab448] px-20 sm:px-32 md:px-64"  >Feedback</div>
                    </div>
                
                </form>
            </div>
    </div>
  )
}

export default Contact