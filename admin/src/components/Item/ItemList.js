import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../../services/api';
import '../../Asset/ItemList.css'; // Import CSS for styling

const ItemList = ({ onEdit }) => {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems(token);
      setItems(data);
    };
    fetchItems();
  }, [token]);

  const handleDelete = async (id) => {
    await deleteItem(id, token);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div className="item-list">
      <h3>Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id} className="item">
            <strong>{item.name}</strong>
            <p>Category: {item.category ? item.category.name : 'None'}</p>
            <p>Price: ${item.price}</p>
            <p>Stock: {item.stock}</p>
            <p>Description: {item.description}</p>
            <div className="item-actions">
              <button className="edit-btn" onClick={() => onEdit(item)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
