import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, newPassword })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Set success message
        // Clear input fields
        setName('');
        setEmail('');
        setNewPassword('');
      } else {
        setMessage(data.message); // Set error message
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: ' + error.message); // Set error message
    }
  };

  return (
    <div className="forgot-password-background">
      <div className="forgot-password-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter your name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Enter your email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Enter new password:</label>
            <input 
              type="password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
