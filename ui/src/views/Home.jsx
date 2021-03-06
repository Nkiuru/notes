import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { addNote, getNotes, searchNote } from '../api';
import { FlexColumn } from './Login';

import { Wrapper, SectionTitle, NoteCard, NoteHeader } from '../components/Misc';

const Textarea = styled.textarea`
  border-radius: 2px;
  min-height: 80px;
  padding: 0 14px;
  flex: 1;
  background: #f3f3f3;
  border: 1px solid black;
  font-size: 14px;
  transition: box-shadow 180ms ease-in-out;
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 1px #a6abf0;
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.2px;
  margin-bottom: 6px;
  color: #383838;
`;

const Row = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`;

export const dummyNotes = [
  {
    id: 1,
    title: 'Title',
    author: 'Me',
    content: 'This is a note',
  },
  {
    id: 2,
    title: 'Another note',
    author: 'Me',
    content: 'This is another note',
  },
];

export default () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [search, setSearch] = useState('');
  const getData = async () => {
    try {
      const response = await getNotes();
      setNotes(response);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleAddNote = async () => {
    try {
      const response = await addNote(title, content);
      getData();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await searchNote(search);
      setNotes(response);
    } catch (e) {
      console.error(e);
    }
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Row>
        <h1 style={{ marginBottom: '16px' }}>Hello {user.name}</h1>
        {user.isAdmin && (
          <Link to="/admin">
            <Button text="Admin panel"/>
          </Link>
        )}
      </Row>
      <Wrapper>
        <SectionTitle>Create A Note</SectionTitle>
        <Input type="text" label="Title" onChange={e => setTitle(e.target.value)} value={title} />
        <FlexColumn>
          <Label>Note</Label>
          <Textarea onChange={e => setContent(e.target.value)} value={content}></Textarea>
        </FlexColumn>
        <Button type="submit" text="Add note" onClick={handleAddNote} />
      </Wrapper>
      <Row>
        <Input style={{width:'80%'}} type="text" label="Search" onChange={e => setSearch(e.target.value)} value={search} />
        <Button style={{marginTop:'36px'}} type="submit" text="Search" onClick={handleSearch} />
      </Row>
      <Wrapper>
        <SectionTitle>Notes</SectionTitle>
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
      <Link to="/login">
        <Button
          text="Log Out"
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }}
        />
      </Link>
    </div>
  );
};
