import React, { useState, useEffect } from 'react'
import ProductFilterBrand from './ProductFilters/ProductFilterBrand'


const ProductFilters = ({brands, onSelect}) => {
  return (
     <>
         <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
        <ProductFilterBrand brands={brands} onSelect={onSelect}/>
     </>
    
  )
}

export default ProductFilters