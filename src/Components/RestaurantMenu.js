import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import Restaurantcategory from './Restaurantcategory';

const RestaurantMenu = () => {
  const {resId}= useParams();
  const [showindex, setShowIndex] = useState(null);

   
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null){
    return <Shimmer />;
    }
    
    const {name,cuisines,costForTwoMessage}= resInfo?.cards[0]?.card?.card?.info
    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 console.log(categories)
   return (
    <div className="text-center">
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'> {cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.map((category,index) =>(<Restaurantcategory data={category?.card?.card}  key={category?.card?.card.title}
        showitems={index === showindex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        />
        ))}
        </div>
  )
  }

export default RestaurantMenu