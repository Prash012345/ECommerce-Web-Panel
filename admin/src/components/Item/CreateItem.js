import React, { useState, useEffect } from 'react';
import { createItem, getCategories } from '../../services/api';
import '../../Asset/CreateItem.css'; // Import CSS for styling

const CreateItem = () => {
  const [itemData, setItemData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null); // New state for image file
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories(token);
      const childCategories = data.filter(category => category.parent);
      setCategories(childCategories);
    };
    fetchCategories();
  }, [token]);

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // Use FormData to handle file upload
    formData.append('name', itemData.name);
    formData.append('price', itemData.price);
    formData.append('category', itemData.category);
    formData.append('stock', itemData.stock);
    formData.append('description', itemData.description);
    if (imageFile) {
      formData.append('image', imageFile); // Append the image file to formData
    }

    try {
      await createItem(formData, token); // Send formData (including image) to the API
      alert('Item created successfully!');
      setItemData({
        name: '',
        price: '',
        category: '',
        stock: '',
        description: ''
      });
      setImageFile(null); // Reset the image file
    } catch (err) {
      console.error('Error creating item:', err);
    }
  };

  return (
    <div className="create-item">
      <h3>Create New Item</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data"> {/* Specify form encoding type */}
        <input 
          name="name" 
          value={itemData.name} 
          onChange={handleChange} 
          placeholder="Item Name" 
          required 
        />
        <input 
          name="price" 
          value={itemData.price} 
          onChange={handleChange} 
          placeholder="Price" 
          required 
        />
        <select 
          name="category" 
          value={itemData.category} 
          onChange={handleChange} 
          required
        >
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input 
          name="stock" 
          value={itemData.stock} 
          onChange={handleChange} 
          placeholder="Stock" 
          required 
        />
        <textarea 
          name="description" 
          value={itemData.description} 
          onChange={handleChange} 
          placeholder="Description" 
        />
        <input 
          type="file" 
          onChange={handleFileChange} 
          accept="image/*" 
        /> {/* File input for image upload */}
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
};

export default CreateItem;
