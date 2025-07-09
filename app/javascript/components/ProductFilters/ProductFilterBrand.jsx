import React, { useState, useEffect } from 'react'
const ProductFilterBrand = ({brands, onSelect}) => {
  const listItems = brands.map((brand, index) => {
    return <option key={index} value={brand}>{brand}</option>
  });
  return (
     <>
       <select id="productFilterBrand" className="border border-gray-300 rounded-md p-2" onChange={e => onSelect(e.target.value)}>
          <option value="">Select a brand</option>
          {listItems}
        </select>
     </>
  )
}

export default ProductFilterBrand