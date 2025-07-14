import React, { useState, useEffect } from 'react'
import Loader from './loader';
import ProductListItem from './ProductListItem';

function ProductList ({selectedBrand}) {
  const endpoint = selectedBrand ? `products/search?brand=${selectedBrand}` : 'products/search';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    let loaded = false;
    setLoading(true);// Reset loading state on brand change
    async function fetchData() 
    {
      fetch(endpoint)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(json => {
          if (!loaded) {
            setData(json);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError(error);
        }).finally(() => {
          console.log('Fetch completed');
          setLoading(false);
        });
    }


    fetchData();

    return () => {
      loaded = true;
    };
}, [selectedBrand]);


  return (
     <>
     <Loader />
        {/* {loading ? (
          <Loader />
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.products.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}
        {error && <div className="text-red-500">Error: {error.message}</div>} */}
     </>
  )
}

export default ProductList