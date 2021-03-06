import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.2px;
  margin-bottom: 6px;
  color: #383838;
`;

const Input = styled.input`
  border-radius: 2px;
  min-height: 42px;
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

export default props => {
  return (
    <Field style={props.style}>
      <Label>{props.label}</Label>
      <Input type={props.type} value={props.value} onChange={props.onChange} />
    </Field>
  );
};
