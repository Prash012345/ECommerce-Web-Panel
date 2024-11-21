import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/ItemDetails.css';  // Styling for item details
import { getItemDetails } from '../../services/api';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      const data = await getItemDetails(id);
      setItem(data);
    };
    fetchItemDetails();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="item-details">
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        {/* <p>Available Sizes: {item.sizes.join(', ')}</p> */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemDetails;
