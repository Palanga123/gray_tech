import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return(
        <>
            <footer className="bottom-0 bg-[#1352cf] w-full p-4 md:p-8 text-white">
                <div className="grid md:grid-cols-2 gap-3">
                        <div className="">
                            <p>You do not need to worry about clearing your cargo. <br /> We are reliable.</p><br/><br/>
                            <p><i>"Zamola. Here for you"</i></p><br/>
                            
                            
                            
                        </div>
                        <div>
                            <p className="text-2xl font-semibold mb-2">Contact Us</p>
                            <p className="flex items-center"><FaPhone className="text-[18px] mr-3"/> <a href="tel:0765735764">+260 734 123 123</a></p>
                            <p  className="flex items-center  mt-6"><FaEnvelope className="text-[18px] mr-3"/> <a href="mailto:geocademyedu@gmail.com">zamola@gmail.com</a></p><br/>
                            <div class="flex h-10 w-full mb-2 justify-evenly">
                                <button className="p-4 text-[26px] rounded-md text-center" onClick = "location.href='https://www.facebook.com/profile.php?id=100092004857675'"><FaFacebook/></button> 
                                <button className="p-4 text-[26px] rounded-md text-center" onClick = "location.href='https://twitter.com/Geocademy_'"><FaTwitter/></button> 
                                <button className="p-4 text-[26px] rounded-md text-center" onClick = "location.href='https://instagram.com/geocademyedu'"><FaInstagram/></button> 
                            </div>
                        </div>
                    </div><br/><br/>
                    <p className="text-center font-semibold">Zamola Logistics Limitted <br/>2024 All Rights Reserved</p>
            </footer>
        </>
    );
};

export default Footer;