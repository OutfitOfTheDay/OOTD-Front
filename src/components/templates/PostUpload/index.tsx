import * as React from 'react';

import PostUploadModule from 'modules/StyleUpload';
import PostUploadContainer from './style';

interface Props {
  isEditMode: boolean;
  postId?: string;
}

const PostUpload: React.FC<Props> = ({ isEditMode, postId }) => {
  return (
    <PostUploadContainer>
      <PostUploadModule isEditMode={isEditMode} postId={postId} />
    </PostUploadContainer>
  );
};

export default PostUpload;
