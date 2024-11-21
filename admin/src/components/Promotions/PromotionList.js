import React, { useEffect, useState } from 'react';
import { getPromotions } from '../../services/api';

const PromotionList = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      const data = await getPromotions();
      setPromotions(data);
    };
    fetchPromotions();
  }, []);

  return (
    <div>
      <h2>Promotions</h2>
      <ul>
        {promotions.map(promotion => (
          <li key={promotion._id}>
            <strong>{promotion.title}</strong> - {promotion.details} <br/>
            <em>Start Date:</em> {new Date(promotion.startDate).toLocaleDateString()} <br/>
            <em>End Date:</em> {new Date(promotion.endDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromotionList;
