import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { SectionTitle, ViewTitle, NoteCard, NoteHeader, Wrapper } from '../components/Misc';
import { dummyNotes } from './Home';
import { getAllNotes, getUsers } from '../api';

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

const Col = styled.span`
  width:25%;
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
  const [notes, setNotes] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchNotes = async () => {
      try {
        const response = await getAllNotes();
        setNotes(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchNotes();
    fetchUsers();
  }, []);
  return (
    <div>
      <ViewTitle>Admin</ViewTitle>
      <Wrapper>
        <SectionTitle>All Users</SectionTitle>
        <UsersList>
          <li style={{fontWeight: 'bold', borderBottom: '1px solid black'}}>
            <Col>id</Col>
            <Col>name</Col>
            <Col>email</Col>
            <Col>Admin</Col>
          </li>
          {users.map(user => (
            <li key={user.id}>
              <Col>{user.id}</Col>
              <Col>{user.name}</Col>
              <Col>{user.email}</Col>
              <Col>{user.isAdmin ? 'Admin' : ''}</Col>
            </li>
          ))}
        </UsersList>
      </Wrapper>
      <Wrapper>
        <SectionTitle>All Notes</SectionTitle>
        {notes.map(note => (
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
