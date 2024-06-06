import {Minus, MapPinLine, FacebookLogo, InstagramLogo, TelegramLogo} from "@phosphor-icons/react";
import axios from 'axios';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next'


const Contact = () => {
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false)
    const SendMessage = (event) => {
        setLoading(true)                  
        event.preventDefault();
        const token = "6705312033:AAHVpwuQ0eDEM3QfkFvqjRHDMwUDQXcC97Q";
        const chat_id =1660712160;
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const phoneNumber = document.getElementById("Input1").value
        const name = document.getElementById("Input2").value

        const messageContent = `Ismi: ${name} \nPhoneNumber: ${phoneNumber} `
        
        axios({
            url: url,
            method: "POST",
            data:{
              "chat_id": chat_id,
              "text": messageContent,
            }
        }).then((res) => {
            document.getElementById("myForm").reset()
             toast.success("Muvaffaqiyatli Yuborildi")
        }).catch((error) => {
            toast.error("Yuborishda xatolik", error);
        }).finally(()=> {
            setLoading(false)
        })
    }

  return (
    <div className="lg:flex lg:flex-row flex  flex-col w-full contact truncate mt-20 md:px-20 sm:px-10 px-4 z-50">

        {/* contact */}
        <div className=" w-full lg:w-2/3  lg:mr-10 ">
            <h1 className='font-[600] lg:text-[60px]  md:text-[40px] text-[35px] flex'>
                <Minus className='lg:mt-3 mt-[-7px] sm:block hidden' size={70} color='#fab448' weight="bold" />
                {t("contact")}
            </h1>

            {/* info */}
            <div className="lg:flex lg:flex-row flex  flex-col gap-12  mt-20">
                <div className="lg:w-1/3 w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6"> {t("contactAdd")}</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 lg:text-[10px] 2xl:text-base">
                    {t("contactAdress")}
                    </p>
                </div>

                <div className="lg:w-1/3 w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6 ">{t("contactPhone")}</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 lg:text-[10px] 2xl:text-base">
                      +998 71 288 88 88
                    </p>
                </div>
                <div className="lg:w-1/3 w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6">{t("contactWorking")}</span>
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
                <form className=" flex  flex-col  lg:gap-8 gap-6" id='myForm' onSubmit={SendMessage}>
                    <div  className="flex flex-col"> 
                        <label htmlFor="">{t("contactPhoneNumber")}</label>
                        <input type="text" placeholder="+998" id='Input1' required className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div  className="flex flex-col">
                        <label htmlFor="">{t("contactName")}</label>
                        <input type="text" placeholder="What is your name?" id='Input2' required className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div className="w-full text-center">
                        <div className="invisible">invisible</div>
                      <button type='submit' className="py-4  border-none bg-[#fab448] w-full" loading={loading}>{loading ? `${t(`contactSending`)}` : `${t(`contactFeedback`)}`}</button>
                    </div>
                
                </form>
            </div>
    </div>
  )
}

export default Contact