import React, { useState } from 'react';
import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, newPassword })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset successful!'); // Set success message
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
        <div className="forgot-password-left">
          <h2>Reset Password</h2>
          <p>Please enter your name and email to reset your password.</p>
        </div>
        <div className="forgot-password-right">
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
              <label>New password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Reset Password</button>
          </form>
          {message && <p>{message}</p>} {/* Display success or error message */}
          <button className="back-button" onClick={() => navigate('/login')}>Back</button> {/* Back button to navigate to login */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
