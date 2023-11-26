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
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+resData.restaurants[0].info.cloudinaryImageId}/>
            <h4>{resData.restaurants[0].info.name}</h4>
            <h4>{resData.restaurants[0].info.cuisines.join(", ")}</h4>
            <h4>{resData.restaurants[0].info.avgRating}</h4>
            <h4>37 min</h4>
        </div>
    )
}
const relist= [{"card": {
    "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "header": {
            "title": "Top restaurant chains in Bangalore",
            "action": {},
            "headerStyling": {
                "padding": {
                    "left": 16,
                    "top": 28,
                    "bottom": 18
                }
            }
        },
        "layout": {
            "rows": 1,
            "columns": 20,
            "horizontalScrollEnabled": true,
            "itemSpacing": 32,
            "widgetPadding": {},
            "containerStyle": {
                "containerPadding": {
                    "left": 16,
                    "right": 12,
                    "bottom": 12
                }
            },
            "scrollBar": {
                "scrollThumbColor": "#E46D47",
                "scrollTrackColor": "#02060C",
                "width": 54,
                "height": 4,
                "scrollStyling": {
                    "padding": {
                        "top": 6,
                        "bottom": 24
                    }
                }
            },
            "widgetTheme": {
                "defaultMode": {
                    "backgroundColour": "#1B3028",
                    "theme": "THEME_TYPE_DARK"
                },
                "darkMode": {
                    "backgroundColour": "#1B3028",
                    "theme": "THEME_TYPE_DARK"
                }
            }
        },
        "id": "top_brands_for_you",
        "gridElements": {
            "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                "restaurants": [
                    {
                        "info": {
                            "id": "50467",
                            "name": "Bakingo",
                            "cloudinaryImageId": "wle5xrryznnyrdoxlchz",
                            "locality": "1st Block",
                            "areaName": "Koramangala",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Bakery",
                                "Desserts",
                                "Beverages",
                                "Snacks"
                            ],
                            "avgRating": 4.2,
                            "feeDetails": {
                                "restaurantId": "50467",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 4900
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 4900
                            },
                            "parentId": "3818",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 24,
                                "lastMileTravel": 4.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "24 mins",
                                "lastMileTravelString": "4.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 01:00:00",
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
                            "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "42579",
                            "name": "Burger King",
                            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                            "locality": "Vega City Mall",
                            "areaName": "Btm Layout",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                                "Burgers",
                                "American"
                            ],
                            "avgRating": 4,
                            "feeDetails": {
                                "restaurantId": "42579",
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
                            "parentId": "166",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 21,
                                "lastMileTravel": 1.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "21 mins",
                                "lastMileTravelString": "1.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 03:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "60% OFF",
                                "subHeader": "UPTO ₹120"
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
                            "link": "https://www.swiggy.com/restaurants/burger-king-vega-city-mall-btm-layout-bangalore-42579",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "334475",
                            "name": "KFC",
                            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                            "locality": "2nd Stage",
                            "areaName": "BTM Layout",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Burgers",
                                "Biryani",
                                "American",
                                "Snacks",
                                "Fast Food"
                            ],
                            "avgRating": 4,
                            "feeDetails": {
                                "restaurantId": "334475",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 3500
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 3500
                            },
                            "parentId": "547",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 15,
                                "lastMileTravel": 0.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "15 mins",
                                "lastMileTravelString": "0.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 02:00:00",
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
                            "link": "https://www.swiggy.com/restaurants/kfc-2nd-stage-btm-layout-bangalore-334475",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "23683",
                            "name": "McDonald's",
                            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                            "locality": "2nd Stage",
                            "areaName": "Btm Layout",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Burgers",
                                "Beverages",
                                "Cafe",
                                "Desserts"
                            ],
                            "avgRating": 4.2,
                            "feeDetails": {
                                "restaurantId": "23683",
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
                            "parentId": "630",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 13,
                                "lastMileTravel": 0.1,
                                "serviceability": "SERVICEABLE",
                                "slaString": "13 mins",
                                "lastMileTravelString": "0.1 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 03:45:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                                }
                                            }
                                        ]
                                    }
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
                            "link": "https://www.swiggy.com/restaurants/mcdonalds-2nd-stage-btm-layout-bangalore-23683",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "65797",
                            "name": "Leon's - Burgers & Wings (Leon Grill)",
                            "cloudinaryImageId": "r4ufflqojich0r29efvc",
                            "locality": "Koramangala",
                            "areaName": "Koramangala",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "American",
                                "Snacks",
                                "Turkish",
                                "Portuguese",
                                "Continental"
                            ],
                            "avgRating": 4.3,
                            "feeDetails": {
                                "restaurantId": "65797",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 3600
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 3600
                            },
                            "parentId": "371281",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 22,
                                "lastMileTravel": 3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "22 mins",
                                "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 04:00:00",
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
                            "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "255038",
                            "name": "Andhra Gunpowder",
                            "cloudinaryImageId": "e996wruqpmrrrqglp7hs",
                            "locality": "NS Palya",
                            "areaName": "Btm Layout",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                                "Andhra",
                                "Biryani",
                                "South Indian"
                            ],
                            "avgRating": 4.3,
                            "feeDetails": {
                                "restaurantId": "255038",
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
                            "parentId": "10496",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 16,
                                "lastMileTravel": 1.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "16 mins",
                                "lastMileTravelString": "1.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 01:00:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹100 OFF",
                                "subHeader": "ABOVE ₹349",
                                "discountTag": "FLAT DEAL"
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
                            "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-ns-palya-btm-layout-bangalore-255038",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "23786",
                            "name": "Domino's Pizza",
                            "cloudinaryImageId": "b4zubbrh1yiw67cr2wys",
                            "locality": "4th Block",
                            "areaName": "Koramangala",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Pizzas",
                                "Italian",
                                "Pastas",
                                "Desserts"
                            ],
                            "avgRating": 4.3,
                            "feeDetails": {
                                "restaurantId": "23786",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 4200
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 4200
                            },
                            "parentId": "2456",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 27,
                                "lastMileTravel": 4.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "27 mins",
                                "lastMileTravelString": "4.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 02:59:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹100 OFF",
                                "subHeader": "ABOVE ₹699",
                                "discountTag": "FLAT DEAL"
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
                            "link": "https://www.swiggy.com/restaurants/dominos-pizza-4th-block-koramangala-bangalore-23786",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "18973",
                            "name": "Nandhana Palace",
                            "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
                            "locality": "Koramangala",
                            "areaName": "Koramangala",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "Biryani",
                                "Andhra",
                                "South Indian",
                                "North Indian"
                            ],
                            "avgRating": 4.1,
                            "feeDetails": {
                                "restaurantId": "18973",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 3500
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 3500
                            },
                            "parentId": "2120",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 19,
                                "lastMileTravel": 2.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "19 mins",
                                "lastMileTravelString": "2.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 02:00:00",
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
                            "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "69903",
                            "name": "Third Wave Coffee",
                            "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
                            "locality": "7th Sector",
                            "areaName": "HSR Layout",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Beverages",
                                "Bakery",
                                "Continental"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                                "restaurantId": "69903",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 3600
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 3600
                            },
                            "parentId": "274773",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 27,
                                "lastMileTravel": 3.8,
                                "serviceability": "SERVICEABLE",
                                "slaString": "27 mins",
                                "lastMileTravelString": "3.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 01:00:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "20% OFF",
                                "subHeader": "UPTO ₹50"
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
                            "link": "https://www.swiggy.com/restaurants/third-wave-coffee-7th-sector-hsr-layout-bangalore-69903",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "598607",
                            "name": "Soul Rasa",
                            "cloudinaryImageId": "win6uczwtszg007suegg",
                            "locality": "3rd Phase",
                            "areaName": "JP Nagar",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Indian",
                                "Healthy Food",
                                "Home Food",
                                "South Indian",
                                "North Indian"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                                "restaurantId": "598607",
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
                            "parentId": "239281",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+",
                            "sla": {
                                "deliveryTime": 23,
                                "lastMileTravel": 2.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "23 mins",
                                "lastMileTravelString": "2.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-26 23:30:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                        "description": "OnlyOnSwiggy"
                                    }
                                ],
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "OnlyOnSwiggy",
                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "brand"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "60% OFF",
                                "subHeader": "UPTO ₹110"
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
                            "link": "https://www.swiggy.com/restaurants/soul-rasa-3rd-phase-jp-nagar-bangalore-598607",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "272236",
                            "name": "EatFit",
                            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
                            "locality": "2nd Stage",
                            "areaName": "BTM Layout",
                            "costForTwo": "₹270 for two",
                            "cuisines": [
                                "Chinese",
                                "Healthy Food",
                                "Tandoor",
                                "Pizzas",
                                "North Indian",
                                "Thalis",
                                "Biryani"
                            ],
                            "avgRating": 4.1,
                            "feeDetails": {
                                "restaurantId": "272236",
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
                            "parentId": "76139",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 18,
                                "lastMileTravel": 0.8,
                                "serviceability": "SERVICEABLE",
                                "slaString": "18 mins",
                                "lastMileTravelString": "0.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-26 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "brand"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹159"
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
                            "link": "https://www.swiggy.com/restaurants/eatfit-2nd-stage-btm-layout-bangalore-272236",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "103797",
                            "name": "Starbucks Coffee",
                            "cloudinaryImageId": "8e8e3d2bd79e5e43dd483b8cf135280b",
                            "locality": "Vega City Mall",
                            "areaName": "Btm Layout",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Beverages",
                                "Cafe",
                                "Snacks",
                                "Desserts",
                                "Bakery",
                                "Ice Cream"
                            ],
                            "avgRating": 4,
                            "feeDetails": {
                                "restaurantId": "103797",
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
                            "parentId": "195515",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "1K+",
                            "sla": {
                                "deliveryTime": 22,
                                "lastMileTravel": 1.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "22 mins",
                                "lastMileTravelString": "1.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-26 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹190"
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
                            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-vega-city-mall-btm-layout-bangalore-103797",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "290271",
                            "name": "Thalairaj Biryani",
                            "cloudinaryImageId": "qf8lwn0ehi8sgvjvsi2l",
                            "locality": "5th Phase",
                            "areaName": "JP Nagar",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Andhra",
                                "Biryani",
                                "Hyderabadi",
                                "South Indian",
                                "Indian",
                                "Beverages"
                            ],
                            "avgRating": 4.2,
                            "feeDetails": {
                                "restaurantId": "290271",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 3600
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 3600
                            },
                            "parentId": "433875",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "1K+",
                            "sla": {
                                "deliveryTime": 23,
                                "lastMileTravel": 3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "23 mins",
                                "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 01:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "50% OFF",
                                "subHeader": "UPTO ₹100"
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
                            "link": "https://www.swiggy.com/restaurants/thalairaj-biryani-5th-phase-jp-nagar-bangalore-290271",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "108097",
                            "name": "Ambur Star Briyani Since 1890",
                            "cloudinaryImageId": "yktanq9i7yfjrixaghuj",
                            "locality": "2nd Stage",
                            "areaName": "BTM Layout",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "Biryani",
                                "Chettinad",
                                "Andhra",
                                "Beverages",
                                "Seafood"
                            ],
                            "avgRating": 4.3,
                            "feeDetails": {
                                "restaurantId": "108097",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 3700
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 3700
                            },
                            "parentId": "21400",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 12,
                                "lastMileTravel": 0.1,
                                "serviceability": "SERVICEABLE",
                                "slaString": "12 mins",
                                "lastMileTravelString": "0.1 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-26 23:45:00",
                                "opened": true
                            },
                            "badges": {
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                                }
                                            }
                                        ]
                                    }
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
                            "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "41913",
                            "name": "Chinita Real Mexican Food",
                            "cloudinaryImageId": "4c4c04ac8dad9e837b67ecf7c2bd4037",
                            "locality": "Koramangala",
                            "areaName": "Koramangala",
                            "costForTwo": "₹750 for two",
                            "cuisines": [
                                "Mexican",
                                "Salads",
                                "Desserts",
                                "Beverages"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                                "restaurantId": "41913",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 4300
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 4300
                            },
                            "parentId": "5064",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 27,
                                "lastMileTravel": 3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "27 mins",
                                "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-26 23:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "newg.png",
                                        "description": "Gourmet"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "Gourmet",
                                                    "imageId": "newg.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "30% OFF",
                                "subHeader": "UPTO ₹75"
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
                            "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "31627",
                            "name": "Hyderabad Biryaani House",
                            "cloudinaryImageId": "r87wnsjxzu9ysekmniju",
                            "locality": "Koramangala",
                            "areaName": "Koramangala",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                                "Biryani",
                                "Mughlai",
                                "South Indian"
                            ],
                            "avgRating": 4,
                            "feeDetails": {
                                "restaurantId": "31627",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 4300
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 4300
                            },
                            "parentId": "2403",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 24,
                                "lastMileTravel": 3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "24 mins",
                                "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 01:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "FREE ITEM"
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
                            "link": "https://www.swiggy.com/restaurants/hyderabad-biryaani-house-koramangala-bangalore-31627",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "351067",
                            "name": "Glen's BakeHouse",
                            "cloudinaryImageId": "s8ghmqus49l3i6no2vwe",
                            "locality": "Jayanagar",
                            "areaName": "Jayanagar",
                            "costForTwo": "₹600 for two",
                            "cuisines": [
                                "Desserts",
                                "Bakery",
                                "Beverages",
                                "Continental",
                                "Italian"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                                "restaurantId": "351067",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 4100
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 4100
                            },
                            "parentId": "3220",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 22,
                                "lastMileTravel": 3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "22 mins",
                                "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 05:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "newg.png",
                                        "description": "Gourmet"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "Gourmet",
                                                    "imageId": "newg.png"
                                                }
                                            }
                                        ]
                                    },
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
                            "link": "https://www.swiggy.com/restaurants/glens-bakehouse-jayanagar-bangalore-351067",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "241027",
                            "name": "Namaste",
                            "cloudinaryImageId": "dtcwa1rxdskp3crqvpr3",
                            "locality": "3rd Sector",
                            "areaName": "Hsr Layout",
                            "costForTwo": "₹100 for two",
                            "cuisines": [
                                "South Indian",
                                "Thalis",
                                "Biryani",
                                "Desserts",
                                "Beverages",
                                "Indian"
                            ],
                            "avgRating": 4.1,
                            "veg": true,
                            "feeDetails": {
                                "restaurantId": "241027",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 3600
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 3600
                            },
                            "parentId": "366271",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "10K+",
                            "sla": {
                                "deliveryTime": 24,
                                "lastMileTravel": 3.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "24 mins",
                                "lastMileTravelString": "3.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 01:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹125 OFF",
                                "subHeader": "ABOVE ₹249",
                                "discountTag": "FLAT DEAL"
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
                            "link": "https://www.swiggy.com/restaurants/namaste-3rd-sector-hsr-layout-bangalore-241027",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "81944",
                            "name": "Nasi and Mee",
                            "cloudinaryImageId": "qhhamezl2bbgn28g0q08",
                            "locality": "4th Block",
                            "areaName": "Koramangala",
                            "costForTwo": "₹800 for two",
                            "cuisines": [
                                "Pan-Asian",
                                "Japanese",
                                "Singaporean",
                                "Malaysian",
                                "Thai"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                                "restaurantId": "81944",
                                "fees": [
                                    {
                                        "name": "BASE_DISTANCE",
                                        "fee": 4300
                                    },
                                    {
                                        "name": "BASE_TIME"
                                    },
                                    {
                                        "name": "ANCILLARY_SURGE_FEE"
                                    }
                                ],
                                "totalFee": 4300
                            },
                            "parentId": "19997",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+",
                            "sla": {
                                "deliveryTime": 26,
                                "lastMileTravel": 3.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "26 mins",
                                "lastMileTravelString": "3.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-26 23:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "newg.png",
                                        "description": "Gourmet"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "Gourmet",
                                                    "imageId": "newg.png"
                                                }
                                            }
                                        ]
                                    },
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
                            "link": "https://www.swiggy.com/restaurants/nasi-and-mee-4th-block-koramangala-bangalore-81944",
                            "type": "WEBLINK"
                        }
                    },
                    {
                        "info": {
                            "id": "457834",
                            "name": "Istah - The Mediterranean Way",
                            "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
                            "locality": "3rd Phase",
                            "areaName": "JP Nagar",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Mediterranean",
                                "Snacks",
                                "Biryani",
                                "Grill",
                                "Kebabs",
                                "Arabian",
                                "Lebanese",
                                "Beverages",
                                "Desserts",
                                "Italian",
                                "Turkish"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                                "restaurantId": "457834",
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
                            "parentId": "3518",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "5K+",
                            "sla": {
                                "deliveryTime": 26,
                                "lastMileTravel": 2.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "26 mins",
                                "lastMileTravelString": "2.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-11-27 02:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                        "description": "OnlyOnSwiggy"
                                    }
                                ],
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "OnlyOnSwiggy",
                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "EVERY ITEM",
                                "subHeader": "@ ₹139"
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
                            "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-3rd-phase-jp-nagar-bangalore-457834",
                            "type": "WEBLINK"
                        }
                    }
                ],
                "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                "style": {
                    "width": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.41111112,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                    },
                    "height": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.7027027,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                    },
                    "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                },
                "collectionId": "84124"
            }
        }
    }
}
}]
    
    
const Body= ()=>{
return(
    <div className="Body">
        <div className="Search">Search</div>
        <div className="res-container">
            <RestaurantCard resData={reslist[0]} />
            
            
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
