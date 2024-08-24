import mike_banda from "../../images/download.jpeg";
import Testimonials from "./testimonial_data.js";

function List()
{

    const test = [
        {
            id: 1,
            name: "Mike Banda",
            position: "Bolore CEO",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero maxime optio accusamus sint! Culpa hic incidunt accusamus exercitationem fuga.",
            alttext: "Mike Banda",
            image: mike_banda,
        },
        {
            id: 2,
            name: "Loyd Simfunkwe",
            position: "Quick Transporters CEO",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero maxime optio accusamus sint! Culpa hic incidunt accusamus exercitationem fuga.",
            alttext: "Loyd Simfujnkwe",
            image: mike_banda,
        },
        {
            id: 3,
            name: "Johnson Siame",
            position: "Rational Consumer",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero maxime optio accusamus sint! Culpa hic incidunt accusamus exercitationem fuga.",
            alttext: "Loyd Simfujnkwe",
            image: mike_banda,
        },
    ]

    return (
        <>
        
        <div className="my-20 m-auto sm:w-3/5 md:w-4/5 w-11/12">
            
            <div className="text-center my-10">
                <p className="text-gray-800 font-bold text-3xl">Testimonials</p>
                <p className="text-[#3572ef] font-semibold">Reviews from those we have served.</p>
            </div>

            <div className="w-full md:grid grid-cols-3 gap-2 m-auto justify-evenly items-center">
                {test.map((e) => (
                    <div to={'/testimonial_data' + e.id}>
                        <Testimonials name={e.name} position={e.position} text={e.text} image={e.image} alttext={e.alttext}></Testimonials>
                    </div>
                ))}                
            </div>

            <div className="my-10 text-center">
                <button className="py-2 px-4 rounded-full bg-sky-500 text-white shadow-md">See More</button>
            </div>


        </div>

        </>
    )

}

export default List;