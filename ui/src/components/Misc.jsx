import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 40px;
`;

export const ViewTitle = styled.h1`
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  color: #8589c5;
  margin-bottom: 14px;
`;

export const NoteCard = styled.div`
  padding: 24px 20px;
  border-radius: 2px;
  border: 1px solid black;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  h4 {
    font-weight: bold;
  }
`;
