import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const {resId}= useParams();


   
    const resInfo = useRestaurantMenu(resId);
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
        <p>{cuisines}</p>
        <h3>{costForTwoMessage}</h3>
        <h2>menu</h2>
        <ul>
            {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{"RS."}
            {item.card.info.price /100 || item.card.info.defaultprice /100}</li>)}
            </ul>
        </div>
  )
  }

export default RestaurantMenu