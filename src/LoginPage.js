import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HomePage from './HomePage';
import './LoginPage.css';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (username === 'Admin' && password === 'password') {
      history.push('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default LoginPage;