import React, { useState } from 'react';
import { createTrendingBrand } from '../../services/api';

const CreateTrendingBrand = () => {
  const [name, setName] = useState('');
  // const [logoUrl, setLogoUrl] = useState('');
  const [imageFile, setImageFile] = useState(null); // New state for image file

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newBrand = { name, logoUrl };

    const formData = new FormData(); // Use FormData to handle file upload
    formData.append('name', name);
    if (imageFile) {
      formData.append('image', imageFile); // Append the image file
    }

    // await createTrendingBrand(newBrand);
    await createTrendingBrand(formData);
    alert('Item created successfully!');
    setName('');
    setImageFile(null);
    // Add redirection or success message
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Brand Name"
        required
      />
      {/* <input 
        type="text" 
        value={logoUrl} 
        onChange={(e) => setLogoUrl(e.target.value)} 
        placeholder="Logo URL" 
      /> */}
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
      <button type="submit">Add Brand</button>
    </form>
  );
};

export default CreateTrendingBrand;
