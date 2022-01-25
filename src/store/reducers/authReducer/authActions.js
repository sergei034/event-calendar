export const AUTH_ACTION_TYPES = {
  INIT_AUTH_REQUEST: 'INIT_AUTH_REQUEST',
  INIT_AUTH_SUCCESS: 'INIT_AUTH_SUCCESS',
  INIT_AUTH_FAILURE: 'INIT_AUTH_FAILURE',

  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',

  SIGN_OUT_REQUEST: 'SIGN_OUT_REQUEST',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
};

export const AUTH_ACTION_CREATORS = {
  initAuthRequest: () => ({
    type: AUTH_ACTION_TYPES.INIT_AUTH_REQUEST,
  }),
  initAuthSuccess: username => ({
    type: AUTH_ACTION_TYPES.INIT_AUTH_SUCCESS,
    payload: { username },
  }),
  initAuthFailure: () => ({
    type: AUTH_ACTION_TYPES.INIT_AUTH_FAILURE,
  }),
  signInRequest: userData => ({
    type: AUTH_ACTION_TYPES.SIGN_IN_REQUEST,
    payload: { userData },
  }),
  signInSuccess: username => ({
    type: AUTH_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: { username },
  }),
  signInFailure: error => ({
    type: AUTH_ACTION_TYPES.SIGN_IN_FAILURE,
    payload: { error },
  }),
  signOutRequest: () => ({
    type: AUTH_ACTION_TYPES.SIGN_OUT_REQUEST,
  }),
  signOutSuccess: () => ({
    type: AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS,
  }),
  signOutFailure: error => ({
    type: AUTH_ACTION_TYPES.SIGN_OUT_FAILURE,
    payload: { error },
  }),
};
