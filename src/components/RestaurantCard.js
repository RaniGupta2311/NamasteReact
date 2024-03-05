import { CDN_IMG_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard=(props)=>{
    const {loggedInUser}=useContext(UserContext)
    const {name,cuisines,avgRating,sla,cloudinaryImageId,areaName}=props.resData?.info;
    return (
      <div className="w-[16rem] flex flex-col rounded-xl">
          <img className="w-[100%] h-36 rounded-xl" src={CDN_IMG_URL+cloudinaryImageId}/>
          <div className="pt-3 h-36 flex flex-col gap-1">
            <h2 className="font-bold text-xl">{name}</h2>
            <div className="flex items-center gap-1">
              <MdStars className={avgRating>4?"text-green-700":"text-red-700"}/>
              <h4 className="font-semibold">{avgRating} stars -</h4>
              <h4 className="font-semibold">{sla.deliveryTime} mins</h4>
            </div>
            <p className="font-medium text-gray-700">{cuisines.join(",")}</p>
            <p className="font-medium text-gray-700">{areaName}</p>
          </div>
           {/* showing logged in user from UserContext in card  */}
          {/* <p>{loggedInUser}</p> */}
      </div>
    )
  }

  // Higher Order Component
  
  export const withOfferLabel=(RestaurantCard)=>{
    return (props)=>{
      const {header,subHeader}=props.resData.info?.aggregatedDiscountInfoV3;
      return <div className="relative">
        <label className="absolute bg-red-800 bottom-36 left-0 text-white pt-1 pb-1 pl-3 pr-3 rounded-l-lg">{header +" "+subHeader}</label>
        <RestaurantCard {...props}/>
      </div>
    }
  }
  export default RestaurantCard;