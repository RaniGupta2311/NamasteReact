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
<AppLayout/>
</RouterProvider>)
export default AppLayout;

