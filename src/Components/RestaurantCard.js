import { useContext } from "react";
import { CDN_URL } from "../Utils/Constant";
import UserContext from "../Utils/userContext";

const RestaurantCard= ({data})=>{
    //console.log(props);
   // const{resData}= props;
   // const{name,cloudinaryImageId,cuisines,avgRating}=resData?.info;
   //console.log(data);
   const { loggedInUser } =useContext(UserContext);
    return(
        <div data-testid="data"  className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+data?.info.cloudinaryImageId}/>
            <h4 className="font-bold py-4 text-lg" >{data?.info.name}</h4>
            <h4>{data?.info.cuisines.join(", ")}</h4>
            <h4>{data?.info.avgRating} ★</h4>
            <h4>User : {loggedInUser} </h4>
        </div>
    )
}
export const withOffersHeader = (RestaurantCard) => {
    return (props) => {
      const offers =
        props.data.info.aggregatedDiscountInfoV3 ||
        props.data.info.aggregatedDiscountInfoV2;
  
      return (
        <div>
          <label className="px-4 py-1 rounded-ss-2xl rounded-ee-2xl text-[0.9rem] font-bold absolute bg-[#fb4157] text-[#FDF0F0]">{`${
            offers.header || ""
          }  ${offers.subHeader || ""}`}</label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };
  
export default RestaurantCard;