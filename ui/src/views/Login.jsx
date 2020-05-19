import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Log In</h1>

      <Input type="text" label="Email" onChange={e => setEmail(e.target.value)} value={email} />

      <Input type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />

      <FlexColumn>
        {/* TODO: redirect to /home after auth */}
        <Link to="/home">öö</Link>
        <Button type="submit" text="Log In" onClick={handleLogin} />
        <Link to="/register">Don't have an account? Register</Link>
      </FlexColumn>
    </div>
  );
};
