import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import {useState} from "react";
const Body=()=>{
  // State Variable -super powerful 
  const [listOfRestaurants,setListOfRestaurants]=useState(resList)
  // Normal JS variable
  let listOfRestaurantsJS=[resList];
    return (
      <div className="body">
          {/* <div className="search">search</div> */}
          <div className="filter-btn">
            <button onClick={()=>{
              console.log("Button Clicked");
              const filteredList=listOfRestaurants.filter((res)=>{
                return res.info.avgRating>4
              })
              setListOfRestaurants(filteredList)

              // listOfRestaurantsJS=listOfRestaurantsJS.filter((res)=>{
              //   return res.info.avgRating>4
              // });
              // console.log(listOfRestaurantsJS)
            }}
            >Top Rated Restaurant</button>
          </div>
          <div className="res-container">
            {listOfRestaurants.map((restaurant)=>{
              return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            })}
          </div>
      </div>
    )
  }
  export default Body;