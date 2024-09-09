import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';


function Contact()
{
    return (
        <>
            <div className="h-16 md:h-24 w-full"></div>
            <div className="my-20 m-auto w-11/12 md:w-4/5 md:flex justify-between overflow-hidden">
                <div className="mb-10 w-full md:w-2/5">
                    <p className="text-gray-700 font-bold text-[18px]">Livingstone office</p>
                    <div className="flex items-center w-56 text-gray-900 text-[15px] my-4">
                        <p className="px-4 text-[#3abef9]"><FaPhone/></p>
                        <p>0978656475</p>
                    </div>
                    <div className="flex items-center w-56 text-gray-900 text-[15px] my-4">
                        <p className="px-4 text-[#3abef9]"><FaEnvelope/></p>
                        <p>info@zamolal.com</p>
                    </div>
                    <div className="flex items-center w-56 text-gray-900 text-[15px] my-4">
                        <p className="px-4 text-[#3abef9]"><FaLocationPin/></p>
                        <p>Off Litunga road</p>                        
                    </div>
                    <div className="rounded-md h-[350px] w-full md:w-[350px] bg-gray-400 overflow-hidden">
                        {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
                            <TileLayer
                                attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS# popip. <br/> Easily customizable
                                </Popup>
                            </Marker>
                        </MapContainer> */}
                    </div>
                </div>
                {/* <div className=""></div> */}
                <div className="w-full md:w-2/5">
                    <div className="">
                        <p className="font-bold text-[16px] text-slate-700 py-2">Send us a message</p>
                        <p className="text-[14px] text-slate-500">Whether you need our services or have <br/>feedback for us, we want to hear from you.</p>
                        <form action="/">
                            <div className="py-6 text-sm">
                                <p>Full Name</p>
                                <input placeholder="Full Name" type="text" required className="w-full md:w-[300px] px-4 rounded border py-2 mb-5 border-gray-400" /><br />
                                

                                <p>Phone Number</p>
                                <input placeholder="Phone Number" type="text" required className="w-full md:w-[300px] px-4 rounded border py-2 mb-5 border-gray-400" /><br />
                                <p>Email</p>
                                <input placeholder="Email Address" type="email" required className="w-full md:w-[300px] px-4 rounded border py-2 mb-5 border-gray-400" /><br />
                                <p>Message</p>
                                <textarea resize="none" placeholder="Write your message here..." className="w-full md:w-[300px] h-32 py-1 px-4 border border-gray-400"></textarea>
                            </div>
                            <button className="py-3 w-full md:w-[300px] rounded-md bg-[#3572ef] hover:bg-sky-500 text-white">Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;