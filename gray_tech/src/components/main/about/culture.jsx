const Culture = (props) => {
    return (
        <>
            <div className='flex md:flex-none flex-row md:flex-col rounded-md p-2 md:p-4 text-sm justify-between'>
                <div>
                    <button className='bg-gray-200 rounded p-4 text-blue-900 mr-3 md:mb-3'>
                        {props.icon}
                    </button>
                </div>
                <div className='text-left'>
                    <p className='font-bold mb-3'>{props.title}</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                </div>
            </div>
        </>
    );
}

export default Culture;