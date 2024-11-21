import React from 'react';
// import '../../assets/Promotions.css';  // Optional CSS for promotions

const Promotions = ({ promotions }) => {
  return (
    <div className="promotions">
      <h2>Latest Promotions</h2>
      <div className="promotion-list">
        {promotions.map(promotion => (
          <div key={promotion._id} className="promotion-item">
            <h3>{promotion.title}</h3>
            <p>{promotion.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
