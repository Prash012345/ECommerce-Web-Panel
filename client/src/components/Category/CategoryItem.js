import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/CategoryList.css';  // Styling for category items
const IMG_URL = process.env.REACT_APP_IMG_URL+"/categories/"

const CategoryItem = ({ category, isParentCategory }) => {
  return (
    <div className="category-item">
      {isParentCategory ? (
        <div>
          <img src={`${IMG_URL}${category.imageUrl}` || '/default-image.png'} alt={category.name} className="parent-category-img"  />
          <h2>{category.name}</h2>
        </div>
      ) : (
        <Link to={`/category/${category._id}`}>
          <img src={`${IMG_URL}${category.imageUrl}` || '/default-image.png'} alt={category.name} className="child-category-img" />
          <h2>{category.name}</h2>
        </Link>
      ) }
    </div>
  );
};

export default CategoryItem;
