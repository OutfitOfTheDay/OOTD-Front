import * as React from 'react';

import * as S from './style';
// import { profile } from 'assets/index';
import readFile from '../../../../utils/readFile';

interface Props {
  onChangeProfileImg: (img: File) => void;
  profileImg: File;
}

const ProfileImg: React.FC<Props> = ({ onChangeProfileImg, profileImg }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMoverOut = () => {
    setIsHovered(false);
  };

  const changeUserImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    readFile(e, onChangeProfileImg);
  };

  return (
    <S.UserImg
      img={profileImg === null ? '' : URL.createObjectURL(profileImg)}
      isHovered={isHovered}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMoverOut}
    >
      <div>
        <input
          type="file"
          id="user-img-input"
          onChange={changeUserImg}
          accept=".jpg, .jpeg, .png"
        />
        <label htmlFor="user-img-input">
          {/* <img src={profile.camera} alt="select img" /> */}
        </label>
      </div>
    </S.UserImg>
  );
};

export default ProfileImg;
