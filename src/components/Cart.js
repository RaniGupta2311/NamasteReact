
import { useSelector ,useDispatch} from "react-redux";
import ItemInfo from "./ItemInfo";
import { clearCart } from "../utils/cartSlice";
import { CART_EMPTY_IMG } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Cart=()=>{
    const items=useSelector((store)=>store.cart.items)
    // console.log(items)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    const navigate=useNavigate();
    return (
        <div className="flex flex-col mt-32">
            <div className="w-6/12 m-auto">
                {
                    items.map((item)=>{
                        return <ItemInfo item={item}/>
                    })
                }
            </div>
                {items.length===0 ? <div className="flex flex-col w-6/12 m-auto gap-1 justify-center items-center text-center">
                    <img src={CART_EMPTY_IMG} alt="cart empty" className="max-w-96"/>
                    <h2 className="text-gray-700 text-xl font-semibold mt-2 mb-2">Your cart is empty</h2>
                    <p className="text-xs pb-2 pt-2">You can go home page to view more restaurants</p>
                    <button className="bg-orange-400 text-white pt-2 pb-2 pl-4 pr-4 rounded-md uppercase text-sm font-semibold cursor-pointer shadow-sm hover:shadow-lg"
                    onClick={()=>navigate("/")}>
                    see restaurants near you</button>
                </div>
                : <div className="w-6/12 m-auto">
                    <button onClick={handleClearCart}
                    className="w-full bg-green-700 text-white p-2 cursor-pointer hover:bg-red-700"
                    >Clear Cart</button>
                </div>}
            {/* <h1>Total items: {items.length}</h1> */}
        </div>
    )
}
export default Cart;