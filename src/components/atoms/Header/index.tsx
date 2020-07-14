import * as React from 'react';

import * as S from './style';

import { header } from 'assets/index';
import Img from 'atoms/public/ProfileImg';
import SelectBlock from './SelectBlock';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClickList = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.HeaderWrapper>
      <S.Logo>#OOTD</S.Logo>
      <Img
        imgSrc={header.default_profile}
        size={40}
        className="header"
        handleClickEvent={handleClickList}
      />
      <SelectBlock isClicked={isClicked} handleClosing={handleClickList} />
    </S.HeaderWrapper>
  );
};

export default Header;
