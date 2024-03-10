const MenuShimmer=()=>{
    return (
        <div className="absolute top-24 z-0 w-full ">
            <div className="flex flex-col gap-4 w-7/12 m-auto mt-5">

                <div className="flex flex-col justify-center w-full gap-3 mt-8">
                    <div className="w-[90%] h-8 bg-gray-100"></div>
                    <div className="w-[70%] h-6 bg-gray-100"></div>
                </div>

                <div className="flex flex-row gap-8 w-full justify-center mt-10">
                    <div className="w-80 h-52 bg-gray-100"></div>
                    <div className="w-80 h-52 bg-gray-100"></div>
                </div>

            </div>
        </div>
    )
}
export default MenuShimmer;