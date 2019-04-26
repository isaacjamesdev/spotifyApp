import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastActions from '~/store/duck/podcasts';
import {
  Container, PodcastList, Info, Title, Cover, Podcast, PageTitle, Count,
} from './styles';

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  handlePodcastPress = (podcast) => {
    const { navigation } = this.props;
    navigation.navigate('Podcast', { podcast });
  };

  render() {
    const { podcasts } = this.props;
    console.tron.log(this.props);
    return (
      <Container>
        <PageTitle> Podcast do Sucesso</PageTitle>
        <PodcastList
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts,
});
const mapDispatchToProps = dispatch => bindActionCreators(PodcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
