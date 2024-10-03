import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
// import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';


function Contact()
{
    return (
        <>
            <div className="h-16 md:h-24 w-full"></div>
            <div className="my-20 m-auto w-11/12 md:w-4/5 flex flex-col md:flex-row justify-between overflow-hidden">
                <div className="mb-10 w-full">
                    <p className="text-gray-700 font-bold text-[18px]">Headquarters - Livingstone office</p>
                    <div className="flex items-center w-56 text-gray-900 text-[15px] my-4">
                        <p className="px-4 text-[#1352cf]"><FaPhone/></p>
                        <p>0977450823</p>
                    </div>
                    <div className="flex items-center w-56 text-gray-900 text-[15px] my-4">
                        <p className="px-4 text-[#1352cf]"><FaPhone/></p>
                        <p>0965450823</p>
                    </div>
                    <div className="flex items-center w-56 text-gray-900 text-[15px] my-4">
                        <p className="px-4 text-[#1352cf]"><FaEnvelope/></p>
                        <p>zamolall@yahoo.com</p>
                    </div>
                    <div className="flex items-center w-56 text-gray-900 text-[15px] my-4">
                        <p className="px-4 text-[#1352cf]"><FaLocationPin/></p>
                        <p>Plot #217/215, Limulunga Road, Livingstone, Zambia</p>                        
                    </div>
                    
                </div>
                <div className="rounded-md h-[350px] w-full md:w-[950px] bg-gray-400 overflow-hidden">
                        <MapContainer center={[-17.854740, 25.854040]} zoom={14} scrollWheelZoom={false} className="h-full w-full">
                            <TileLayer
                                attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-17.854740, 25.854040]}>
                                <Popup>
                                    This is where our office is <br/>
                                </Popup>
                            </Marker>
                        </MapContainer>
                </div>
            </div>
        </>
    );
}

export default Contact;