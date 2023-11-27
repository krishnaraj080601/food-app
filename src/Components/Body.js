import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/MockData";
const Body= ()=>{
    return(
        <div className="Body">
            <div className="Search">Search</div>
            <div className="res-container">
            {
                resList.map((restaurant=><RestaurantCard key={restaurant.info.id} resData ={restaurant}/>))
            }
                
                </div>
        </div>
    )
    }
    export default Body;