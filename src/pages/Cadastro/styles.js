import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: var(--black);
  border: 1px solid var(--white);
  background: var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
    transform: scale(1.05);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableC = styled.tr`
  :hover {
    background-color: ${(props) => props.fieldColor || 'blue'};
  }
`;
