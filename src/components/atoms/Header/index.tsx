import * as React from 'react';

import * as S from './style';

import { header } from 'assets/index';
import Img from 'atoms/public/ProfileImg';

const Header: React.FC = () => (
  <S.HeaderWrapper>
    <S.Logo>#OOTD</S.Logo>
    <Img imgSrc={header.defualt_profile} size={40} className="header" />
  </S.HeaderWrapper>
);

export default Header;
