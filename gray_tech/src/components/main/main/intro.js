function Hero()
{
    return (
        <>
            <div className="h-20 md:h-24 w-full"></div>
            <main id="main" className="" > 
                <div style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} >

                    <div className="w-4/5 m-auto py-[100px]" >
                        <h1 className="text-gray-200 md:text-gray-300 text-3xl md:text-5xl">Lorem ipsum <span class="text-sky-500 md:text-blue-700 font-black">amet</span></h1><br /><br />
                        <p className="text-sm md:text-base text-gray-100 md:w-96 font-semibold">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Perspiciatis natus
                            laboriosam atque necessitatibus repellat
                            maiores accusamus, quas velit qui
                            incidunt magni, quisquam ipsum, ea temporibus!</p>
                        <br />
                        {/* <button className="text-sm md:text-base text-white rounded-full bg-sky-500 hover:bg-sky-600 py-2 px-4 md:px-6">Join Us</button> */}
                    </div>

                </div>

            </main>

        </>

    );
}

export default Hero;