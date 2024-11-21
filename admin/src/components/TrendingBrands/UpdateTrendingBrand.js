import React, { useState, useEffect } from 'react';
import { getTrendingBrands, updateTrendingBrand } from '../../services/api';
import { useParams } from 'react-router-dom';

const UpdateTrendingBrand = () => {
  const { id } = useParams(); // Get brand ID from URL
  const [brand, setBrand] = useState({ name: '', logoUrl: '' });

  useEffect(() => {
    const fetchBrand = async () => {
      const brands = await getTrendingBrands();
      const currentBrand = brands.find(brand => brand._id === id);
      if (currentBrand) {
        setBrand(currentBrand);
      }
    };
    fetchBrand();
  }, [id]);

  const handleChange = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTrendingBrand(id, brand);
    // Add redirection or success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={brand.name} 
        onChange={handleChange} 
        placeholder="Brand Name" 
        required 
      />
      <input 
        type="text" 
        name="logoUrl" 
        value={brand.logoUrl} 
        onChange={handleChange} 
        placeholder="Logo URL" 
      />
      <button type="submit">Update Brand</button>
    </form>
  );
};

export default UpdateTrendingBrand;
