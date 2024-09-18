import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="h-10 md:h-14 fixed right-4 bottom-6 w-full flex flex-row-reverse">
                    <a href="https://wa.me/+260765735764?text=Hi,%20can%20I%20find%20out%20more%20about%20clearing%20and%20forwarding?">
                        <div className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-green-500 hover:bg-green-600 duration-500" onClick={Location.href="https://facebook.com"}>
                            <button className="h-full w-full text-white bg-transparent px-3 md:px-[18px] rounded-full md:text-xl"><FaWhatsapp/></button>
                        </div>
                   </a>
                </div>  
            </div>
            
            <footer className="bottom-0 text-black w-full">    
                          
                <div className="w-11/12 md:w-4/5 m-auto">
                    {/* <hr className="border-gray-400"/> */}
                    <div className="w-full items-center flex md:flex-row flex-col-reverse justify-between py-6">
                        <div className="w-full md:w-1/2 m-auto">

                            <div>
                                <NavLink to="/">
                                    <div className="">
                                        <p className="font-semibold text-[14px] sm:text-lg text-[#1352cf]">Zamola <span className="text-gray-600">Logistics Ltd.</span></p>
                                        <p className="text-[8px] md:text-[10px]">Clearing & Forwarding</p>
                                    </div>
                                </NavLink>
                            </div>

                            <div class="flex h-10 mb-2 text-center w-full mt-10">
                                <button className="h-10 w-10 border rounded-full mr-2 bg-gray-300" onClick="location.href='https://www.facebook.com/profile.php?id=100092004857675'"><FaFacebook className="m-auto" /></button>
                                <button className="h-10 w-10 border rounded-full mx-2 bg-gray-300" onClick="location.href='https://twitter.com/Geocademy_'"><FaTwitter className="m-auto" /></button>
                                <button className="h-10 w-10 border rounded-full mx-2 bg-gray-300" onClick="location.href='https://instagram.com/geocademyedu'"><FaInstagram className="m-auto" /></button>
                                <button className="h-10 w-10 border rounded-full mx-2 bg-gray-300" onClick="location.href='https://instagram.com/geocademyedu'"><FaEnvelope className="m-auto" /></button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-sm md:flex pb-10 md:pb-0">
                            <div className="hidden md:block w-2/3"></div>
                                <div className="w-1/3">
                                <p className="font-bold text-[16px] py-2">Useful links</p>
                                <NavLink to="/"><p className="py-2">Home</p></NavLink>
                                <NavLink to="/services"><p className="py-2">Services</p></NavLink>
                                <NavLink to="/about"><p className="py-2">About</p></NavLink>
                                <NavLink to="/contact"><p className="py-2">Contact Us</p></NavLink>
                            </div>
                        </div>
                        
                    </div>
                    {/* <hr className="border-gray-400"/> */}
                </div>
                <p className="text-center font-semibold text-sm text-white py-4 bg-[#1352cf]">&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </footer>
        </>
    );
};

export default Footer;