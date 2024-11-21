import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5000/api";

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const getFeaturedCollections = async () => {
  const response = await axios.get(`${API_URL}/collections/featured`);
  return response.data;
};

export const getTrendingBrands = async () => {
  const response = await axios.get(`${API_URL}/brands/trending`);
  return response.data;
};

export const getPromotions = async () => {
  const response = await axios.get(`${API_URL}/promotions`);
  return response.data;
};


export const getItemsByCategory = async (categoryId) => {
  const response = await axios.get(`${API_URL}/items/categories/${categoryId}`);
  return response.data;
};

export const getItemDetails = async (itemId) => {
  const response = await axios.get(`${API_URL}/items/${itemId}`);
  return response.data;
};

export const getFeaturedItems = async () => {
  const response = await axios.get(`${API_URL}/items/featured`);
  return response.data;
};
