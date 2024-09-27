function Testimonials(props) {
    return (
        <>
            <div id="profile" className="text-sm my-4 m-auto w-full xl:w-80 border rounded-md p-4 bg-gray-100">
                <div className="mb-6 flex items-center">
                    <img src={props.image} class="w-16 h-16 rounded-full" alt={props.alttext} />
                    <div className="pl-2">
                        <p className="font-bold text-gray-800 ">{props.name}</p>
                        <p className="text-xs text-gray-700">{props.position}</p>
                    </div>
                </div>
                <p class="text-left text-[14px] text-gray-600 px-2 pb-4">
                    {props.text}
                </p>

            </div>
        </>
    )
}

export default Testimonials;