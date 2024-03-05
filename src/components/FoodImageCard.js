import { CDN_IMG_URL } from "../utils/constants";

const FoodImageCard=({imageId})=>{
    return (
            <img className="w-40 bg-transparent" src={CDN_IMG_URL+imageId} alt="food-image"/>
    )
}
export default FoodImageCard;