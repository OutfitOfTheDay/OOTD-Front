import * as React from 'react';

import { BlockTitle, BlockWrapper } from 'atoms/StatusBlock';
import EditImg from 'src/components/atoms/StatusBlock/EditProfileImg';
import EditInfo from 'src/components/atoms/StatusBlock/EditProfileInfoInput';
import useProfile from '../../../hooks/useMypage';

const ProfileBlock: React.FC = () => {
  const {
    profileImg,
    profileName,
    onChangeProfileImg,
    onChangeProfileName,
    onEditProfile,
    onGetProfile,
    isChanged,
  } = useProfile();
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    onGetProfile(token);
  }, []);

  const onSetEditProfile = () => {
    onEditProfile(profileImg, profileName, token);
  };

  return (
    <BlockWrapper className="profile">
      <BlockTitle margin={16}>PROFILE</BlockTitle>
      <EditImg
        onChangeProfileImg={onChangeProfileImg}
        profileImg={profileImg}
      />
      <EditInfo
        isChanged={isChanged}
        onChangeProfileName={onChangeProfileName}
        profileImg={profileImg}
        profileName={profileName}
        onEditProfile={onSetEditProfile}
      />
    </BlockWrapper>
  );
};

export default ProfileBlock;
