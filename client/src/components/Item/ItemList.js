import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/ItemList.css';  // Styling for item list
const IMG_URL = process.env.REACT_APP_IMG_URL+"/items/"

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item._id} className="item">
          <Link to={`/item/${item._id}`}>
            <img src={`${IMG_URL}${item.imageUrl}`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
