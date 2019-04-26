import React from 'react';
import '~/config/ReactotronConfig';
import '~/config/statusBarConfig';
import { Provider } from 'react-redux';
import Routes from '~/Routes';
import store from './store';
import Player from '~/components/Player/player';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
