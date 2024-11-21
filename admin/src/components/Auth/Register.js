import React, { useState, useEffect } from 'react';
import { registerAdmin, getAdminList } from '../../services/api'; // Assuming you have getAdminList method in your API services
import { useNavigate } from 'react-router-dom';
import '../../Asset/Register.css'; 

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [adminList, setAdminList] = useState([]); // State for storing the existing admin usernames
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // Fetch the admin list on component mount
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

        const fetchAdmins = async () => {
            try {
                const data = await getAdminList(token); // Fetch the list of admins
                setAdminList(data); // Store the admin list
            } catch (err) {
                console.error('Failed to fetch admin list', err);
            }
        };
        fetchAdmins();
    }, [token,navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerData = {
            username,
            password
        };
        try {
            await registerAdmin(registerData, token);
            alert('Admin registered successfully!');
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to register admin');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Admin Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>

            {/* Display the list of existing Admins */}
            <div className="admin-list">
                <h3>Existing Admins</h3>
                <ul>
                    {adminList.map((admin) => (
                        <li key={admin._id}>{admin.username}</li> // Display admin usernames
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Register;
