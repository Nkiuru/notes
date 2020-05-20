import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { addNote, getNotes } from '../api';
import { FlexColumn } from './Login';

const CreateNoteWrapper = styled.section``;

export default () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const getData = async () => {
    try {
      const response = await getNotes();
      console.log(response);
      setNotes(response);
    }catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const handleAddNote =  async () => {
    try {
      const response = await addNote(title, content);
      getData();
    }catch (e) {
      console.error(e);
    }
  };
  const username = JSON.parse(localStorage.getItem('user')).name;
  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Hello {username}</h2>
      <CreateNoteWrapper>
        <h3>Create A Note</h3>
        <Input type="text" label="Title" onChange={e => setTitle(e.target.value)} value={title}/>
        <Input type="text" label="Note" onChange={e => setContent(e.target.value)} value={content}/>
        <Button type="submit" text="Add note" onClick={handleAddNote} />
      </CreateNoteWrapper>
      <h3>Notes:</h3>
      {notes.map(note => (
        <div key={note.id}>
            <div>Title: {note.title}</div>
            <div>Author: {note.author}</div>
          <div>Content: {note.content}</div>
        </div>
      ))}
      <Link to="/login">
        <Button text="Log Out" onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }}/>
      </Link>
    </div>
  );
};
