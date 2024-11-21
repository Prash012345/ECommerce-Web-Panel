import React, { useState, useEffect } from 'react';
import { updateCategory, getCategories } from '../../services/api';
import '../../Asset/UpdateCategory.css'; // Import the CSS file for styling

const UpdateCategory = ({ categoryToEdit, onUpdateComplete }) => {
  const [name, setName] = useState(categoryToEdit.name);
  const [parent, setParent] = useState(categoryToEdit.parent ? categoryToEdit.parent._id : '');
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories(token);
      setCategories(data);
    };
    fetchCategories();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCategory(categoryToEdit._id, { name, parent }, token);
    onUpdateComplete();
  };

  return (
    <div className="update-category">
      <h3>Update Category</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={parent} onChange={(e) => setParent(e.target.value)}>
          <option value="">Select Parent (Optional)</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Update Category</button>
      </form>
    </div>
  );
};

export default UpdateCategory;
