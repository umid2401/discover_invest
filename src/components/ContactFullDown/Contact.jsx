import {Minus, MapPinLine} from "@phosphor-icons/react";
import axios from 'axios';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next'


const Contact = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false)
    const SendMessage = (event) => {
        setLoading(true)                  
        event.preventDefault();
        const token = "6705312033:AAHVpwuQ0eDEM3QfkFvqjRHDMwUDQXcC97Q";
        const chat_id =1660712160;
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const name = document.getElementById("Input_1").value
        const phoneNumber = document.getElementById("Input_2").value
        const Department = document.getElementById("Input_3").value
        const YourQuestion = document.getElementById("Input_4").value

        const messageContent = `Ismi: ${name} \nPhoneNumber: ${phoneNumber} \nDepartment: ${Department} \nYour question: ${YourQuestion}`
        
        axios({
            url: url,
            method: "POST",
            data:{
              "chat_id": chat_id,
              "text": messageContent,
            }
        }).then((res) => {
            document.getElementById("myForm2").reset()
             toast.success("Muvaffaqiyatli Yuborildi")
        }).catch((error) => {
            toast.error("Yuborishda xatolik", error);
        }).finally(()=> {
            setLoading(false)
        })
    }

  return (
    <div className="company lg:flex lg:flex-row flex flex-col w-full truncate mt-20">

        {/* contact */}
        <div className=" lg:w-2/4 w-full sm:pl-32 pl-8 pr-10 mb-28">
            <h1 className=' w-[400px] text-wrap font-[600] lg:text-[60px]  md:text-[40px] text-[35px] flex text-center'>
                <Minus className='lg:mt-3 mt-[-7px] sm:block hidden' size={70} color='#fab448' weight="bold" />
                {t(`contactQuestion`)}
            </h1>
            <p className="text-wrap">
              {t(`contactQuestionTitle`)}
            </p>

            {/* info */}
            <div className="flex  flex-col gap-16  mt-20">
                <div className="  w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6">  {t(`contactAdd`)}</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 text-base mt-4">
                      {t(`contactAdress`)}
                    </p>
                </div>

                <div className="  w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6 ">{t(`contactPhone`)}</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 text-base mt-4">
                      +998 71 288 88 88
                    </p>
                </div>
                <div className="  w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6">{t(`contactWorking`)}</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 text-base mt-4">
                      09:00 - 18:00 Mon-Sat
                    </p>
                </div>
            </div>
        </div>

         
        <div className="formFull  lg:w-2/4 w-full sm:px-20 px-4 mt-10  mb-28 lg:mb-0 ">
             {/* form */}
             <div className=" py-10 bg-white w-full shadow-2xl ">
                <form className="flex flex-col sm:w-2/3 mx-auto px-5 sm:px-0  lg:gap-8 gap-6" id='myForm2' onSubmit={SendMessage}>
                <div  className="flex flex-col mt-4">
                        <label htmlFor="">{t(`contactName`)}</label>
                        <input type="text" id="Input_1" placeholder="What is your name?" required className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div  className="flex flex-col"> 
                        <label htmlFor="">{t(`contactPhoneNumber`)}</label>
                        <input type="text" id="Input_2" placeholder="+998" required className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">{t(`contactFormDepartment`)}</label>
                        <select  id="Input_3" required className="bg-gray-300 py-4 px-5 border-none">
                            <option value="Department">{t(`contactFormDepartment`)}</option>
                            <option value="Sales department">{t(`FormDepartmentSale`)}</option>
                            <option value="Human Resource department">{t(`FormDepartmentHR`)}</option>
                            <option value="Financial department">{t(`FormDepartmentFinancial`)}</option>
                            <option value="Accounting">{t(`FormDepartmentAccaunting`)}</option>
                            <option value="Purchasing department">{t(`FormDepartmentPurchasing`)}</option>
                            <option value="Office">{t(`FormDepartmentOffice`)}</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="">{t(`FormQuestion`)}</label>
                      <textarea className="bg-gray-300 py-4 px-5 border-none" placeholder={t(`FormQuestionInput`)} id="Input_4" cols="30" rows="2" required></textarea>
                    </div>
                    <div className="sm:self-end w-full sm:w-fit text-center">
                        <div className="invisible">invisible</div>
                      <button type='submit'  className="py-4 px-20  border-none bg-[#fab448]"  loading={loading}>{loading ? `${t(`contactSending`)}` : `${t(`contactFeedback`)}`}</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact