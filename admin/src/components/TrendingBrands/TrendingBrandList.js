import React, { useEffect, useState } from 'react';
import { getTrendingBrands } from '../../services/api';

const IMG_URL=process.env.REACT_APP_IMG_URL+"/trendings/";

const TrendingBrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getTrendingBrands();
      setBrands(data);
    };
    fetchBrands();
  }, []);

  return (
    <div>
      <h2>Trending Brands</h2>
      <ul>
        {brands.map(brand => (
          <li key={brand._id}>
            {brand.name} - <img src={`${IMG_URL}${brand.logoUrl}`} alt={brand.name} />
            {console.log(`${IMG_URL}${brand.logoUrl}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingBrandList;
