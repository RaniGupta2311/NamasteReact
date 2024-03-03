import { CDN_IMG_URL } from "../utils/constants";

const ItemInfo=({item})=>{
    console.log("item",item);
    const {name,price,description,imageId,isVeg}=item;
    return (
        <div className="item-detail-container">
            <div className="item-name-price">
                <p>{isVeg? "🟢":"🛑"}</p>
                <h3>{name}</h3>
                <p>{price/100}</p>
                <p>{description}</p>
            </div>
            
            <img src={CDN_IMG_URL+imageId} className="menu-image"/>
            
        </div>
    )
}
export default ItemInfo;