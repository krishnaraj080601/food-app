import React from 'react'

const Restaurantcategory = ({data}) => {
    console.log(data);
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
      <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>   

          </div>
    </div>
  )
}

export default Restaurantcategory