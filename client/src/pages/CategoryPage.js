import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/Item/ItemList';
import { getItemsByCategory } from '../services/api';

const CategoryPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItemsByCategory(id);
      setItems(data);
    };
    fetchItems();
  }, [id]);

  return (
    <div>
      <h1>Category Items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default CategoryPage;
