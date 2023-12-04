import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
const Applayout =() =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>

},
{
    path:"/About",
    element:<About/>

},
{
    path: "/Contact",
    element: <Contact/>,
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
