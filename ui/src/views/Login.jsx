import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { login } from '../api';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMsg = styled.div`
  color: red
`;

export default () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await login(email,password);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);
      history.push('/home');
    } catch (err) {
      setError(err.toString());
      setShowError(true);
    }
  };

  return (
    <div>
      <h1>Log In</h1>

      <Input type="text" label="Email" onChange={e => setEmail(e.target.value)} value={email} />

      <Input type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />

      <FlexColumn>
        {/* TODO: redirect to /home after auth */}
        {showError && (
          <ErrorMsg>
            {error}
          </ErrorMsg>
        )}
        <Link to="/home">öö</Link>
        <Button type="submit" text="Log In" onClick={handleLogin} />
        <Link to="/register">Don't have an account? Register</Link>
      </FlexColumn>
    </div>
  );
};
