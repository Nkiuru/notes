import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const CreateNoteWrapper = styled.section``;

export default () => {
  return (
    <div>
      <CreateNoteWrapper>
        <h3>Create A Note</h3>
        <Input type="text" label="Title" />
        <Input type="text" label="Note" />
      </CreateNoteWrapper>

      <Link to="/login">
        <Button text="Log Out" />
      </Link>
    </div>
  );
};
