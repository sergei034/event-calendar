import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchUsers } from '../../../api/users';
import { isUserRegistered } from '../../../utils/isUserRegistered';
import {
  AUTH_ACTION_TYPES,
  AUTH_ACTION_CREATORS,
} from '../../reducers/authReducer/authActions';

function* initAuthSaga() {
  try {
    const username = yield call([localStorage, 'getItem'], 'username');
    if (username) {
      yield put(AUTH_ACTION_CREATORS.initAuthSuccess(username));
    }
  } catch (error) {
    put(AUTH_ACTION_CREATORS.initAuthFailure());
  }
}

function* signInSaga(action) {
  const { userData } = action.payload;

  try {
    const users = yield call(fetchUsers);
    if (isUserRegistered(userData, users)) {
      yield put(AUTH_ACTION_CREATORS.signInSuccess(userData.username));
      yield call([localStorage, 'setItem'], 'username', userData.username);
    } else {
      throw new Error('There is no such user!');
    }
  } catch (error) {
    yield put(AUTH_ACTION_CREATORS.signInFailure(error.message));
  }
}

function* signOutSaga() {
  try {
    console.log('[AUTH SAGA] | SIGN OUT SUCCESS');
    yield call([localStorage, 'removeItem'], 'username');
    yield put(AUTH_ACTION_CREATORS.signOutSuccess());
  } catch (error) {
    console.log('[AUTH SAGA] | SIGN OUT ERROR', error.message);
    yield put(AUTH_ACTION_CREATORS.signOutFailure(error.message));
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_ACTION_TYPES.INIT_AUTH_REQUEST, initAuthSaga);
  yield takeEvery(AUTH_ACTION_TYPES.SIGN_IN_REQUEST, signInSaga);
  yield takeEvery(AUTH_ACTION_TYPES.SIGN_OUT_REQUEST, signOutSaga);
}
