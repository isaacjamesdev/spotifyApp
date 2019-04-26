import React from 'react';
import {
  Container,
  CoverBackground,
  Title,
  Author,
  EpisodeInfo,
  Controls,
  ControlIcon,
  ControlButton,
} from './styles';

const Player = () => (
  <Container>
    <CoverBackground source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png' }} />

    <EpisodeInfo>
      <Title>Papercut</Title>
      <Author>Isaac James</Author>
    </EpisodeInfo>

    <Controls>
      <ControlButton onPress={() => {}}>
        <ControlIcon name="skip-previous" />
      </ControlButton>
      <ControlButton onPress={() => {}}>
        <ControlIcon name="play-circle-filled" />
      </ControlButton>
      <ControlButton onPress={() => {}}>
        <ControlIcon name="skip-next" />
      </ControlButton>
    </Controls>
  </Container>
);

export default Player;
