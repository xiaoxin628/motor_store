import React, { useState, useEffect } from 'react'
import Loader from './loader';
import ProductListItem from './ProductListItem';
import { useGetProducts } from '../Services/useGetProducts';

function ProductList ({selectedBrand}) {
  const { data, loading, error } = useGetProducts(selectedBrand);
  return (
     <>
        {loading ? (
          <Loader />
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.products.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}
        {error && <div className="text-red-500">Error: {error.message}</div>}
     </>
  )
}

export default ProductList