import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';
import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamBody,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamCategory,
  StreamDescription,
  TagRow,
  TagView,
  TagTitle
 } from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamBody>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>André</StreamUserName>
          </StreamHeader>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagTitle>Portuguese</TagTitle>
          </TagView>
          <TagView>
            <TagTitle>Web Development</TagTitle>
          </TagView>
        </TagRow>
      </StreamBody>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
