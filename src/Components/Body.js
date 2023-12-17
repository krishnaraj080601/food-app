import RestaurantCard, { withOffersHeader } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import isObjectEmpty from "../Utils/emptyobject";
import UserContext from "../Utils/userContext";
const Body= ()=>{
    const [listofrestaurants,setlistofrestaurants]=useState([]);

    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const RestaurantCardOffers = withOffersHeader(RestaurantCard);
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
const onlineStatus = useOnlineStatus();
const { loggedInUser, setUserName } = useContext(UserContext);
if (onlineStatus === false)
  return (
    <h1>
      Looks like you're offline!! Please check your internet connection;
    </h1>
  );

    return listofrestaurants.length === 0?(
        <Shimmer/>
    ):(
        <div className="Body">
            <div className="filter flex">
            <div className="search m-4 p-4">
          <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
   <button className = "px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
    console.log(searchText)
    const filteredRestaurant= listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredRestaurant(filteredRestaurant);
   }
   }>search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> 
        <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg"
                onMouseOver={()=>{ const filterlist = listofrestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  console.log(listofrestaurants);
                  setlistofrestaurants(filterlist);
                  }}
                >Top rated restaurant</button>
                
            </div>
            </div>
            <div className="flex flex-wrap">
            {
            filteredRestaurant.map((restaurant)=>(
                <Link
                key={restaurant?.info.id}
                to={"/restaurants/" + restaurant?.info.id}
              >
            {isObjectEmpty(
                    restaurant.info.aggregatedDiscountInfoV3 ||
                      restaurant.info.aggregatedDiscountInfoV2
                  ) ? (
                    <RestaurantCard data={restaurant} />
                  ) : (
                    <RestaurantCardOffers data={restaurant} />
                  )}
            </Link>
            ))}
           
                
                </div>
        </div>
    )
    }
    export default Body;