import axios from 'axios';

// const API_URL = "http://localhost:5000/api";
const API_URL = process.env.REACT_APP_API_URL;


// Admin Login
export const loginAdmin = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};

export const registerAdmin = async (data,token) => {

  const response = await axios.post(`${API_URL}/auth/register`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAdminList = async (token) => {
  const response = await fetch(`${API_URL}/auth/adminList`, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
  const data = await response.json();
  return data;
};



// Create Category
export const createCategory = async (data, token) => {
  const response = await axios.post(`${API_URL}/categories/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Get Categories
export const getCategories = async (token) => {
  const response = await axios.get(`${API_URL}/categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update Category
export const updateCategory = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/categories/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Delete Category
export const deleteCategory = async (id, token) => {
  const response = await axios.delete(`${API_URL}/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getItems = async (token) => {
  const response = await axios.get(`${API_URL}/items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createItem = async (itemData,token) => {
  const response = await axios.post(`${API_URL}/items`, itemData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateItem = async (id, updatedData,token) => {
  const response = await axios.put(`${API_URL}/items/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteItem = async (id,token) => {
  const response = await axios.delete(`${API_URL}/items/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Featured Collections APIs
export const getFeaturedCollections = async () => {
  const response = await axios.get(`${API_URL}/collections/featured`);
  return response.data;
};

export const createFeaturedCollection = async (data) => {
  const response = await axios.post(`${API_URL}/collections/featured`, data);
  return response.data;
};

export const deleteFeaturedCollection = async (id) => {
  const response = await axios.delete(`${API_URL}/collections/featured/${id}`);
  return response.data;
};

// Trending Brands APIs
export const getTrendingBrands = async () => {
  const response = await axios.get(`${API_URL}/brands/trending`);
  return response.data;
};

export const createTrendingBrand = async (data) => {
  const response = await axios.post(`${API_URL}/brands/trending`, data);
  return response.data;
};

export const deleteTrendingBrand = async (id) => {
  const response = await axios.delete(`${API_URL}/brands/trending/${id}`);
  return response.data;
};

// Promotions APIs
export const getPromotions = async () => {
  const response = await axios.get(`${API_URL}/promotions`);
  return response.data;
};

export const createPromotion = async (data) => {
  const response = await axios.post(`${API_URL}/promotions`, data);
  return response.data;
};

export const deletePromotion = async (id) => {
  const response = await axios.delete(`${API_URL}/promotions/${id}`);
  return response.data;
};

// Contact APIs

// Get all contacts
export const getContacts = async (token) => {
  const response = await axios.get(`${API_URL}/contact`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update contact status
export const updateContactStatus = async (id, status, token) => {
  const response = await axios.put(`${API_URL}/contact/${id}/resolve`, { status }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Delete a contact (optional)
export const deleteContact = async (id, token) => {
  const response = await axios.delete(`${API_URL}/contact/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
