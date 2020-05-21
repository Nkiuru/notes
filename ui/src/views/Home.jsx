import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { addNote, getNotes } from '../api';
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
  const getData = async () => {
    try {
      const response = await getNotes();
      console.log(response);
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

  // let username = JSON.parse(localStorage.getItem('user')).name;
  const username = 'Anon';

  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>Hello {username}</h1>
      <Wrapper>
        <SectionTitle>Create A Note</SectionTitle>
        <Input type="text" label="Title" onChange={e => setTitle(e.target.value)} value={title} />
        <FlexColumn>
          <Label>Note</Label>
          <Textarea onChange={e => setContent(e.target.value)} value={content}></Textarea>
        </FlexColumn>
        <Button type="submit" text="Add note" onClick={handleAddNote} />
      </Wrapper>
      <Wrapper>
        <SectionTitle>Notes</SectionTitle>
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
