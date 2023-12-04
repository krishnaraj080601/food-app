import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const [resInfo,setresinfo]= useState(null)
    useEffect(() => {
        fetchMenu();
      }, []);
    const fetchMenu=async ()=>{
        const  data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=50075&catalog_qa=undefined&submitAction=ENTER")
     const json = await data.json();
     console.log(json);
     setresinfo(json.data);
    
    }
    if(resInfo === null){
    return <Shimmer />;
    }
    const {name,cuisines,costForTwoMessage}= resInfo?.cards[0]?.card?.card?.info
    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(",")}-{costForTwoMessage}</p>
        <h2>menu</h2>
        <ul>
            {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>
  )
  }

export default RestaurantMenu