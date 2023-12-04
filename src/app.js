import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
const Applayout =() =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },{
            path:"/About",
            element:<About/>
        
        },
        {
            path: "/Contact",
            element: <Contact/>,
          }],
        errorElement:<Error/>

},

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
