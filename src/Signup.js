import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to hold success or error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Set success message
        // Clear input fields
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setMessage(data.message); // Set error message
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: ' + error.message); // Set error message
    }
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-left">
          <h2>Create Account</h2>
          <p>Please sign up using your personal information.</p>
        </div>
        <div className="signup-right">
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
              <label>Create password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          {message && <p>{message}</p>} {/* Display success or error message */}
          <div className="login">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
