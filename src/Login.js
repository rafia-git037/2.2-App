import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-left">
          <h2>Welcome Back</h2>
          <p>Please log in using your personal information to stay connected with us.</p>
        </div>
        <div className="login-right">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Log In</button>
          </form>
          <div className="signup">
  <a href="/signup">Signup</a>
</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
