import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { handleError } from '../utils';

function Profile() {
    const [profile, setProfile] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }
                const url = `${process.env.REACT_APP_BACKEND_URL}/auth/profile`;
                const response = await axios.get(url, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Profile Response:', response); // Log the full response for debugging
                const { success, user, message } = response.data;
                if (success) {
                    setProfile(user);
                } else {
                    handleError(message);
                    navigate('/login');
                }
            } catch (err) {
                handleError(err.message);
                navigate('/login');
            }
        };

        fetchProfile();
    }, [navigate]);

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <label>Name: </label>
                <span>{profile.name}</span>
            </div>
            <div>
                <label>Email: </label>
                <span>{profile.email}</span>
            </div>
            <div>
                <label>Password: </label>
                <span>{profile.password}</span>
            </div>
        </div>
    );
}

export default Profile;
