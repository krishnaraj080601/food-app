import React from 'react'
import { CDN_URL } from '../Utils/Constant'

const List = ({items}) => {
    console.log(items)
  return (
    <div>
        {items.map((item) =>(
            <div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                <img src={CDN_URL+item.card.info.imagId}/>
                <div className='w-9/12'>
                    <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span> - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}</span>
                </div>
                 </div>
                 <p>{item.card.info.description}</p>
                 </div>
        ))}
    </div>
  )
}

export default List