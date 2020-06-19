import styled from 'styled-components';

import { MainColor } from 'src/GlobalStyle';

export const Wrapper = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  margin-bottom: 2rem;
  > input {
    width: 0px;
    height: 0px;
  }
`;

export const ImageContainer = styled.div<{ isHover: boolean }>`
  width: 7.5rem;
  height: 100%;
  display: inline-block;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-right: 1.96rem;
  position: relative;

  .delbtn {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: -0.625rem;
    top: -0.625rem;
    cursor: pointer;
    ${isHover => !isHover && 'visibility: hidden'}
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AddImageBtn = styled.div`
  width: 7.5rem;
  height: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background: ${MainColor};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > img {
    width: 1.625rem;
    height: 2.625rem;
  }
`;
