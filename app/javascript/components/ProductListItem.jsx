import React, { useState, useEffect } from 'react'
import Loader from './loader';

function ProductListItem ({product }) {

  return (
     <>
        <div className="group relative" key={product.id}> 
          <img
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50 w-48 h-48"
            src={product.image_url}
            alt={product.name}
          />
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-lg  text-black-900 font-semibold">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
          </div>
        </div>
     </>
  )
}

export default ProductListItem