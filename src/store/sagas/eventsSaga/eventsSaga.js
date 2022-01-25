import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchUsers } from '../../../api/users';

import {
  EVENTS_ACTION_TYPES,
  EVENTS_ACTION_CREATORS,
} from '../../reducers/eventsReducer/eventsActions';

function* addEventsSaga(action) {
  const { event } = action.payload;

  try {
    yield put(EVENTS_ACTION_CREATORS.addEventSuccess(event));
    // update events in reducer and LS
  } catch (error) {
    yield put(EVENTS_ACTION_CREATORS.addEventFailure(event));
  }
}

function* getEventsSaga() {
  try {
    // yield call([localStorage, 'getItem'], 'events')
    // if (events) {
    // yield put(EVENTS_ACTION_CREATORS.getEventsSuccess(events))
    // }
    yield put(EVENTS_ACTION_CREATORS.getEventsSuccess([]));
  } catch (error) {
    yield put(EVENTS_ACTION_CREATORS.getEventsFailure());
  }
}

function* getUsersSaga() {
  try {
    const users = yield call(fetchUsers);
    yield put(EVENTS_ACTION_CREATORS.getUsersSuccess(users));
  } catch (error) {
    yield put(EVENTS_ACTION_CREATORS.getUsersFailure());
  }
}

export function* eventsSaga() {
  yield takeEvery(EVENTS_ACTION_TYPES.ADD_EVENT_REQUEST, addEventsSaga);
  yield takeEvery(EVENTS_ACTION_TYPES.GET_EVENTS_REQUEST, getEventsSaga);
  yield takeEvery(EVENTS_ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga);
}
