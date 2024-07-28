import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { useAuth } from './AuthContext'; 
import axios from 'axios';

/*
const UserProfile = () => {
  
  const { user } = useAuth(); // Get user from context
  
  if (!user) {
   
    //return <div>User not found.
    //</div>; // Show loading state or redirect if needed
  }

  return (
    <main className="profile-page">
      <section className="profile-section">
        <div className="profile-header">
          <h1>User Profile</h1>
          <p>Welcome, {user.name}</p>
        </div>
        <div className="profile-content">
          <h2>Profile Details</h2>
          <table className="profile-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
*/