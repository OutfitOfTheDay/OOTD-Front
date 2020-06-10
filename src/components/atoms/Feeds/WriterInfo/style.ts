import styled from 'styled-components';
import { MainColor } from '../../../../GlobalStyle';

export const PostInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 42.25rem;
  height: 3rem;
  padding: 0 0.75rem;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), #fff);
  color: ${MainColor};
  font-size: 0.875rem;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  opacity: 0; 
  transition-duration: 0.4s;
  &:hover {
    opacity: 1;
  }
`;

export const InfoUnitWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WriterImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
`;

export const TempIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.25rem;
`;
