import styled from 'styled-components';
import { MainColor, SubColor } from '../../../GlobalStyle';

export const BlockWrapper = styled.div<{ height: number }>`
  width: 320px;
  height: ${props => props.height}px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid ${MainColor};
`;

export const BlockTitle = styled.h2<{ margin: number }>`
  display: inline-block;
  font-size: 28px;
  font-family: 'Play Pretend';
  -webkit-text-stroke: 1px ${MainColor};
  color: ${SubColor};
  margin-bottom: ${props => props.margin}px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
