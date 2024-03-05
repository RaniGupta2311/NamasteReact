import React,{lazy,Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
// lazy loading
const About=lazy(()=>import("./components/About"));
const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
  // authentication
  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:"Rani Gupta"
    }
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
        <div>
          <Header/>
          <Outlet/>
      {/* <Footer/> */}
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
  },
  
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}>
<AppLayout className="relative p-20 min-h-[100%] min-w-[1240px] flex flex-col"/>
</RouterProvider>)
export default AppLayout;
