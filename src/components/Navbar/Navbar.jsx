/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/favicon.svg'
import { FacebookLogo, InstagramLogo, TelegramLogo, PhoneCall, List, X} from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const { t, i18n } = useTranslation();
    const handlechange = (event) => {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage)
    }

    let Links =[
        {name:`${t(`navAbout`)}`, link:"/about", id:1},
        {name:`${t("navProjects")}`, link:"/projects", id:2},
        {name:`${t("navCareer")}`, link:"/career", id:3},
        {name:`${t("navNews")}`, link:"/news", id:4},
        {name:`${t("navContacts")}`, link:"/contacts", id:5},
      ];
      
      let [menu, setMenu] = useState(0);
      let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md  bg-transparent  !mx-auto block  w-[100%] max-w-[1920px]  top-0 '>
           <div className='lg:flex items-center justify-between bg-white 2xl:py-10 xl:py-7 lg:py-5 py-3 md:px-10 px-7'>
            {/* logo section */}
            <Link to={"/"}>
                <div className='font-bold text-lg cursor-pointer flex items-center gap-1 xl:pl-16  2xl:pl-28' onClick={()=>setOpen(false)}>           
                    <img src={Logo} alt="" />
                    <h1>DISCOVER <br /> INVEST</h1>
                </div>
            </Link>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
                {
                    open ? <X size={24} weight="bold" /> :<List size={24} weight="bold" />
                }
            </div>
            {/* linke items */}
            <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-590px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 lg:my-0 font-muli my-8 xl:text-lg' key={link.name}
                      onClick={()=>setOpen(false)}
                    >
                      
                        <a href={link.link} className={`text-gray-800 hover:text-blue-400 duration-500 ${menu == link.id ? "border-b-2 border-fuchsia-600":""}`} onClick={()=>setMenu(link.id)}> 
                        <NavLink to={link.link}>
                           {link.name}
                        </NavLink>
                        </a>
                        
                    </li>))
                }
                 
               
                    <li className='md:ml-8 lg:my-0  my-7 text-lg' onClick={()=>setOpen(false)}>
                        <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push" target="_blank">
                            <FacebookLogo className='hover:text-[#fab448]' size={21} weight="bold" />
                        </a>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 text-lg' onClick={()=>setOpen(false)}>
                        <a href="https://www.instagram.com/discover_invest/?igshid=ZDdkNTZiNTM%3D" target="_blank">
                            <InstagramLogo className='hover:text-[#fab448]'  size={21} weight="bold" />
                        </a>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 text-lg' onClick={()=>setOpen(false)}>
                        <a href="https://t.me/discovery_invest" target="_blank">
                            <TelegramLogo className='hover:text-[#fab448]'  size={21} weight="bold" />
                        </a>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 xl:text-lg xl:font-medium' >
                       <select  className='border-none' name='Lng' id='lng' onChange={handlechange}>
                         <option className='bg-[#fab448] hover:bg-[#fab448]' value="uz">UZ</option>
                         <option className='bg-[#fab448]'  value="en">ENG</option>
                         <option className='bg-[#fab448]' value="ru">RU</option>
                       </select>
                    </li>
                    <li className='md:ml-8 lg:my-0  my-7 xl:text-lg' onClick={()=>setOpen(false)}>
                        <a href="#" className='xl:font-bold'>+998 (71) 288 88 88 </a>
                    </li>
                    <li className='md:ml-8 2xl:pr-28 xl:pr-16 lg:my-0 ' onClick={()=>setOpen(false)}>
                        <a href="#" className='font-bold '><PhoneCall className='hover:text-[#fab448]'  size={24} weight="fill"   /> </a>
                    </li>
              
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;