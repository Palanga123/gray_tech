import { FaComment, FaShieldAlt, FaTools } from 'react-icons/fa';
import img from '../../images/typing.jpg';
import Culture from './culture';
import { FaChartSimple } from 'react-icons/fa6';


const About = () => {
    return (
        <>
            <div className="h-16 md:h-24 w-full"></div>
            <div className="w-11/12 md:w-4/5 mx-auto py-16">
                <div className="w-full m-auto">
                    <div className="w-full md:w-1/3 m-auto">
                        <p className="font-extrabold text-2xl md:text-3xl text-center text-gray-700">
                            We help businesses of every size clear there cargo.
                        </p>
                        <p className="text-center"></p>
                        {/* <button className="py-2 px-4 rounded bg-[#1352cf] text-white font-semibold">Join Us</button> */}
                    </div>
                    <div className="w-full mx-auto py-16">
                        <div>
                            <p className="font-bold text-gray-800 py-2 text-xl md:text-2xl">Who are we?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nesciunt magni nihil maiores odit amet non quibusdam ducimus magnam optio, sit placeat, quidem itaque nulla numquam autem officiis excepturi eius dolores. Velit eligendi eveniet temporibus deleniti facere! Delectus quos recusandae enim laudantium natus ea. Optio nisi quas voluptates officiis est! Temporibus tenetur perspiciatis at autem harum molestias facilis qui accusantium.</p>
                        </div>
                    </div>
                    <div className="w-full mx-auto py-16">
                        <p className="font-bold text-gray-800 mb-4 text-xl md:text-2xl">Our culture</p>
                        <p className="text-gray-800 mb-4 block md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo labore natus iste vel.</p>
                        <div className="md:flex justify-between items-center">
                            <div className="hidden w-full">
                                <img src={img} alt="culture" className='rounded' />
                            </div>
                            <div className="w-full md:w-1/2">

                                <div className='md:grid grid-cols-2 gap-2 pr-4'>
                                    <Culture icon={<FaTools />} title="Hardworking"/>
                                    <Culture icon={<FaShieldAlt />} title="Flexible & Understanding"/>
                                    <Culture icon={<FaComment />} title="Open & Transparent"/>
                                    <Culture icon={<FaChartSimple />} title="Growth & Development"/>
                                </div>
                            </div>
                            <div className="hidden md:block w-full md:w-1/2">
                                <img src={img} alt="culture" className='rounded' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mx-auto py-16">
                        <p className="font-bold text-gray-800 mb-4 text-xl md:text-2xl">Our Values</p>
                        <p className="text-gray-800 mb-4 block md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo labore natus iste vel.</p>

                        <div className="flex justify-between items-center">
                            <div className="w-1/2">
                                <img src={img} alt="culture" className='rounded' />
                            </div>
                            <div className="w-1/2">

                                <div className='grid grid-cols-2 gap-2 pl-4'>
                                    <Culture icon={<FaTools />} />
                                    <Culture icon={<FaTools />} />
                                    <Culture icon={<FaTools />} />
                                    <Culture icon={<FaTools />} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;