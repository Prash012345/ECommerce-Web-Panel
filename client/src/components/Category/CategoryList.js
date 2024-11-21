import React from 'react';
import CategoryItem from './CategoryItem';
import '../../assets/CategoryList.css';  // CSS for category list

const CategoryList = ({ categories = [], isParentCategory }) => {
  return (
    <div className="category-list">
      {categories.length > 0 ? (
        categories.map(category => (
          <CategoryItem 
            key={category._id} 
            category={category} 
            isParentCategory={isParentCategory}
          />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default CategoryList;
