import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
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
        element:<Applayout/>

},
{
    path:"/About",
    element:<About/>

}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
