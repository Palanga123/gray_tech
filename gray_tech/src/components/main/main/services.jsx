import Typing from '../../images/typing.jpg';

const Services = () => {
    
    return (
        <>
            <div className="md:h-64 w-full bg-gray-50 border border-gray-200 rounded md:flex items-center md:justify-between overflow-hidden">
                <div className="w-full md:w-[40%] h-full">
                    <img
                        src={Typing}
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
        </>
    );

}

export default Services;