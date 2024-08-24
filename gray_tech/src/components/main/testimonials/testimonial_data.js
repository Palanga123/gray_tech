function Testimonials(props)
{
    return (
        <>
            <div id="profile" className="my-4 m-auto w-full md:w-60 lg:w-72 xl:w-80 rounded-md py-8 bg-sky-200 p-4 shadow-md">
                <div className="mb-6 text-center">
                    <img src={props.image} class="w-24 h-24 m-auto rounded-full absolte" alt={props.alttext} />
                </div>
                <p class="text-center text-gray-600 px-4 pb-4">
                    {props.text}
                </p>
                <p className="text-center font-bold text-gray-800 ">{ props.name }</p>
                <p className="text-center ">{ props.position }</p>
            </div>
        </>
    )
}

export default Testimonials;