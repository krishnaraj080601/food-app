import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header = ()=>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="/>
        </div>
        <div className="nav-items">
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
                <li>cart</li>
                <li>hello </li>
            </ul>
        </div>
    </div>
    );

};
const RestaurantCard= (props)=>{
    console.log(props);
    const{resData}= props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ngrkti6g5uh6adiwr37o"/>
            <h4>{resData.restaurants[0].info.avgRating}</h4>
            <h4>{resData.restaurants[0].info.name}</h4>
            <h4></h4>
            <h4>37 min</h4>
        </div>
    )
}
const resobj= {
    "restaurants": [
        {
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
        }
    ]
}
const Body= ()=>{
return(
    <div className="Body">
        <div className="Search">Search</div>
        <div className="res-container">
            <RestaurantCard resData={resobj} />
            <RestaurantCard resname ="kFC" cusine= "chicken , chicken leg"/>
            
            </div>
    </div>
)
}
const Applayout =() =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
