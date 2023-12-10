import { CDN_URL } from "../Utils/Constant";

const RestaurantCard= (props)=>{
    //console.log(props);
    const{resData}= props;
    const{name,cloudinaryImageId,cuisines,avgRating}=resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h4 className="font-bold py-4 text-lg" >{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>37 min</h4>
        </div>
    )
}
export default RestaurantCard;