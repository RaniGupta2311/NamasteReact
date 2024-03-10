import spinner from "../utils/Spinner-1s-200px.svg";
const OnYourMindShimmer=()=>{
    return (
        <div className="w-full h-72 bg-black flex flex-col items-center justify-center">
            {/* <ImSpinner2 className="text-white"/> */}
            <img src={spinner} alt="spinner"/>
            <h1 className="text-white text-2xl">
            Looking for great food near you...</h1>
        </div>
    )
}
export default OnYourMindShimmer;