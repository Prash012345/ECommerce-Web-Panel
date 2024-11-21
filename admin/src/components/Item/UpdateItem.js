import React, { useState, useEffect } from 'react';
import { updateItem, getCategories } from '../../services/api';
import '../../Asset/UpdateItem.css'; // Import the CSS file for styling

const UpdateItem = ({ itemToEdit, onUpdateComplete }) => {
  const [itemData, setItemData] = useState({
    name: itemToEdit.name,
    price: itemToEdit.price,
    category: itemToEdit.category ? itemToEdit.category._id : '',
    stock: itemToEdit.stock,
    description: itemToEdit.description,
    imageUrl: itemToEdit.imageUrl
  });

  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories(token);
      // Optionally filter categories to only child categories, like before
      setCategories(data);
    };
    fetchCategories();
  }, [token]);

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(itemToEdit._id, itemData, token);
    onUpdateComplete(); // Notify parent component after update
    // Optionally refresh the item list
    window.location.reload();
  };

  return (
    <div className='container'>
      <form className="update-item-form" onSubmit={handleSubmit}>
        <h1>Update Item</h1>
        <input
          name="name"
          value={itemData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="price"
          value={itemData.price}
          type="number"
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
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          name="stock"
          value={itemData.stock}
          type="number"
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
          name="imageUrl"
          value={itemData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;
