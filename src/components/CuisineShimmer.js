import RestaurantListShimmer from "./RestaurantListShimmer";

const CuisineShimmer=()=>{
    return (
        <div className="bg-gray-100 absolute top-24 z-0 w-full">
            <div className="pl-20 pr-20 h-32 mt-10 flex flex-col gap-2">
                <h1 className="w-[50%] bg-gray-200 h-10 rounded-sm"></h1>
                <h2 className="w-[60%] bg-gray-200 h-8 rounded-sm"></h2>
                <h4 className="w-[40%] bg-gray-200 h-8 rounded-sm"></h4>
            </div>
            <RestaurantListShimmer/>
        </div>
    )
}
export default CuisineShimmer;