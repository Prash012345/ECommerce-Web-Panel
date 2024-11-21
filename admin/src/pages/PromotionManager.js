import React,{useEffect} from 'react';
import PromotionList from '../components/Promotions/PromotionList';
import CreatePromotion from '../components/Promotions/CreatePromotion';
import { useNavigate } from 'react-router-dom';

const TrendingBrandManager = () => {

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

  return (
    <div>
      <h1>Manage Promotions</h1>
      <CreatePromotion />
      <PromotionList />
    </div>
  );
};

export default TrendingBrandManager;