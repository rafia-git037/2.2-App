import React from 'react';
import { useAuth } from '../AuthContext'; // Import AuthContext
import './UserProfile.css';

const UserProfile = () => {
  const { userDetails } = useAuth();

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="profile-card">
        <table className="profile-table">
          <tbody>
            <tr>
              <td className="field">Name </td>
              <td className="value">{userDetails.name}</td>
            </tr>
            <tr>
              <td className="field">Email</td>
              <td className="value">{userDetails.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
