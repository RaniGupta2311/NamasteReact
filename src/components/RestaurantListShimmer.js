const RestaurantListShimmer=()=>{
    return <div className="flex flex-wrap mt-8 pl-4 pr-4 pt-2 pb-2 justify-between">
    {
        [...Array(10).fill("")].map((item,index)=>{
                return (
                    <div className="w-[16rem] flex flex-col rounded-xl" key={index}>
                        <div className="w-[100%] h-36 rounded-xl bg-gray-200"></div>
                        <div className="w-[100%] pt-3 pb-3 pl-2 pr-2 h-36 flex flex-col gap-1">
                            <h1 className="h-4 bg-gray-200 rounded-md w-[90%]"></h1>
                            <h2 className="h-4 bg-gray-200 rounded-md w-[70%]"></h2>
                            <h3 className="h-4 bg-gray-200 rounded-md w-[50%]"></h3>
                        </div>
                    </div>
                )
        })
    }
    </div>
}
export default RestaurantListShimmer;