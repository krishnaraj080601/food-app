import React, { useEffect } from 'react'

const RestaurantMenu = () => {
    useEffect=(()=>{
        fetchMenu()
    },[]);
    const fetchMenu= async ()=>{
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=50075&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
    console.log(json);
    }
  return (
    <div className='menu'>
        <h1>name of the restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            </ul>
        </div>
  )
}

export default RestaurantMenu