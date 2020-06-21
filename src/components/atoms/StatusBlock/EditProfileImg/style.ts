import styled from 'styled-components';

import { MainColor } from 'src/GlobalStyle';

export const UserImg = styled.div<{ img: string; isHovered: boolean }>`
  width: 7.5rem;
  height: 7.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px ${MainColor};
  background: url(${({ img }) => img});
  position: relative;
  margin-bottom: 0.75rem;
  background-size: cover;
  background-position: center;

  > div {
    ${({ isHovered }) => !isHovered && 'visibility: hidden'};
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    bottom: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.5)
    );

    > input {
      display: none;
    }

    > label {
      > img {
        width: 1.875rem;
        height: 1.5rem;
        cursor: pointer;
      }
    }
  }
`;
