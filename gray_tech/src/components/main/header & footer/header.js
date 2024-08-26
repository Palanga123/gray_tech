import { FaBars, FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        return setShowContent(!showContent);
    };

    let bars = <FaBars/>;
    let x = <FaX/>
    

    return(
        <>
            <header id="text" className="w-full fixed shadow-md bg-white">
                <div className="w-full bg-[#3572ef]">
                    <div className="w-3/5 md:w-4/5 m-auto bg-transparent">
                        
                        <ul className="justify-between md:justify-end flex text-white font-medium items-center">
                            <p className='hidden md:block px-4 text-[14px]'>Socials</p>
                            
                            <li className="px-2 md:px-4 py-2"><FaFacebook/></li>
                            <li className="px-2 md:px-4 py-2"><FaLinkedin/></li>
                            <li className="px-2 md:px-4 py-2"><FaInstagram/></li>
                            <li className="px-2 md:px-4 py-2"><FaTwitter/></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full py-2 bg-white">
                    <div className="w-11/12 md:w-4/5 m-auto bg-transparent flex justify-between h-14 items-center">
                            <div>
                                <div className="text-justify">
                                    <p className="font-semibold text-[14px] sm:text-lg lg:text-2xl text-[#3572ef]">Zamola <span className="text-gray-600">Logistics Ltd.</span></p>
                                    <p className="text-[8px] md:text-[10px]">Clearing & Forwarding</p>
                                </div>
                            </div>    
                            <div className="hidden md:block justify-evenly text-[#3572ef] ml-3 font-semibold text-[13px]">
                                <button className="px-4 h-full underline underline-offset-8">HOME </button>
                                <button className="px-4 h-full hover:underline underline-offset-8">ABOUT </button>                       
                                <button className="px-4 h-full hover:underline underline-offset-8">SERVICES</button>
                                <button className="px-4 h-full hover:underline underline-offset-8">CONTACT US</button>
                            </div>
                            <div className="block md:hidden">
                                <button className="p-3 border border-gray-500 rounded text-gray-500" onClick={() => toggleContent()}>
                                    {!showContent ? bars : x}
                                </button>
                            </div>
                    </div>
                </div>
                {showContent ? 
                    <div className="duration-500 block shadow w-full bg-white rounded-b-md p-4 text-[#3572ef] font-semibold text-[13px]">
                        <button className="text-left block px-4 py-3 w-full h-full">HOME </button>
                        <button className="text-left block px-4 py-3 w-full h-full">ABOUT </button>                       
                        <button className="text-left block px-4 py-3 w-full h-full">SERVICES</button>
                        <button className="text-left block px-4 py-3 w-full h-full">CONTACT US</button>
                    </div>
                    :
                    ""
                }
                
            </header>
        </>
    )
}

export default Header;