function Hero()
{
    return (
        <>
            <div className="h-16 md:h-24 w-full"></div>
            <main id="main" className="" > 
                <div style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} >

                    <div className="w-11/12 md:w-4/5 m-auto py-[100px]" >
                        <h1 className="text-gray-200 md:text-gray-300 text-3xl md:text-4xl">We are <span class="text-blue-700 font-black">Zamola</span></h1><br />
                        <p className="text-xs md:text-base text-gray-100 w-64 md:w-96 font-semibold">
                        At Zamola Logistics Ltd, we ensure your goods are cleared and delivered swiftly and securely. Our expert team is dedicated to providing top-notch logistic solutions, ensuring every package reaches its destination on time, every time.</p>
                        <br />
                    </div>

                </div>

            </main>

        </>

    );
}

export default Hero;