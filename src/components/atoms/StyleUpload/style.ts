import styled from 'styled-components';

import { MainColor, SubColor, DeactTextColor } from 'src/GlobalStyle';

export const StyleUploadWrapper = styled.div`
  width: 50rem;
  height: 45rem;
  display: inline-block;
  background: white;
  box-shadow: 0 0.625rem 0.625rem 0 rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border: solid 1px ${MainColor};
  padding: 2.25rem 2.25rem 1rem 2.25rem;
  text-align: center;
`;

export const SubTitle = styled.h2`
  display: block;
  -webkit-text-stroke: 1px ${MainColor};
  color: ${SubColor};
  font-family: 'Play Pretend';
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: left;

  &.weather {
    display: inline-block;
    margin-bottom: 0;
  }
`;

export const WeatherHeaderWrapper = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;

  > img {
    width: 0.9375rem;
    height: 0.9375rem;
    margin-left: 0.5rem;
  }

  > span {
    :nth-child(3) {
      font-size: 12px;
      font-weight: bold;
      color: ${MainColor};
      margin-left: 0.25rem;
    }

    :last-child {
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      font-size: 10px;
      color: ${DeactTextColor};
      margin-left: 0.5rem;
    }
  }
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
  padding: 0.625rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px ${MainColor};
  font-size: 0.875rem;
  color: ${DeactTextColor};
  resize: none;
  margin-bottom: 2rem;
`;

export const UploadBtn = styled.button<{ isAllFilled: boolean }>`
  width: 6.25rem;
  height: 2.75rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props =>
    props.isAllFilled ? MainColor : 'rgba(85, 16, 155, 0.2)'};
  color: white;
  margin-top: 0.835rem;
  text-align: center;
`;
