import { CDN_IMG_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";
const RestaurantCard=(props)=>{
    const {name,cuisines,avgRating,sla,cloudinaryImageId,areaName}=props.resData?.info;
    return (
      <div className="w-[16rem] flex flex-col rounded-xl">
          <img className="w-[100%] h-36 rounded-xl" src={CDN_IMG_URL+cloudinaryImageId}/>
          <div className="pt-3 h-36 flex flex-col gap-1">
            <h2 className="font-bold text-xl">{name}</h2>
            <div className="flex items-center gap-1">
              <MdStars />
              <h4 className="font-semibold">{avgRating} stars -</h4>
              <h4 className="font-semibold">{sla.deliveryTime} mins</h4>
            </div>
            <p className="font-medium text-gray-700">{cuisines.join(",")}</p>
            <p className="font-medium text-gray-700">{areaName}</p>
          </div>
      </div>
    )
  }

  export default RestaurantCard;