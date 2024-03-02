import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import {useState,useEffect} from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import OnYourMind from "./OnYourMind";
import Footer from "./Footer";
import {Link} from "react-router-dom";
const Body=()=>{
  // State Variable -super powerful 
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [searchText,setSearchText]=useState("");
  
  useEffect(()=>{
    console.log("use Effect called");
    fetchData();
  },[])

  async function fetchData(){
    const data=await fetch(SWIGGY_API_URL);
    const jsonData=await data.json();
    console.log("All data",jsonData.data);
    console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

  }

  console.log("render");
 

    return (listOfRestaurants.length===0)?<Shimmer/>:(
      <div className="body">
          {/* <div className="search">search</div> */}
          {/* What's on your mind */}
          <OnYourMind/>
          <div className="filter-btn">
            <div className="search">
              <input type="text" className="search-box"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
              />
              <button onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                })
                setFilteredRestaurant(filteredList);
              }}>Search</button>
            </div>
            <button onClick={()=>{
              console.log("Button Clicked");
              const filteredList=listOfRestaurants.filter((res)=>{
                return res.info.avgRating>4
              })
              setListOfRestaurants(filteredList)
            }}
            >Top Rated Restaurant</button>
          </div>
          <div className="res-container">
            {filteredRestaurant.map((restaurant)=>{
              return <Link to={"/restaurant/"+restaurant.info.id}
              key={restaurant.info.id}>
              <RestaurantCard resData={restaurant}/>
              </Link>
            })}
          </div>
      </div>
    )
  }
  export default Body;