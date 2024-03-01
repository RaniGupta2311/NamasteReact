import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444980032351513&lng=78.35968963801861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const AppLayout=()=>{
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
export default AppLayout;

