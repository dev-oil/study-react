import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #999;
  color: #aaa;
  margin: 0 10px;
  padding: 10px 20px;
  ${(props) =>
    props.primary &&
    css`
      background: #ccc;
      color: #333;
    `}
`;

export default function StyledComponent() {
  return (
    <>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </>
  );
}
