import { useEffect, useState } from "react";

export function useGetProducts(selectedBrand) {
  const endpoint = selectedBrand ? `products/search?brand=${selectedBrand}` : 'products/search';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let loaded = false;

    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (!loaded) {
          setData(json);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        console.log('Fetch completed');
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      loaded = true;
    };
  }, [selectedBrand]);

  return { "data": data, "loading": loading, "error": error };
}
