import React from 'react'

const List = ({items}) => {
    console.log(items)
  return (
    <div>
        {items.map((item) =>(
            <div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
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