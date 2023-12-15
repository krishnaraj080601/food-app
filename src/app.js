import React, { Suspense, lazy, useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./Utils/userContext";
const Grocery = lazy(() => import("./Components/Grocery"));
const Applayout =() =>{
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "krishnaraj G",
    };
    setUserName(data.name);
  }, []);
    return(
    
  <UserContext.Provider value={{ loggedInUser: userName, setUserName }} >
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
      
  
      
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
          },
          { 
            path: "/grocery",
            element: (
                <Suspense fallback={<h1>Loading....</h1>}>
                  <Grocery />
                </Suspense>
              ),

          },
          {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>,
          }
        ],
        errorElement:<Error/>

},

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
