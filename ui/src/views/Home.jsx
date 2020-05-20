import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const CreateNoteWrapper = styled.section``;

export default () => {
  const history = useHistory();
  const username = JSON.parse(localStorage.getItem('user')).name;
  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Hello {username}</h2>
      <CreateNoteWrapper>
        <h3>Create A Note</h3>
        <Input type="text" label="Title" />
        <Input type="text" label="Note" />
      </CreateNoteWrapper>

      <Link to="/login">
        <Button text="Log Out" onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }}/>
      </Link>
    </div>
  );
};
