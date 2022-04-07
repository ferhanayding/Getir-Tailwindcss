import React, { useEffect, useState } from 'react'
import categoryData from "../../api/categories.json"
import Category from '../category/Category'
import SectionTitle from '../SectionTitle'
const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories(categoryData)
  
  
  }, [])
  
  return (
    <div className='bg-white py-4 px-36 ' >
      <div className='container mx-auto  ' >
        {/* <h3 className='text-sm font-semibold mb-3' >Kategoriler</h3> */}
        <SectionTitle title={"Kategoriler"} />
        <div className='grid grid-cols-10' >
          {
            categories && categories.map((category,index)=> (
              <Category key={index} category={category} />
            ) 
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Categories