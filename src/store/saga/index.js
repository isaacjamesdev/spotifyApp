import { all, takeLatest } from 'redux-saga/effects';
import { PodcastsTypes } from '~/store/duck/podcasts';
import { load } from './podcast';

export default function* rootSaga() {
  return yield all(takeLatest([PodcastsTypes.LOAD_REQUEST], load));
}
