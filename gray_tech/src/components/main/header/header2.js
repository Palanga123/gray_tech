import { FaBars, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Uq(){

    // const [showContent, setShowContent] = useState(false);

    // const toggleContent = () => {
    //     // setShowContent(!showContent);
    //     document.getElementById('content').classList.toggle("hidden");
    // };

    

    return(
        <>
            <header id="text" className="w-full fixed shadow-md">
                <div className="w-full bg-[#3572ef]">
                    <div className="w-4/5 m-auto bg-transparent">
                        
                        <ul className="justify-end flex text-white font-medium items-center">
                            <p className='px-4 text-[14px]'>Socials</p>
                            |
                            <li className="px-4 py-2"><FaFacebook/></li>
                            <li className="px-4 py-2"><FaLinkedin/></li>
                            <li className="px-4 py-2"><FaInstagram/></li>
                            <li className="px-4 py-2"><FaTwitter/></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full py-2 bg-white">
                    <div className="w-4/5 m-auto bg-transparent flex justify-between h-14">
                            <div>
                                <div className="text-justify">
                                    <p className="font-semibold text-base md:text-2xl text-[#3572ef]">Zamola <span className="text-gray-600">Logistics Ltd.</span></p>
                                    <p className="text-[10px]">Clearing & Forwarding</p>
                                </div>
                            </div>    
                            <div className="flex justify-evenly text-[#3572ef] ml-3 font-semibold text-[13px]">
                                <button className="px-4 h-full underline underline-offset-8">HOME </button>
                                <button className="px-4 h-full hover:underline underline-offset-8">ABOUT </button>                       
                                <button className="px-4 h-full hover:underline underline-offset-8">SERVICES</button>
                                <button className="px-4 h-full hover:underline underline-offset-8">CONTACT US</button>
                            </div>
                            <div className="md:hidden">
                                <button className="px-3 h-full text-white border border-white rounded">
                                    <FaBars/>
                                </button>
                            </div>
                    </div>
                </div>
                
            </header>
        </>
    )
}

export default Uq;