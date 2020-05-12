import styled from 'styled-components';
import { MainColor, SubColor } from '../../../GlobalStyle';

export const BlockWrapper = styled.div<{ height: number }>`
  width: 20rem;
  height: ${props => props.height / 16}rem;
  padding: 1.25rem;
  box-sizing: border-box;
  border: 1px solid ${MainColor};
`;

export const BlockTitle = styled.h2<{ margin: number }>`
  display: inline-block;
  font-size: 1.75rem;
  font-family: 'Play Pretend';
  -webkit-text-stroke: 1px ${MainColor};
  color: ${SubColor};
  margin-bottom: ${props => props.margin / 16}rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
