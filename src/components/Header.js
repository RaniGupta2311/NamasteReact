import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
const Header=()=>{
    const isOnline=useOnlineStatus();
    const [btnName,setBtnName]=useState("Login")
    return (
      <div className="flex justify-between items-center shadow-xl fixed top-0 left-0 right-0 z-50 pl-10 pr-10 will-change-transform bg-[#fff]">
        <div className="logo-container">
          <img className="w-24 h-24" src={LOGO_URL} alt="logo"/>
        </div>
        <div>
          <ul className="flex gap-5">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <button className="login"
            onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}
            >{btnName}</button>
            {isOnline?"✅":"❌"}
          </ul>
        </div>
      </div>
    )
  }
  export default Header;
  // box-shadow: 0 15px 40px -20px rgba(40,44,63,.15);
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   height: 80px;
  //   background: #fff;
  //   z-index: 1000;
  //   will-change: transform;
  //   transform: translateZ(0);
  //   transition: transform .3s ease;
  //   contain: size layout style;
  //   padding: 0 20px;