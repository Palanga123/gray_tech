import { FaBars, FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        return setShowContent(!showContent);
    };

    let bars = <FaBars/>
    let x = <FaX/>
    
    const socials = [
        {id:1, name:<FaFacebook/>, href:"#"}, 
        {id:2, name:<FaLinkedin/>, href:"#"}, 
        {id:4, name:<FaInstagram/>, href:"#"}, 
        {id:4, name:<FaTwitter/>, href:"#"},
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
            <header id="text" className="w-full fixed shadow-md bg-white">
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
                                <div className="text-justify">
                                    <p className="font-semibold text-[14px] sm:text-lg lg:text-2xl text-[#1352cf]">Zamola <span className="text-gray-600">Logistics Ltd.</span></p>
                                    <p className="text-[8px] md:text-[10px]">Clearing & Forwarding</p>
                                </div>
                            </div>    
                            <div className="hidden md:block justify-evenly text-[#1352cf] ml-3 font-semibold text-[13px]">
                                {linkItems}
                            </div>
                            <div className="block md:hidden">
                                <button className="p-3 border border-gray-500 rounded text-gray-500" onClick={() => toggleContent()}>
                                    {!showContent ? bars : x}
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
        </>
    )
}

export default Header;