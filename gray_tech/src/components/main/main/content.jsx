import { FaArrowCircleRight } from "react-icons/fa";
import Typing from '../../images/typing.jpg';
import Truck from '../../images/truck.jpeg';
import Hero from "./intro";
import List from "../testimonials/testimonials";
const Main = () => {
    return (
        <>
            {/* hero section */}
            <Hero/>
            <section className="mt-16 w-11/12 md:w-4/5 m-auto py-10">
                <div className="md:h-64 w-full bg-gray-50 border border-gray-200 rounded md:flex items-center md:justify-between overflow-hidden">
                    <div className="w-full md:w-[40%] h-full">
                        <img
                            src={ Typing }
                            className="w-full md:h-full md:rounded-l"
                            alt="woman typing"
                        />
                    </div>
                    <div className="h-full w-full md:w-3/5">
                        
                        <div className="px-8">
                            <p className="text-[16px] md:text-[20px] font-bold py-3 text-[#1352cf]">Do Business with us and enjoy personalized clearance rates.</p>
                            <p className="text-sm md:text-base">Benefit from our services and solutions designed to meet all of your shipping needs.</p>
                        
                            <div className="my-3">
                                <button className="text-[14px] px-4 py-3 text-white rounded bg-[#1352cf] font-semibold hover:scale-105 hover:duration-500 duration-500">Reach Out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-20">
                    <p className="text-center text-[18px] md:text-3xl font-bold  text-gray-900 pb-10">Quick Actions</p>

                    <div className="md:grid grid-cols-3 gap-3 md:justify-between">

                        <div className="px-4 py-6 w-full my-4 rounded-md border border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer duration-500 hover:duration-500 hover:shadow-lg hover:scale-105">
                            <div>
                                <p className="font-bold text-gray-800 text-[14px] md:text-[18px]">Get a quoatation</p>
                                <p className="text-sm md:text-base text-gray-700">Request a qoutation</p>
                            </div>

                            <FaArrowCircleRight className="text-[#3abef9] text-[25px]" />
                        </div>
                        <div className="px-4 py-6 w-full my-4 rounded-md border border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer duration-500 hover:duration-500 hover:shadow-lg hover:scale-105">
                            <div>
                                <p className="font-bold text-gray-800 text-[14px] md:text-[18px]">Track Progress</p>
                                <p className="text-sm md:text-base text-gray-700">Track shippment progress</p>
                            </div>

                            <FaArrowCircleRight className="text-[#3abef9] text-[25px]" />
                        </div>
                        <div className="px-4 py-6 w-full my-4 rounded-md border border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer duration-500 hover:duration-500 hover:shadow-lg hover:scale-105">
                            <div>
                                <p className="font-bold text-gray-800 text-[14px] md:text-[18px]">Trade & Inventory</p>
                                <p className="text-sm md:text-base text-gray-700">Keep up on your stock.</p>
                            </div>

                            <FaArrowCircleRight className="text-[#3abef9] text-[25px]" />
                        </div>


                    </div>
                </div>

            </section>

            <section className="w-11/12 md:w-4/5 m-auto">
                <div className="md:flex items-center mb-14">
                    <div className="w-full md:w-1/2">
                        <img
                            src={Truck}
                            alt="images"
                            className="rounded-md h-80"
                        />
                    </div>
                    <div className="w-full md:w-1/2 py-4 md:px-6 ">
                        <p className="font-bold text-[20px] md:text-[24px] pb-2 text-[#1352cf]">Personalized Services</p>
                        <p className="text-[13px] w-4/5">Get personalized logistics & warehousing services with the perks of a solid infrastructure and the trust of an experienced international logistics provider.</p>
                        <button className="py-2 px-4 rounded-md text-[14px] text-white bg-[#1352cf] font-semibold mt-4">Join Us</button>
                    </div>
                </div>
                <div className="md:flex items-center mb-14">
                    <div className="hidden md:block w-full md:w-1/2 py-4 md:px-6">
                        <p className="font-bold text-[20px] md:text-[24px] pb-2 text-[#1352cf]">E-Commerce</p>
                        <p className="text-[13px] w-4/5">Large space and infrastructure for catering to retail and e-commerce storage & distribution</p>
                        <button className="py-2 px-4 rounded-md text-[14px] text-white bg-[#1352cf] font-semibold mt-4">Join Us</button>
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <img
                            src={Truck}
                            alt="images"
                            className="rounded-md h-80"
                        />
                    </div>
                    <div className="md:hidden w-full md:w-1/2 py-4 md:px-6">
                        <p className="font-bold text-[20px] md:text-[24px] pb-2 text-[#1352cf]">E-Commerce</p>
                        <p className="text-[13px] w-4/5">Large space and infrastructure for catering to retail and e-commerce storage & distribution</p>
                        <button className="py-2 px-4 rounded-md text-[14px] text-white bg-[#1352cf] font-semibold mt-4">Join Us</button>
                    </div>
                    
                </div>
                <div className="md:flex items-center">
                    <div className="w-full md:w-1/2">
                        <img
                            src={Truck}
                            alt="images"
                            className="rounded-md h-80"
                        />
                    </div>
                    <div className="w-full md:w-1/2 py-4 md:px-6 ">
                        <p className="font-bold text-[20px] md:text-[24px]  text-[#1352cf]">Foreign Trade Zone</p>
                        <p className="text-[13px] w-4/5">Make the best of Miami Free Zone with experts who specialize in Free Trade Zone customs to make export/import a breeze.</p>
                        <button className="py-2 px-4 rounded-md text-[14px] text-white bg-[#1352cf] font-semibold mt-4">Join Us</button>
                    </div>
                </div>

            </section>

            {/* Testimonial page */}
            <List/>
        </>
    );
}

export default Main;