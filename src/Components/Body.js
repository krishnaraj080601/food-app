import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/MockData";
import { useState } from "react";
const Body= ()=>{
    const [listofrestaurants,setlistofrestaurants]=useState(resList);

    return(
        <div className="Body">
            <div className="filter">
                <button className="filter-btn"
                onMouseOver={()=>{ const filterlist = listofrestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  console.log(listofrestaurants);
                  setlistofrestaurants(filterlist);
                  }}
                >Top rated restaurant</button>
            </div>
            <div className="res-container">
            {
                listofrestaurants.map((restaurant=><RestaurantCard key={restaurant.info.id} resData ={restaurant}/>))
            }
                
                </div>
        </div>
    )
    }
    export default Body;