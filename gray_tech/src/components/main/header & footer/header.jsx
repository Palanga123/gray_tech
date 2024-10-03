import { FaBars, FaFacebook, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        return setShowContent(!showContent);
    };

    
    const socials = [
        {id:1, name:<FaFacebook/>, href:"https://facebook.com/profile.php?id=61566203441026"}, 
        {id:2, name:<FaLinkedin/>, href:"https://linkedin.com/company/zamola-logistics-limitted"}, 
        {id:3, name:<FaEnvelope/>, href:"mailto:zamolall@yahoo.com"}, 
    ]

    const links = [
        {id:1, name:"Home", href:"/"}, 
        {id:2, name:"About", href:"/about"}, 
        {id:3, name:"Services", href:"/services"}, 
        {id:4, name:"Contact Us", href:"/contact"}
    ]

    const socialItems = socials.map(social =>   
        <NavLink key={social.id} to={social.href}>
            <li className="px-2 md:px-4 py-2">{social.name}</li>
        </NavLink>)


    const linkItems = links.map(link => 
        <NavLink key={link.id} to={link.href}>
            <button className="px-4 h-full hover:underline underline-offset-8 uppercase">{link.name}</button>
        </NavLink>)

    const mobileLinkItems = links.map(link => 
        <NavLink key={link.id} to={link.href}>
            <button className="text-left block px-4 py-3 w-full h-full uppercase">{link.name}</button>
        </NavLink>)

    return(
        <>
            <header id="text" className="w-full fixed shadow-sm bg-white">
                <div className="hidden md:block w-full bg-[#1352cf]">
                    <div className="w-3/5 md:w-4/5 m-auto bg-transparent">
                        
                        <ul className="justify-between md:justify-end flex text-white font-medium items-center">
                            <p className='hidden md:block px-4 text-[14px]'>Socials</p>                            
                            {socialItems}
                        </ul>
                    </div>
                </div>
                <div className="w-full py-2 bg-white">
                    <div className="w-11/12 md:w-4/5 m-auto bg-transparent flex justify-between h-14 items-center">
                            <div>
                               <NavLink to="/">
                                    <div className="text-justify">
                                        <p className="font-semibold text-[14px] sm:text-lg lg:text-2xl text-[#1352cf]">Zamola <span className="text-gray-600">Logistics Ltd.</span></p>
                                        <p className="text-[8px] md:text-[10px]">Clearing & Forwarding Agency</p>
                                    </div>
                               </NavLink>
                            </div>    
                            <div className="hidden md:block justify-evenly text-[#1352cf] ml-3 font-semibold text-[13px]">
                                {linkItems}
                            </div>
                            <div className="block md:hidden">
                                <button className="p-3 border border-gray-500 rounded text-gray-500" onClick={() => toggleContent()}>
                                    {!showContent ? <FaBars/>: <FaX/>}
                                </button>
                            </div>
                    </div>
                </div>
                {showContent ? 
                    <div className="block shadow w-full bg-white rounded-b-md p-4 text-[#1352cf] font-semibold text-[13px]">
                       {mobileLinkItems}
                    </div>
                    :
                    ""
                }
                
            </header>
            <div>
                
            </div>
        </>
    )
}

export default Header;