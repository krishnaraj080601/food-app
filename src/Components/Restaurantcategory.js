import React, { useState } from 'react'
import List from './List';
const Restaurantcategory = ({data}) => {
    const[showitems,setshowitems]=useState(false);
    console.log(data);
    const handleclick = () => {
        setshowitems(!showitems);
      };
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
            <div className='flex justify-between cursor-pointer ' onClick={handleclick}>
      <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length} )
          </span>
          <span>⬇️</span>   
          </div>
         {showitems && <List items={data.itemCards}/>}
          </div>

    </div>
  )
}

export default Restaurantcategory