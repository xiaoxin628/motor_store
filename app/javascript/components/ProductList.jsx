import React, { useState, useEffect } from 'react'
import Loader from './loader';
import ProductListItem from './ProductListItem';

function ProductList ({selectedBrand}) {
  const endpoint = selectedBrand ? `products/search?brand=${selectedBrand}` : 'products/search';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    let ignore = false;

    async function fetchData() {

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        if (!ignore) {
          setData(json);
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
        setError(error);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
}, [selectedBrand]);


  return (
     <>
        {loading ? (
          <Loader />
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.products.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}
     </>
  )
}

export default ProductList