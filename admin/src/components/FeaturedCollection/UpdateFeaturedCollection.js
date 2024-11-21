import React, { useState, useEffect } from 'react';
import { getFeaturedCollections, updateFeaturedCollection } from '../../services/api';
import { useParams } from 'react-router-dom';

const UpdateFeaturedCollection = () => {
  const { id } = useParams(); // Get the collection ID from the URL params
  const [collection, setCollection] = useState({ name: '', description: '', imageUrl: '' });

  useEffect(() => {
    const fetchCollection = async () => {
      const collections = await getFeaturedCollections();
      const currentCollection = collections.find(col => col._id === id);
      if (currentCollection) {
        setCollection(currentCollection);
      }
    };
    fetchCollection();
  }, [id]);

  const handleChange = (e) => {
    setCollection({ ...collection, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFeaturedCollection(id, collection);
    // Add redirection or success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={collection.name} 
        onChange={handleChange} 
        placeholder="Collection Name" 
        required 
      />
      <input 
        type="text" 
        name="description" 
        value={collection.description} 
        onChange={handleChange} 
        placeholder="Description" 
      />
      <input 
        type="text" 
        name="imageUrl" 
        value={collection.imageUrl} 
        onChange={handleChange} 
        placeholder="Image URL" 
      />
      <button type="submit">Update Collection</button>
    </form>
  );
};

export default UpdateFeaturedCollection;
