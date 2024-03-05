import { CDN_IMG_URL } from "../utils/constants";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { FaRegStopCircle } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
const ItemInfo=({item})=>{
    console.log("item",item);
    const {name,price,description,imageId,isVeg,ribbon}=item;
    return (
        <div className="flex justify-between mt-4  pb-8 border-b-2 border-gray-200">

            <div className="item-name-price w-10/12">
                <div className="flex items-center">
                    <p>{isVeg? <FaRegStopCircle className="text-green-700"/>:<FaRegSquareCaretUp className="text-red-600"/>}</p>
                    <div className="flex items-center">
                    {ribbon?.text ? <IoStarSharp className="ml-3 text-yellow-600"/> :null}
                    <p className="ml-1 text-yellow-600 text-xs">{ribbon?.text}</p>
                    
                </div>
                    </div>
                  
                
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm">{price/100}</p>
                <p className="text-xs">{description}</p>
            </div>
            
            <div className="w-2/12 h-32">
                <div className="absolute">
                    <button className="p-2 pl-6 pr-6 mx-8 my-24 bg-white text-green-700 rounded-md shadow-lg">Add+</button>
                </div>
                <img src={CDN_IMG_URL+imageId} className="rounded-md w-full h-full"/>
            </div>
            
            
              
        </div>
    )
}
export default ItemInfo;