import ItemInfo from "./ItemInfo";
import {useState} from "react";

const MenuCategory=({title,itemCards})=>{
    const [show,setShow]=useState(true);
    return (
        <div className="mt-2 pt-4 pb-4 border-b-8 border-gray-300">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">{title}</h1>
                <button onClick={()=>setShow(!show)}>{show?"🔼":"🔽"}</button>
            </div>

            {show && <div>
                {/* {console.log("itemsCards",itemCards.length)} */}
                {itemCards?itemCards.map((item)=><ItemInfo item={item.card.info}/>):null}
            </div>}
        </div>
    )
}
export default MenuCategory;