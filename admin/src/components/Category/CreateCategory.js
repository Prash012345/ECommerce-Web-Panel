import React, { useState, useEffect } from 'react';
import { createCategory, getCategories } from '../../services/api';
import '../../Asset/CreateCategory.css'; // Import the CSS file for styling

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [parent, setParent] = useState('');
  const [imageFile, setImageFile] = useState(null); // New state for image file
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories(token);

      // Filter categories to include only those whose parent is null (top-level categories)
      const topLevelCategories = data.filter(category => category.parent === null);

      setCategories(topLevelCategories);
    };
    fetchCategories();
  }, [token]);


  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // Use FormData to handle file upload
    formData.append('name', name);
    // formData.append('parent', parent === "" ? null : parent);
    if (parent) {
      formData.append('parent', parent);
    }
    if (imageFile) {
      formData.append('image', imageFile); // Append the image file
    }

    await createCategory(formData, token); // Send formData to the API
    alert('Item created successfully!');
    setName('');
    setParent('');
    setImageFile(null);
    window.location.reload();
  };


  return (
    <div className="create-category">
      <h3>Create New Category</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={parent} onChange={(e) => setParent(e.target.value)}>
          <option value="">Select Parent (Optional)</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;
