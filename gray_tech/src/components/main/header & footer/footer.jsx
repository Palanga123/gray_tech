import { FaWhatsapp, FaEnvelope, FaFacebook, FaPhone, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6"

const Footer = () => {

    const handleClick = (ref) => {
        window.location.href=ref;
    }

    return (
        <>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="h-10 md:h-14 fixed right-4 bottom-6 w-full flex flex-row-reverse">
                    <a href="https://wa.me/+260965450823?text=Hi,%20can%20I%20find%20out%20more%20about%20clearing%20and%20forwarding?">
                        <div className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-green-500 hover:bg-green-600 duration-500">
                            <button className="h-full w-full text-white bg-transparent px-3 md:px-[18px] rounded-full md:text-xl"><FaWhatsapp /></button>
                        </div>
                    </a>
                </div>
            </div>

            <footer className="bottom-0 text-black w-full bg-gray-50">

                <div className="w-11/12 mx-auto">
                    {/* <hr className="border-gray-400"/> */}
                    <div className="w-full md:grid grid-cols-3 gap-2 py-6">
                        <div className="w-full md:w-1/2 mx-auto">

                            <div>
                                <NavLink to="/">
                                    <div className="">
                                        <p className="font-semibold text-[14px] sm:text-lg text-[#1352cf]">Zamola <span className="text-gray-600">Logistics Ltd.</span></p>
                                        <p className="text-[8px] md:text-[10px]">Clearing & Forwarding</p>
                                    </div>
                                </NavLink>
                            </div>

                            <div class="flex h-10 mb-2 text-center w-full mt-10">
                                <button className="h-10 w-10 border rounded-full mr-2 bg-gray-300" onClick={() => handleClick('https://facebook.com/profile.php?id=61566203441026')}><FaFacebook className="m-auto" /></button>
                                <button className="h-10 w-10 border rounded-full mx-2 bg-gray-300" onClick={() => handleClick('https://linkedin.com/company/zamola-logistics-limitted')}><FaLinkedin className="m-auto" /></button>
                                <button className="h-10 w-10 border rounded-full mx-2 bg-gray-300" onClick={() => handleClick('mailto:zamolall@yahoo.com')}><FaEnvelope className="m-auto" /></button>
                            </div>
                        </div>
                        <div className="w-full text-sm  pt-20 md:pt-0">
                            {/* <div className="hidden md:block w-2/3"></div> */}
                            <div className="md:pl-20">
                                <p className="font-semibold text-[16px] uppercase">Useful links</p>
                                <NavLink to="/"><p className="py-2">Home</p></NavLink>
                                <NavLink to="/services"><p className="py-2">Services</p></NavLink>
                                <NavLink to="/about"><p className="py-2">About</p></NavLink>
                                <NavLink to="/contact"><p className="py-2">Contact Us</p></NavLink>
                            </div>
                        </div>
                        <div className='mx-auto py-20 md:py-0'>
                            <p className='font-semibold'>CONTACT US</p>
                            <div className="">
                                <div className='flex items-center' onClick={() => handleClick("tel:+260977450823")}>
                                    <button className='pr-4 py-4 text-[#1352cf]'><FaPhone /></button>
                                    <p className="text-sm">+260 977450823</p>
                                </div>

                                <div className='w-11/12 m-auto h-[1px] bg-gray-200'></div>

                                <div className='flex items-center' onClick={() => handleClick("tel:+260965450823")}>
                                    <button className='pr-4 py-4 text-[#1352cf]'><FaPhone /></button>
                                    <p className="text-sm">+260 965450823</p>
                                </div>

                                <div className='w-11/12 m-auto h-[1px] bg-gray-200'></div>

                                <div className='flex items-center' onClick={() => handleClick("mailto:zamolall@yahoo.com")}>
                                    <button className='pr-4 py-4 text-[#1352cf]'><FaEnvelope /></button>
                                    <p className="text-sm">zamolall@yahoo.com</p>
                                </div>

                                <div className='w-11/12 m-auto h-[1px] bg-gray-200'></div>

                                <div className='flex items-center'>
                                    <button className='pr-4 py-4 text-[#1352cf]'><FaLocationDot /></button>
                                    <p className="text-sm">Plot 217/215, Limulunga Road, Livingstone, Zambia</p>
                                </div>
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