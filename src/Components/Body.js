import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body= ()=>{
    const [listofrestaurants,setlistofrestaurants]=useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    useEffect(() => {
        fetchdata();
      }, []);
const fetchdata=async ()=>{
    const  data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
 const json = await data.json();
 setlistofrestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 setFilteredRestaurant(
    json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
}


    return listofrestaurants.length === 0?(
        <Shimmer/>
    ):(
        <div className="Body">
            <div className="filter">
            <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
   <button onClick={()=>{
    console.log(searchText)
    const filteredRestaurant= listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredRestaurant(filteredRestaurant);
   }
   }>search</button>
        </div>
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
                filteredRestaurant.map((restaurant=><RestaurantCard key={restaurant.info.id} resData ={restaurant}/>))
            }
                
                </div>
        </div>
    )
    }
    export default Body;