import React from 'react'

const Menu = ( {title,items}) => {
  return (
    <div>
         <h6 className='text-primary-brand-color text-[18px] mb-4 '>{title}</h6>
         <div>
            <ul className='flex flex-col gap-4' >

         {
            items.map((item,index)=>(
               <li className='text-[14px] cursor-pointer' key={index} >{item.title} </li> 
            )) 
        }
        </ul>
        </div>
    </div>
  )
}

export default Menu