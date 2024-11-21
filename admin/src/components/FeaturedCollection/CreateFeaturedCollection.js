import React, { useState } from 'react';
import { createFeaturedCollection } from '../../services/api';

const CreateFeaturedCollection = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null); // New state for image file

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newCollection = { name, description, imageUrl };

    const formData = new FormData(); // Use FormData to handle file upload
    formData.append('name', name);
    formData.append('description', description);

    if (imageFile) {
      formData.append('image', imageFile); // Append the image file
    }

    // await createFeaturedCollection(newCollection);
    await createFeaturedCollection(formData);
    // Add redirection or success message
    setName(null);
    setDescription(null);
    setImageFile(null);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Collection Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      {/* <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" /> */}
      <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
      <button type="submit">Create Collection</button>
    </form>
  );
};

export default CreateFeaturedCollection;
