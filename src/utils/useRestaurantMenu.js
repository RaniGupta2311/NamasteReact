import {useState,useEffect} from "react";
import { SWIGGY_MENU_URL } from "./constants";
export const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    //fetch data
    useEffect(()=>{
        fetchMenu();
    },[])
    async function fetchMenu(){
        const data=await fetch(SWIGGY_MENU_URL+resId);
        const json=await data.json();
        // console.log("Menu",json?.data);
        setResInfo(json.data)
    }
    return resInfo;
}
