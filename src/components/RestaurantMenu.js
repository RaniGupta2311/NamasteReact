import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import { SWIGGY_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    const params=useParams();
    const {resId}=params;

    useEffect(()=>{
            fetchMenu();
    },[])

    async function fetchMenu(){
        const data=await fetch(SWIGGY_MENU_URL+resId);
        const json=await data.json();
        console.log("Menu",json?.data);
        setResInfo(json.data)
    }
    if(resInfo===null)
    return <Shimmer/>


    const {name,cuisines,costForTwoMessage,sla,areaName,avgRating,totalRatingsString}=resInfo.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const {cards}=resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR;
    console.log("Cards",cards);

    // console.log("Itemcards",itemCards);
    
    return (
        <div className="menu">

        <div className="res-menu-info">
            <div className="res-info">
                <h1>{name}</h1>
                <h2>{cuisines.join(",")}</h2>
                <p>{costForTwoMessage}</p>
                <p>{areaName}, {sla.lastMileTravelString}</p>
            </div>

            <div className="res-rating-info">
                <p>{avgRating}</p>
                <p>{totalRatingsString}</p>
            </div>
        </div>

            <div>
                {cards.map((menu,index)=>{
                    {/* {console.log("Item cards length",menu.card.card.itemCards)} */}
                    return Array.isArray(menu.card.card.itemCards) ? <MenuCategory key={index} title={menu.card.card.title} itemCards={menu.card.card.itemCards}/>:null
                })}
            </div>

            {/* <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul> */}

        </div>
    )
}
export default RestaurantMenu