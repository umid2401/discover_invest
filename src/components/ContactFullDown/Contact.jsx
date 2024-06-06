import {Minus, MapPinLine} from "@phosphor-icons/react";
import axios from 'axios';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
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
            <h1 className='font-[600] lg:text-[60px]  md:text-[40px] text-[35px] flex text-center'>
                <Minus className='lg:mt-3 mt-[-7px] sm:block hidden' size={70} color='#fab448' weight="bold" />
                How we can <br /> help?
            </h1>
            <p className="text-wrap">
               Leave your contacts by filling out the current form and we will contact you as soon as possible.
            </p>

            {/* info */}
            <div className="flex  flex-col gap-16  mt-20">
                <div className="  w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6">Address</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 text-base mt-4">
                    Uzbekistan, Tashkent, National Park of Uzbekistan named after Alisher Navoi
                    </p>
                </div>

                <div className="  w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6 ">Phone</span>
                    </h2>
                    <p className="text-wrap text-gray-500 ml-12 text-base mt-4">
                      +998 71 288 88 88
                    </p>
                </div>
                <div className="  w-full">
                    <h2 className="font-bold 2xl:text-2xl lg:text-lg flex">
                    <MapPinLine  size={32} color="#fab448" />
                        <span className="ml-6">Working hours</span>
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
                        <label htmlFor="">Name</label>
                        <input type="text" id="Input_1" placeholder="What is your name?" required className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div  className="flex flex-col"> 
                        <label htmlFor="">Phone number</label>
                        <input type="text" id="Input_2" placeholder="+998" required className=" bg-gray-300 py-4 px-5 border-none"  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Department</label>
                        <select  id="Input_3" required className="bg-gray-300 py-4 px-5 border-none">
                            <option value="Department">Department</option>
                            <option value="Sales department">Sales department</option>
                            <option value="Human Resource department">Human Resource department</option>
                            <option value="Financial department">Financial department</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Purchasing department">Purchasing department</option>
                            <option value="Office">Office</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="">Your question</label>
                      <textarea className="bg-gray-300 py-4 px-5 border-none" placeholder="Leave Your question . . ." id="Input_4" cols="30" rows="2" required></textarea>
                    </div>
                    <div className="sm:self-end w-full sm:w-fit text-center">
                        <div className="invisible">invisible</div>
                      <button type='submit'  className="py-4 px-20  border-none bg-[#fab448]"  loading={loading}> {loading ? "Sending..." : "Feedback"}</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact