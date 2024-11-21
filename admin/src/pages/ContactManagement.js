import React, { useEffect, useState } from 'react';
import { getContacts, updateContactStatus, deleteContact } from '../services/api';
import '../Asset/Contact.css'
import { useNavigate } from 'react-router-dom';

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem('token');
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

    const fetchContacts = async () => {
      const data = await getContacts(token);
      setContacts(data);
    };
    fetchContacts();
  }, [token,navigate]);

  const handleStatusChange = async (id) => {
    const updatedStatus = 'Resolved';
    await updateContactStatus(id, updatedStatus, token);
    setContacts(contacts.map(contact => 
      contact._id === id ? { ...contact, status: updatedStatus } : contact
    ));
  };

  const handleDelete = async (id) => {
    await deleteContact(id, token);
    setContacts(contacts.filter(contact => contact._id !== id));
  };

  return (
    <div className="contact-management">
      <h3>Contact Requests</h3>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{contact.status}</td>
              <td>
                {contact.status === 'Pending' ? (
                  <button onClick={() => handleStatusChange(contact._id)}>
                    Mark as Resolved
                  </button>
                ) : null}
                <button onClick={() => handleDelete(contact._id)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManagement;
