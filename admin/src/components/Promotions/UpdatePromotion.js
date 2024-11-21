import React, { useState, useEffect } from 'react';
import { getPromotions, updatePromotion } from '../../services/api';
import { useParams } from 'react-router-dom';

const UpdatePromotion = () => {
  const { id } = useParams(); // Get promotion ID from URL
  const [promotion, setPromotion] = useState({ title: '', details: '', startDate: '', endDate: '' });

  useEffect(() => {
    const fetchPromotion = async () => {
      const promotions = await getPromotions();
      const currentPromotion = promotions.find(promo => promo._id === id);
      if (currentPromotion) {
        setPromotion(currentPromotion);
      }
    };
    fetchPromotion();
  }, [id]);

  const handleChange = (e) => {
    setPromotion({ ...promotion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePromotion(id, promotion);
    // Add redirection or success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={promotion.title} 
        onChange={handleChange} 
        placeholder="Promotion Title" 
        required 
      />
      <input 
        type="text" 
        name="details" 
        value={promotion.details} 
        onChange={handleChange} 
        placeholder="Details" 
      />
      <input 
        type="date" 
        name="startDate" 
        value={promotion.startDate} 
        onChange={handleChange} 
        placeholder="Start Date" 
      />
      <input 
        type="date" 
        name="endDate" 
        value={promotion.endDate} 
        onChange={handleChange} 
        placeholder="End Date" 
      />
      <button type="submit">Update Promotion</button>
    </form>
  );
};

export default UpdatePromotion;
