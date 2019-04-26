import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

import {
  Container,
  EpisodeList,
  PodcastDetalils,
  PodcastTitle,
  Background,
  Cover,
  Author,
  Title,
  Episode,
  PlayButtonText,
  PlayButton,
} from './styles';

export default class Podcast extends Component {
  render() {
    const { navigation } = this.props;
    const podcast = navigation.getParam('podcast');
    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetalils>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />
              <Cover source={{ uri: podcast.cover }} />

              <PodcastTitle>{podcast.title}</PodcastTitle>

              <PlayButton onPress={() => {}}>
                <PlayButtonText>Play</PlayButtonText>
              </PlayButton>
            </PodcastDetalils>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>episode.tartist</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}
