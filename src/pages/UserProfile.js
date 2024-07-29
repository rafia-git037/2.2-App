import React from 'react';
import { useAuth } from '../AuthContext'; // Go up one level to import AuthContext
import './UserProfile.css';

const UserProfile = () => {
  const { userDetails } = useAuth();

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <table className="profile-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{userDetails.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{userDetails.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
