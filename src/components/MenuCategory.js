import ItemInfo from "./ItemInfo";
import {useState} from "react";

const MenuCategory=({title,itemCards})=>{
    const [show,setShow]=useState(false);
    return (
        <div className="item-container">
            <div className="item-type-container">
                <h1>{title}</h1>
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