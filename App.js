import React, { createContext, useEffect, useState } from "react"
import ReactDOM from 'react-dom'
import Header from "./src/Components/Header";
import Front from "./src/Components/Front";
import ProductDetails from "./src/Components/ProductDetails";
import Recommend from "./src/Components/Recommend";
import { createBrowserRouter, Outlet, RouterProvider, useLocation, useNavigate } from "react-router-dom";
import About from "./src/Components/About";
import Shop from "./src/Components/Shop";
import Cart from "./src/Components/Cart";
import Footer from "./src/Components/Footer";
import Body from "./src/Components/Body";
import Header2 from "./src/Components/Header2";
import Contact from "./src/Components/Contact";
import { usercontext } from "./src/utils/usercontext";


const App=()=>{
    
    const location=useLocation()
    const[number,setNumber]=useState(0);
    return (
        <usercontext.Provider value={{value1:number, setNumber}} >
        <div>
        { location.pathname=="/"? <Front/>:<Header2/>}
        <Outlet/>
        <Footer/>
    </div>
    </usercontext.Provider>
    )
   
    
}
const Approute=createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[{
        path:"/about",
        element: <About name="Yash"/>
        
    },
    {
        path: "/shop",
        element:<Shop/>
    },{
        path:"/cart",
        element:<Cart/>
    },{
        path: "/",
        element:<Body/>
    },{
        path:"/contact",
        element:<Contact/>
    },{
        path:"/productdetails",
        element:<ProductDetails/>    }],
 
}])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Approute}/>)