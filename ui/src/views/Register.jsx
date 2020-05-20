import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { register } from '../api';
import { useHistory } from 'react-router';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  display: none; /* HIDE */

  input:focus {
    box-shadow: none;
  }

  label {
    margin-left: 16px;
  }
`;

export default () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const response = await register(email, name, password);
      window.alert('User created');
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <Input type="text" label="Email" onChange={e => setEmail(e.target.value)} value={email} />
      <Input type="text" label="Name" onChange={e => setName(e.target.value)} value={name} />
      <Input type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <CheckboxWrapper>
        <Input type="checkbox" name="isAdmin" />
        <label htmlFor="isAdmin">is admin</label>
      </CheckboxWrapper>

      <FlexColumn>
        <Button type="submit" text="Register" onClick={handleRegister} />
        <Link to="/login">Already have an account? Log In</Link>
      </FlexColumn>
    </div>
  );
};
