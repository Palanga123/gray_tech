import { FaComment, FaShieldAlt, FaTools, FaCog, FaSearch } from 'react-icons/fa';
import img from '../../images/typing.jpg';
import Culture from './culture';
import { FaChartSimple, FaHandshakeSimple, FaShield } from 'react-icons/fa6';

const About = () => {
    return (
        <>
            <div className="h-16 md:h-24 w-full"></div>
            <div className="w-11/12 md:w-4/5 mx-auto my-24">
                <div className="w-full m-auto">
                    <div className="w-4/5 md:w-1/3 m-auto">
                        <p className="font-extrabold text-2xl md:text-3xl text-center text-gray-900">
                            We help businesses of every size <span className='text-[#3572ef]'>clear there cargo</span>.
                        </p>
                       
                    </div>
                    <div className='w-full md:w-11/12 m-auto my-8'>
                        <p className="text-center text-xs">We drive economic growth throught smooth and quick border crossing.</p>
                    </div>
                    <div className="w-full mx-auto py-16">
                        <div>
                            <p className="font-bold text-[#3572ef] py-2 text-3xl md:text-2xl text-center">Our Story</p>
                            <div className=''>
                                <div className='w-full md:w-4/5 m-auto py-10'>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nesciunt magni nihil maiores odit amet non quibusdam ducimus magnam optio, sit placeat, quidem itaque nulla numquam autem officiis excepturi eius dolores. Velit eligendi eveniet temporibus deleniti facere! Delectus quos recusandae enim laudantium natus ea. Optio nisi quas voluptates officiis est! Temporibus tenetur perspiciatis at autem harum molestias facilis qui accusantium.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe fugit, doloremque libero deserunt quo, a ea accusamus perferendis provident facere magni, quidem nobis aliquam aut inventore magnam quasi! Perspiciatis iste obcaecati cupiditate cum autem necessitatibus nemo molestias, rerum vitae consectetur. Corporis quidem odit optio sed, provident totam impedit sequi.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, doloremque nihil natus ut praesentium, laboriosam eveniet voluptatibus ipsum nesciunt quia perspiciatis porro sequi fugit id fuga doloribus et, cum in iste est eius. Quisquam eaque, nihil cumque, a neque quod quas temporibus distinctio explicabo asperiores repellendus dignissimos itaque. Quas, nemo.
                                    </p>
                                </div>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="w-full mx-auto py-16">
                        <p className="font-bold text-[#3572ef] mb-4 text-xl md:text-2xl">Our culture</p>
                        <p className="text-gray-800 mb-4 block md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo labore natus iste vel.</p>
                        <div className="flex flex-col md:flex-row-reverse justify-between items-center">

                            <div className="w-full md:w-1/2 py-3">
                                <img src={img} alt="culture" className='rounded' />
                            </div>
                            <div className="w-full md:w-1/2 m-auto">

                                <div className='md:grid grid-cols-2 gap-2 md:pr-4'>
                                    <Culture icon={<FaTools />} title="Hardworking" />
                                    <Culture icon={<FaShieldAlt />} title="Flexible & Understanding" />
                                    <Culture icon={<FaComment />} title="Open & Transparent" />
                                    <Culture icon={<FaChartSimple />} title="Growth & Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mx-auto py-16">
                        <p className="font-bold text-[#3572ef] mb-4 text-xl md:text-2xl">Our Values</p>
                        <p className="text-gray-800 mb-4 block md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo labore natus iste vel.</p>

                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="w-full md:w-1/2 py-3">
                                <img src={img} alt="culture" className='rounded md:block' />
                            </div>
                            <div className="w-full md:w-1/2 m-auto">

                                <div className='md:grid grid-cols-2 gap-2 md:pl-4'>
                                    <Culture icon={<FaHandshakeSimple />} title="Teamwork" />
                                    <Culture icon={<FaShield />} title="Trustworthy" />
                                    <Culture icon={<FaCog />} title="Innovation" />
                                    <Culture icon={<FaSearch />} title="Integrity" />
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