import React, { useEffect, useState } from 'react'
import favoriteProducts from "../../api/products.json"
import FavoriteProduct from '../favoriteProduct/FavoriteProduct'
import SectionTitle from '../SectionTitle'

const Favorites = () => {
const [products, setProducts] = useState([])
useEffect(()=>{
  setProducts(favoriteProducts)
},[])
  return (
    <div className=''  >
      <SectionTitle title={"Favoriler"} />
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8  bg-white  '>

      {
        products && products.map(product =>(
          <FavoriteProduct key={product.id} product ={product} />
          ))
        }
        </div>
    
    </div>
  )
}

export default Favorites