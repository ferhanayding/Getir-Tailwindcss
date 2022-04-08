import React from 'react'

const Card = ({card:{image,title,description}}) => {
  return (
    <div className='bg-white p-10 flex-1 rounded-xl flex flex-col gap-4 justify-center' >
        <img  src={image} alt={title} className="max-h-36" />
        <h3 className='text-primary-brand-color text-center font-semibold text-lg'> {title} </h3>
        <p className='text-[15px] font-thin text-gray-500 text-center'  > {description} </p>
           </div>
  )
}

export default Card