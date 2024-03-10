import { useParams} from "react-router-dom";
import {useEffect,useState } from "react";
import { CUISINE_BASED_URL } from "../utils/constants";
import { withOfferLabel } from "./RestaurantCard";
import CuisineShimmer from "./CuisineShimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
const CuisineBasedRest=()=>{
    const [cuisineResList,setCuisineResList]=useState([]);
    const {id}=useParams();

    const RestaurantCardOfferLabel=withOfferLabel(RestaurantCard);

    useEffect(()=>{
       getData(); 
    },[])

    async function getData(){
        const URL=CUISINE_BASED_URL+id+"&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        const data=await fetch(URL);
        const jsonData=await data.json();
        // console.log("cuisine based ",jsonData.data.cards);
        setCuisineResList(jsonData.data.cards);
        console.log(jsonData.data.cards[0].card.card)
        // console.log(cuisineResList[0]?.card?.card?.title)
    }

    return cuisineResList.length===0?<CuisineShimmer/>:(
        <div className="w-full flex flex-col items-center absolute top-24 z-0 h-[calc(100%-6rem)]">
            <div className="flex flex-col justify-center pl-24 pr-24">
                <div className="pl-16 pr-16">
                    <h1 className="text-4xl font-extrabold pt-5 pb-2">{cuisineResList[0].card.card.title}</h1>
                    <h1 className="text-xl text-gray-700 pt-1 pb-1">{cuisineResList[0].card.card.description}</h1>
                    <h1 className="text-2xl font-semibold">{cuisineResList[0].card.card.count} to explore</h1>
                </div>
            
                <div className="flex flex-wrap justify-center pt-8 gap-8">
                    {
                        cuisineResList.length!==0?(cuisineResList.filter((item)=>{
                            return item.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
                        })).map((restaurant)=>{
                                return <Link to={"/restaurant/"+restaurant?.card?.card?.info?.id}
                                        key={restaurant?.card.card.info?.id}>
                                        {restaurant.card.card.info.aggregatedDiscountInfoV3?<RestaurantCardOfferLabel resData={restaurant.card.card}/>:<RestaurantCard resData={restaurant.card.card}/>}
                                        </Link>
                        })
                        :null
                    
                    } 
                </div>
            </div>
        </div>
    )
}
export default CuisineBasedRest;