import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendMoviesList = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
  margin: 0;
  padding: 0;
`;
export const MovieItem = styled.li`
  padding-bottom: 8px;
  &:hover {
    color: green;
  }
  &::marker {
    color: #2a363b;
    font-size: 25px;
    font-weight: 500;
  }
`;
export const LinkStyle = styled(Link)`
  color: #2a363b;
  font-size: 25px;
  font-weight: 500;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #dc6300;
  }
`;
