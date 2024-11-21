import React, { useState,useEffect } from 'react';
import CategoryList from '../components/Category/CategoryList';
import CreateCategory from '../components/Category/CreateCategory';
import UpdateCategory from '../components/Category/UpdateCategory';
import '../Asset/CategoryManager.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const CategoryManager = () => {
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const API_URL = process.env.REACT_APP_API_URL;

    if (!token) {
      // Redirect to login if token is missing
      navigate('/');
    } else {
      // Optionally, validate token by sending a request to the backend
      fetch(`${API_URL}/auth/validate`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        if (!response.ok) {
          // If the token is invalid, redirect to login
          navigate('/');
        }
      })
      .catch(() => {
        navigate('/');
      });
    }
  }, [navigate]);

  const handleEdit = (category) => {
    setCategoryToEdit(category);
  };

  const handleUpdateComplete = () => {
    setCategoryToEdit(null);
  };

  return (
    <div className="category-manager">
      <h2 className="manager-title">Category Manager</h2>
      <div className="manager-container">
        {!categoryToEdit ? (
          <>
            <CreateCategory />
            <CategoryList onEdit={handleEdit} />
          </>
        ) : (
          <UpdateCategory
            categoryToEdit={categoryToEdit}
            onUpdateComplete={handleUpdateComplete}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryManager;
