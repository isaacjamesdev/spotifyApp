import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import '~/config/ReactotronConfig';

import rootReducer from './duck';
import rootSaga from './saga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleWare = createSagaMiddleWare({ sagaMonitor });

const createAppropriateStore = __DEV__ ? createStore : createStore;
const store = createAppropriateStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
