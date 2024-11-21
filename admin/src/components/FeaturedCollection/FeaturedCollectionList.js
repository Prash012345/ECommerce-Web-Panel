import React, { useEffect, useState } from 'react';
import { getFeaturedCollections } from '../../services/api';

const FeaturedCollectionList = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const data = await getFeaturedCollections();
      setCollections(data);
    };
    fetchCollections();
  }, []);

  return (
    <div>
      <h2>Featured Collections</h2>
      <ul>
        {collections.map(collection => (
          <li key={collection._id}>
            {collection.name} - {collection.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedCollectionList;
