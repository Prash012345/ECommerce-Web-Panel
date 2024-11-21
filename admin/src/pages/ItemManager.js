import React, { useState,useEffect } from 'react';
import ItemList from '../components/Item/ItemList';
import CreateItem from '../components/Item/CreateItem';
import UpdateItem from '../components/Item/UpdateItem';
import '../Asset/ItemManager.css'; // Import CSS for better styling
import { useNavigate } from 'react-router-dom';

const ItemManager = () => {
  const [itemToEdit, setItemToEdit] = useState(null);
  
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

  const handleEdit = (item) => {
    setItemToEdit(item);
  };

  const handleUpdateComplete = () => {
    setItemToEdit(null);
  };

  return (
    <div className="item-manager">
      <h2 className="manager-title">Item Manager</h2>
      <div className="manager-container">
        {itemToEdit ? (
          <UpdateItem 
            itemToEdit={itemToEdit} 
            onUpdateComplete={handleUpdateComplete} 
          />
        ) : (
          <>
            <CreateItem />
            <ItemList onEdit={handleEdit} />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemManager;
