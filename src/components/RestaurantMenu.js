import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import { SWIGGY_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
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


    const {name,cuisines,costForTwoMessage}=resInfo.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;


    console.log("Itemcards",itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <p>Restaurant Id: {resId}</p>
            <p>{costForTwoMessage}</p>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>)}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li>
                <li>{itemCards[4].card.info.name}</li>
                <li>{itemCards[5].card.info.name}</li>
                <li>{itemCards[6].card.info.name}</li>
                <li>{itemCards[7].card.info.name}</li>
                <li>{itemCards[8].card.info.name}</li>
                <li>{itemCards[9].card.info.name}</li>
                <li>{itemCards[10].card.info.name}</li>
                <li>{itemCards[11].card.info.name}</li> */}
            </ul>
        </div>
    )
}
export default RestaurantMenu