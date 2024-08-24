import { FaBars } from "react-icons/fa6";

function Header()
{
    return (
        <>
            <header className="h-[60px] md:h-24 w-full bg-white-50 shadow">
                <div className="w-11/12 md:w-4/5 h-full m-auto flex justify-between items-center text-gray-800 shadow-b-md">
                    <div className="text-justify">
                        <p className="font-semibold text-base md:text-2xl text-blue-600">Zamola <span className="text-gray-600">Logistics Ltd.</span></p>
                        <p className="text-[10px]">Clearing & Forwarding</p>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center justify-even text-black">
                            <li className="px-2 underline underline-offset-4 font-semibold text-blue-600">Home</li>
                            <li className="px-2">About</li>
                            <li className="px-2">FAQ's</li>
                            <li className="px-2">Contact Us</li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button className="rounded text-gray-700 p-2 border border-gray-900 font bold"><FaBars /></button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;