import { CDN_IMG_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=props.resData?.info;
    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" src={CDN_IMG_URL+cloudinaryImageId}/>
          <h4>{name}</h4>
          <p>{cuisines.join(",")}</p>
          <h4>{avgRating} stars</h4>
          <h5>{sla.deliveryTime} minutes</h5>
      </div>
    )
  }

  export default RestaurantCard;