import React,{useEffect} from 'react';
import TrendingBrandList from '../components/TrendingBrands/TrendingBrandList';
import CreateTrendingBrand from '../components/TrendingBrands/CreateTrendingBrand';
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
      <h1>Manage Trending Brands</h1>
      <CreateTrendingBrand />
      <TrendingBrandList />
    </div>
  );
};

export default TrendingBrandManager;
