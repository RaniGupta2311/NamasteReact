import {useState} from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import MenuCategory from "./MenuCategory";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { IoStarSharp } from "react-icons/io5";
 

// RestaurantCategory === MenuCategory
const RestaurantMenu = () => {
  const [showIndex,setShowIndex]=useState(null);
  const params = useParams();
  const { resId } = params;
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <MenuShimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    sla,
    areaName,
    avgRating,
    totalRatingsString,
  } = resInfo.cards[0]?.card?.card?.info;
  const { cards } = resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR;

  const categories=resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>{
    return c.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  });

  // console.log(categories);

  const handleShowIndex=(index)=>{
    if(index===showIndex){
      setShowIndex(null);
      return
    }
    setShowIndex(index)
  }

  return (
    <div className="w-screen absolute top-24 z-0 bg-gray-100">

      <div className="w-[100%] pl-72 pr-72">

        <div className="flex justify-between items-center pt-8 pl-5 pr-5 pb-8 border-b-2 border-dashed">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl">{name}</h1>
            <h2 className="font-normal text-lg">{cuisines.join(",")}</h2>
            <p className="font-normal text-sm"> {costForTwoMessage}</p>
            <p className="font-normal text-sm">
              {areaName}, {sla.lastMileTravelString}
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 p-2 border-solid border-gray-300 border-2 rounded-md shadow-md">
            <div className="flex justify-center items-center gap-1">
              <IoStarSharp className="text-green-700"/>
              <p className="font-normal text-md">{avgRating}</p>
            </div>
            
            <p className="font-normal text-sm">{totalRatingsString}</p>
          </div>
        </div>

        
        
        <div className="p-5 mt-5">
          {/* {cards.map((menu, index) => {
            return Array.isArray(menu.card.card.itemCards) ? (
              <MenuCategory
                key={index}
                title={menu.card.card.title}
                itemCards={menu.card.card.itemCards}
              />
            ) : null;
          })} */}

          {
            categories.map((category,index)=>(
             //Controlled Component
            <MenuCategory itemCards={category.card.card.itemCards} key={category.card.card.title} title={category.card.card.title}
              show={index===showIndex && true}
              handleShowIndex={()=>handleShowIndex(index)}
            />))
          }
        </div>

      </div>
    </div>
  );
};
export default RestaurantMenu;
