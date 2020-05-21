import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { SectionTitle, ViewTitle, NoteCard, NoteHeader, Wrapper } from '../components/Misc';
import { dummyNotes } from './Home';

const UsersList = styled.ul`
  padding: 0;
  border: 1px solid black;
  border-radius: 2px;

  li {
    list-style: none;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    &:nth-of-type(even) {
      background-color: #f3f3f3;
    }
  }
`;

const dummyUsers = [
  {
    id: 1,
    name: 'Kevin',
    email: 'dragonwarrior1@gmail.com',
    isAdmin: true,
  },
  {
    id: 2,
    name: 'Steffe',
    email: 'steffe@gmail.com',
    isAdmin: false,
  },
  {
    id: 3,
    name: 'Grimes',
    email: 'grimes@gmail.com',
    isAdmin: false,
  },
  {
    id: 4,
    name: 'Asd',
    email: 'igiveup@gmail.com',
    isAdmin: false,
  },
];

export default () => {
  return (
    <div>
      <ViewTitle>Admin</ViewTitle>
      <Wrapper>
        <SectionTitle>All Users</SectionTitle>
        <UsersList>
          {dummyUsers.map(user => (
            <li>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.isAdmin ? 'Admin' : ''}</span>
            </li>
          ))}
        </UsersList>
      </Wrapper>
      <Wrapper>
        <SectionTitle>All Notes</SectionTitle>
        {dummyNotes.map(note => (
          <NoteCard key={note.id}>
            <NoteHeader>
              <div>
                <h4>{note.title}</h4>
              </div>
              <span>by: {note.author}</span>
            </NoteHeader>
            <div>Content: {note.content}</div>
          </NoteCard>
        ))}
      </Wrapper>
    </div>
  );
};
