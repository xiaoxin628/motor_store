import React, { useState, useEffect } from 'react'
import ProductList from './ProductList'
import ProductFilters from './ProductFilters';


const ProductPage = ({brands}) => {
   const [selectedBrand, setSelectedBrand] = useState('');
   console.log("selectedBrand", selectedBrand);
  return (
    <>
       <ProductFilters brands={brands} onSelect={selectedBrand => setSelectedBrand(selectedBrand)} />
       <ProductList selectedBrand={selectedBrand}/>
    </>
    
  )
}

export default ProductPage