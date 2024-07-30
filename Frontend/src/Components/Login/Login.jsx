// Login.js
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {loading,login} = useLogin()
  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username,password)
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '30px', borderRadius: '8px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center', color: '#333' }}>Sign in to your account</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', fontSize: '18px', color: '#555' }}>Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box', backgroundColor: '#f9f9f9' }}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontSize: '18px', color: '#555' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box', backgroundColor: '#f9f9f9' }}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{ padding: '14px 24px', fontSize: '18px', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
