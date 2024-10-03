import Typing from '../../images/typing.jpg';

const Services = () => {

    return (
        <>
            <div className='h-36'></div>
            <p className='font-bold text-gray-800 text-2xl mt-10 text-center'>Our Services</p>
            
            
            <div className='w-11/12 md:w-4/5 m-auto sm:grid grid-cols-2 gap-5 my-20'>
                <div className="my-5 w-full bg-gray-50 border border-gray-200 rounded overflow-hidden p-8">

                    <p className="text-[16px] md:text-[20px] font-bold py-2 text-[#1352cf]">Cargo Clearance.</p>
                    <div className="w-full py-4">
                        <p className="text-sm md:text-base">We ensuring your goods pass through customs smoothly and efficiently. Benefit from our clearance services which are speedy and effecient. Don't worry about clearing your cargo, leave it to us.</p>

                        <div className="mt-8">
                            <button className="text-[14px] px-4 py-3 text-white rounded bg-[#1352cf] font-semibold hover:scale-105 hover:duration-500 duration-500">Get Quote</button>
                        </div>
                    </div>
                </div>
                <div className="my-5 w-full bg-gray-50 border border-gray-200 rounded overflow-hidden p-8">

                    <p className="text-[16px] md:text-[20px] font-bold py-2 text-[#1352cf]">Cargo Forwarding</p>
                    <div className="w-full py-4">
                        <p className="text-sm md:text-base">We coordinating the shipment of your goods from origin to destination efficiently so that you do not worry about a thing. Don't worry about forwarding your cargo, leave it to us.</p>

                        <div className="mt-8">
                            <button className="text-[14px] px-4 py-3 text-white rounded bg-[#1352cf] font-semibold hover:scale-105 hover:duration-500 duration-500">Get Quote</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default Services;