import {useState,useEffect} from "react";
import { GITHUB_PROFILE_URL } from "../utils/constants";
const User=({name})=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(5);
    useEffect(()=>{
        // API call
        getGithubUserData();
        const timer=setInterval(()=>{
            console.log("Namaste React in User functional component")
        },1000)

        return ()=>{
            clearInterval(timer)
        }

    },[]);

    async function getGithubUserData(){
        const data=await fetch(GITHUB_PROFILE_URL);
        const jsonData=await data.json();
        console.log(jsonData);
    }

    return (
        <div className="user-card">
            <h2>count : {count}</h2>
            <h3>Couunt2 : {count2}</h3>
            <h1>Name:{name}</h1>
            <h3>Location:Aurangabad</h3>
            <h4>Contact</h4>
            
        </div>
    )
}
export default User