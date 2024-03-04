import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
// lazy loading
const About=lazy(()=>import("./components/About"));
const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
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
      }
    ],
  },
  
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}>
<AppLayout className="relative p-20 min-h-[100%] min-w-[1240px] flex flex-col"/>
</RouterProvider>)
export default AppLayout;


// sition: relative;
//     padding-top: 80px;
//     min-height: 100%;
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     min-width: 1240px;
