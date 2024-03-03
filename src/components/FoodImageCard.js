import { CDN_IMG_URL } from "../utils/constants";

const FoodImageCard=({imageId})=>{
    return (
            <img className="food-image" src={CDN_IMG_URL+imageId} alt="food-image"/>
    )
}
export default FoodImageCard;