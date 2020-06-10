import styled from 'styled-components';
import { MainColor, DeactColor } from '../../../../GlobalStyle';

export const WriterProfileWrapper = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WriterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterName = styled.p`
  color: ${MainColor};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const WritingDate = styled.p`
  color: ${DeactColor};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const WritingTemp = styled.p`
  color: ${MainColor};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const WritingWeatherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WritingWeatherStatus = styled.img`
  width:  1.25rem;
  height  1.25rem; 
`;
