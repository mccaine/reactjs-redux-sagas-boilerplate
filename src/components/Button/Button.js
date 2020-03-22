import React from "react";
import styled from "styled-components";

const Root = styled.button`
padding: 20px;
margin: 20px;
border: 2px solid purple;
`;

const Button = props => {
  const { onClick, children } = props;
  return <Root onClick={onClick}>{children}</Root>;
};

export default Button;
