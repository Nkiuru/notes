import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #a6abf0;
  border: 1px solid black;
  width: fit-content;
  padding: 8px 12px;
  font-size: 16px;
  margin: 16px 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    background: #8589c5;
  }
`;

export default props => {
  return (
    <Button type={props.type} onClick={props.onClick}>
      {props.text}
    </Button>
  );
};
