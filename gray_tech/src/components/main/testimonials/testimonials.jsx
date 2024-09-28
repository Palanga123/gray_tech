import mike_banda from "../../images/download.jpeg";
import Testimonials from "./testimonial_data.jsx";

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
        
        <div className="my-32 m-auto md:w-4/5 w-11/12">
            
            <div className="text-center my-10">
                <p className="text-gray-800 font-bold text-2xl">Testimonials</p>
                <p className="text-[#3572ef] text-sm font-semibold">Reviews from those we have served.</p>
            </div>

            <div className="w-full sm:grid grid-cols-2 md:grid-cols-3 gap-2 ">
                {test.map((e) => (
                    <div to={'/testimonial_data' + e.id}>
                        <Testimonials name={e.name} position={e.position} text={e.text} image={e.image} alttext={e.alttext}></Testimonials>
                    </div>
                ))}                
            </div>


        </div>

        </>
    )

}

export default List;