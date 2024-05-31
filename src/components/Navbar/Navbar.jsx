/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Logo from '../../assets/favicon.svg'
import { FacebookLogo, InstagramLogo, TelegramLogo, PhoneCall, List, X} from "@phosphor-icons/react";
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        {name:"About",link:"/"},
        {name:"Projects",link:"/"},
        {name:"Career",link:"/"},
        {name:"News",link:"/"},
        {name:"Contacts",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md fixed z-[1] bg-current   w-full top-0 left-0'>
           <div className='lg:flex items-center justify-between bg-white py-10 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-lg cursor-pointer flex items-center gap-1 xl:pl-16  2xl:pl-28'>
                <img src={Logo} alt="" />
                <h1>DISCOVER <br /> INVEST</h1>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
                {
                    open ? <X size={24} weight="bold" /> :<List size={24} weight="bold" />
                }
            </div>
            {/* linke items */}
            <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 lg:my-0  my-8 xl:text-lg'>
                      
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'> 
                            {link.name}
                        </a>
                        
                    </li>))
                }
                 
               
                    <li className='md:ml-8 lg:my-0  my-7 text-lg'>
                        <a href="#"><FacebookLogo size={21} weight="bold" /></a>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 text-lg'>
                        <a href="#"><InstagramLogo size={21} weight="bold" /></a>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 text-lg'>
                        <a href="#"><TelegramLogo size={21} weight="bold" /></a>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 xl:text-lg xl:font-medium'>
                       <select name="" id="" className='border-none '>
                         <option className='bg-[#fab448] hover:bg-[#fab448]' value="">UZ</option>
                         <option className='bg-[#fab448]' value="">ENG</option>
                         <option className='bg-[#fab448]' value="">RU</option>
                       </select>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 xl:text-lg'>
                        <a href="#" className='xl:font-bold'>+998 (71) 288 88 88 </a>
                    </li>
                    <li className='md:ml-8 2xl:pr-28 xl:pr-16 lg:my-0  '>
                        <a href="#" className='font-bold '><PhoneCall size={21} weight="fill" color='balck' /> </a>
                    </li>
              
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;