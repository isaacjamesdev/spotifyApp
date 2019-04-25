import api from '~/services/api';
import { put, call } from 'redux-saga/effects';
import PodcastsActions from '~/store/duck/podcasts';

export function* load() {
  try {
    const response = yield call(api.get, '/podcasts');
    yield put(PodcastsActions.loadSuccess(response));
  } catch (error) {
    yield PodcastsActions.loadFailure();
  }
}
