import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../../services/api';
import '../../Asset/CategoryList.css'; // Import the CSS file for styling

const CategoryList = ({ onEdit }) => {
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories(token);
      setCategories(data);
    };
    fetchCategories();
  }, [token]);

  const handleDelete = async (id) => {
    await deleteCategory(id, token);
    setCategories(categories.filter((category) => category._id !== id));
  };

  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category._id} className="category-item">
            {category.name} (Parent: {category.parent ? category.parent.name : 'None'})
            <div className="category-actions">
              <button className="edit-btn" onClick={() => onEdit(category)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(category._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
