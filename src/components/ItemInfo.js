import { CDN_IMG_URL } from "../utils/constants";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { FaRegStopCircle } from "react-icons/fa";

const ItemInfo=({item})=>{
    console.log("item",item);
    const {name,price,description,imageId,isVeg,ribbon}=item;
    return (
        <div className="flex justify-between mt-8 mb-4 pb-4 border-b-2 border-gray-200">

            <div className="item-name-price">
                <div className="flex items-center">
                    <p>{isVeg? <FaRegStopCircle className="text-green-700"/>:<FaRegSquareCaretUp className="text-red-600"/>}</p>
                    <p className="ml-3 text-yellow-600">{ribbon?.text}</p>
                </div>
                
                <h3>{name}</h3>
                <p>{price/100}</p>
                <p>{description}</p>
            </div>
            
            <img src={CDN_IMG_URL+imageId} className="w-28 h-24 rounded-md"/>
            
        </div>
    )
}
export default ItemInfo;