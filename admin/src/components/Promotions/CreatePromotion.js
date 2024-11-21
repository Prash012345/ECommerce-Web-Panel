import React, { useState } from 'react';
import { createPromotion } from '../../services/api';

const CreatePromotion = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPromotion = { title, details, startDate, endDate };
    await createPromotion(newPromotion);
    // Add redirection or success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Promotion Title" 
        required 
      />
      <input 
        type="text" 
        value={details} 
        onChange={(e) => setDetails(e.target.value)} 
        placeholder="Details" 
      />
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
        placeholder="Start Date" 
      />
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
        placeholder="End Date" 
      />
      <button type="submit">Create Promotion</button>
    </form>
  );
};

export default CreatePromotion;
