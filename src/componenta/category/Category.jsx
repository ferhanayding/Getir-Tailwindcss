import React from 'react'

const Category = ({category:{id,title,image}}) => {
  return (
    <div className='flex gap-y-2 flex-col p-4 group cursor-pointer items-center text-center hover:bg-purple-50 transiton-all'>
        <img src={image} alt={title} className="h-12 w-12 rounded border border-gray-200"  />
        <span className='font-[15px] font-semibold whitespace-nowrap group-hover:text-primary-brand-color tracking-tight'>{title}</span>
    </div>
  )
}

export default Category