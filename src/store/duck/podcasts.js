import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
 * Action and Types
 */
export const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

export const PodcastsTypes = Types;
export default Creators;

/*
 * INITIAL_STATE
 */

export const INITIAL_STATE = Immutable({
  data: [],
});

/*
 * Reducers
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});
