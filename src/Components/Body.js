import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/MockData";
import { useState } from "react";
const Body= ()=>{
    const listorestaurants=useState([{
        "info": {
            "id": "348158",
            "name": "Covai Anganan Biriyani House",
            "cloudinaryImageId": "riylxbx0j4kzeii1sef7",
            "locality": "VCV Layout",
            "areaName": "RS Puram",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Biryani",
                "South Indian",
                "Chinese"
            ],
            "avgRating": 3,
            "feeDetails": {
                "restaurantId": "348158",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "230662",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-26 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/covai-anganan-biriyani-house-vcv-layout-rs-puram-coimbatore-348158",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "348157",
            "name": "dominos pizza",
            "cloudinaryImageId": "riylxbx0j4kzeii1sef7",
            "locality": "VCV Layout",
            "areaName": "RS Puram",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Biryani",
                "South Indian",
                "Chinese"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "348158",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "230662",
            "avgRatingString": "3.7",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-26 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/covai-anganan-biriyani-house-vcv-layout-rs-puram-coimbatore-348158",
            "type": "WEBLINK"
        }
    },
    

]);
    
    return(
        <div className="Body">
            <div className="filter">
                <button className="filter-btn"
                onMouseOver={()=>{ listofrestaurants = listofrestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  console.log(listofrestaurants);
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