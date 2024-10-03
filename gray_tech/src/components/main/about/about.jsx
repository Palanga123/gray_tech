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
                                        Zamola Logistics Limited is a proudly Zambian-owned and managed Logistic Company 
                                        headquarterd in Livingstone, Southern Zambia and operates accross four other locations. 
                                        The company was formally incorporated in the Republic of Zambia on October 6, 2009 and 
                                        we remain committed to delivering exceptional logistics solutions accross the region.

                                        <br /><br />

                                        Our mission is to provide quality services that empowers our clients smooth 
                                        operations of business. We are committed to use clearing and forwarding to sensitize 
                                        the public in the paying of taxes and provide employment to our country men. 

                                        <br /><br />

                                        Our services include comprehensive customs clearance, from final clearances to transit 
                                        declarations, all handled on behalf of our clients. While continuing to expand our capabilities 
                                        in in-transit clearances, we currently collaborate with other industry leaders through inter-agency agreements, 
                                        ensuring smooth and efficient customs procedures accross all modes.
                                    </p>
                                </div>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="w-full mx-auto py-16">
                        <p className="font-bold text-[#3572ef] mb-4 text-xl md:text-2xl">Our culture</p>
                        <p className="text-gray-800 mb-4 block md:w-1/2">This is who we are, our culture is how we believe our work must be carried out.</p>
                        <div className="flex flex-col md:flex-row-reverse justify-between items-center">

                            <div className="w-full md:w-1/2 py-3">
                                <img src={img} alt="culture" className='rounded' />
                            </div>
                            <div className="w-full md:w-1/2 m-auto">

                                <div className='md:grid grid-cols-2 gap-2 md:pr-4'>
                                    <Culture icon={<FaTools />} title="Hardworking" text="We are dedicated and persistent, always striving for excellence in every task."/>
                                    <Culture icon={<FaShieldAlt />} title="Flexible & Understanding" text="We value work-life balance and support flexibility to accommodate personal needs."/>
                                    <Culture icon={<FaComment />} title="Open & Transparent" text="We foster trust through open communication and honest feedback."/>
                                    <Culture icon={<FaChartSimple />} title="Growth & Development" text="We invest in continuous learning and career advancement for our team."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mx-auto py-16">
                        <p className="font-bold text-[#3572ef] mb-4 text-xl md:text-2xl">Our Values</p>
                        <p className="text-gray-800 mb-4 block md:w-1/2">These are the fundamental principles guiding our business decisions, actions, and company behaviors.</p>

                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="w-full md:w-1/2 py-3">
                                <img src={img} alt="culture" className='rounded md:block' />
                            </div>
                            <div className="w-full md:w-1/2 m-auto">

                                <div className='md:grid grid-cols-2 gap-2 md:pl-4'>
                                    <Culture icon={<FaHandshakeSimple />} title="Teamwork" text="We collaborate effectively, valuing each team member’s contributions and strengths."/>
                                    <Culture icon={<FaShield />} title="Trustworthy" text="We build trust through reliability, honesty, and consistent delivery of promises."/>
                                    <Culture icon={<FaCog />} title="Innovation" text="We embrace creativity and continuously seek new, better solutions."/>
                                    <Culture icon={<FaSearch />} title="Integrity" text="We uphold strong ethical standards and always act with honesty and fairness."/>
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