import { FaArrowCircleRight, FaTag } from "react-icons/fa";
import Typing from '../../images/typing.jpg';
import Truck from '../../images/truck.jpeg';
const Content = () => {
    return (
        <>
            <section className="mt-16 w-4/5 m-auto py-10">
                <div className="w-full  bg-gray-50 border border-gray-200 rounded flex items-center justify-between">
                    <div className="w-[40%] h-full">
                        <img
                            src={ Typing }
                            className="w-full h-full rounded-l"
                        />
                    </div>
                    <div className="w-3/5 px-8">
                        
                        <p className="text-[20px] font-bold py-3 text-[#3572ef]">Do Business with us and enjoy personalized clearance rates.</p>
                        <p className="">Benefit from our services and solutions designed to meet all of your shipping needs.</p>
                    
                        <div className="mt-4">
                            <button className="text-[14px] px-4 py-3 text-white rounded bg-[#3572ef] font-semibold hover:scale-105 hover:duration-500 duration-500">Reach Out</button>
                        </div>
                    </div>
                </div>
                <div className="my-20">
                    <p className="text-center text-3xl font-bold  text-gray-900 pb-10">Quick Actions</p>

                    <div className="grid grid-cols-3 gap-3 justify-between">

                        <div className="px-4 py-6 rounded-md border border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer duration-500 hover:duration-500 hover:shadow-lg hover:scale-105">
                            <div>
                                <p className="font-bold text-gray-800 text-[18px]">Get a quoatation</p>
                                <p className="text-gray-700">Request a qoutation</p>
                            </div>

                            <FaArrowCircleRight className="text-[#3abef9] text-[25px]" />
                        </div>
                        <div className="px-4 py-6 rounded-md border border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer duration-500 hover:duration-500 hover:shadow-lg hover:scale-105">
                            <div>
                                <p className="font-bold text-gray-800 text-[18px]">Track Progress</p>
                                <p className="text-gray-700">Track shippment progress</p>
                            </div>

                            <FaArrowCircleRight className="text-[#3abef9] text-[25px]" />
                        </div>
                        <div className="px-4 py-6 rounded-md border border-gray-200 bg-gray-50 flex justify-between items-center cursor-pointer duration-500 hover:duration-500 hover:shadow-lg hover:scale-105">
                            <div>
                                <p className="font-bold text-gray-800 text-[18px]">Trade & Inventory</p>
                                <p className="text-gray-700">Keep up on your stock.</p>
                            </div>

                            <FaArrowCircleRight className="text-[#3abef9] text-[25px]" />
                        </div>


                    </div>
                </div>

            </section>

            <section className="w-4/5 m-auto">
                <div className="flex items-center mb-14">
                    <div className="w-1/2">
                        <img
                            src={Truck}
                            alt="images"
                            className="rounded-md h-80"
                        />
                    </div>
                    <div className="w-1/2 px-6 ">
                        <p className="font-bold text-[24px] pb-2 text-[#3572ef]">Personalized Services</p>
                        <p className="text-[13px] w-4/5">Get personalized logistics & warehousing services with the perks of a solid infrastructure and the trust of an experienced international logistics provider.</p>
                        <button className="py-2 px-4 rounded-md text-[14px] text-white bg-[#3572ef] font-semibold mt-4">Join Us</button>
                    </div>
                </div>
                <div className="flex items-center mb-14">
                    <div className="w-1/2 px-6">
                        <p className="font-bold text-[24px] pb-2 text-[#3572ef]">E-Commerce</p>
                        <p className="text-[13px] w-4/5">Large space and infrastructure for catering to retail and e-commerce storage & distribution</p>
                        <button className="py-2 px-4 rounded-md text-[14px] text-white bg-[#3572ef] font-semibold mt-4">Join Us</button>
                    </div>
                    <div className="w-1/2 ">
                        <img
                            src={Truck}
                            alt="images"
                            className="rounded-md h-80"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/2">
                        <img
                            src={Truck}
                            alt="images"
                            className="rounded-md h-80"
                        />
                    </div>
                    <div className="w-1/2 px-6 ">
                        <p className="font-bold text-[24px] pb- text-[#3572ef]">Foreign Trade Zone</p>
                        <p className="text-[13px] w-4/5">Make the best of Miami Free Zone with experts who specialize in Free Trade Zone customs to make export/import a breeze.</p>
                        <button className="py-2 px-4 rounded-md text-[14px] text-white bg-[#3572ef] font-semibold mt-4">Join Us</button>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Content;