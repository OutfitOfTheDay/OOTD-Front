import styled from 'styled-components';
import { MainColor, SubColor } from '../../../GlobalStyle';

export const BlockWrapper = styled.div`
  width: 20rem;
  padding: 1.25rem;
  box-sizing: border-box;
  border: 1px solid ${MainColor};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background: white;

  &.upload {
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
  }

  &.sort {
    height: 13.75rem;
  }

  &.weather {
    height: 10rem;
  }

  &.profile {
    height: 18rem;
    padding: 1.25rem 1rem;
  }

  &.mypageFeed {
    height: 7.5rem;
  }
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
