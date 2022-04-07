import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
const FavoriteProduct = ({product:{id,title,image,price,alt}}) => {
  return (
    <div className='p-4 flex flex-col items-center border border-gray-50 relative' >
        <div className='absolute top-2 shadow-md right-2 p-2 border border-gray-100 rounded-lg text-primary-brand-color' >
            <AiOutlinePlus/>
        </div>
        <img src={image} alt={title} className="w-[120px] h-[120px]" />
        <span className='text-primary-brand-color font-semibold text-[14px]'>${price}</span>
        <h3 className='text-center text-[14px]'>{title}</h3>
        <span className='text-[14px] text-gray-500'>{alt}</span>
    </div>
  )
}

export default FavoriteProduct