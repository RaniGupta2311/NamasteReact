import ItemInfo from "./ItemInfo";
import {useState} from "react";

const MenuCategory=({title,itemCards,show,handleShowIndex})=>{

// RestaurantCategory === MenuCategory
    // const [show,setShow]=useState(false);
    return (
        <div className="mt-2 pt-4 pb-4 border-b-8 border-gray-300">
            {/* Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleShowIndex}>
                <h1 className="font-bold text-xl">{title} ({itemCards.length})</h1>
                <button>{show?"🔼":"🔽"}</button>
            </div>
            {/* Accordion body */}
            {show && <div>
                {/* {console.log("itemsCards",itemCards.length)} */}
                {itemCards?itemCards.map((item)=><ItemInfo key={item.card.info.id} item={item.card.info}/>):null}
            </div>}
        </div>
    )
}
export default MenuCategory;