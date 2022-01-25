import { AUTH_ACTION_TYPES } from './authActions';

import { STATUS } from '../../../utils/constants';

const initialState = {
  error: null,
  isAuth: false,
  status: STATUS.IDLE,
  username: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.INIT_AUTH_REQUEST: {
      return {
        ...state,
        // error: null,
        // isAuth: false,
        // status: STATUS.LOADING,
        // username: null,
      };
    }

    case AUTH_ACTION_TYPES.INIT_AUTH_SUCCESS: {
      const { username } = action.payload;

      return {
        ...state,
        error: null,
        isAuth: true,
        status: STATUS.SUCCESS,
        username,
      };
    }

    case AUTH_ACTION_TYPES.INIT_AUTH_FAILURE: {
      return {
        ...state,
        error: null,
        isAuth: false,
        status: STATUS.LOADING,
        username: null,
      };
    }

    case AUTH_ACTION_TYPES.SIGN_IN_REQUEST: {
      return {
        ...state,
        error: null,
        isAuth: false,
        status: STATUS.LOADING,
        username: null,
      };
    }

    case AUTH_ACTION_TYPES.SIGN_IN_SUCCESS: {
      const { username } = action.payload;

      return {
        ...state,
        error: null,
        isAuth: true,
        status: STATUS.SUCCES,
        username,
      };
    }

    case AUTH_ACTION_TYPES.SIGN_IN_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isAuth: false,
        status: STATUS.FAILURE,
        username: null,
      };
    }

    case AUTH_ACTION_TYPES.SIGN_OUT_REQUEST: {
      console.log('[AUTH REDUCER] | SIGN OUT REQUEST');
      return {
        ...state,
        error: null,
        status: STATUS.LOADING,
      };
    }

    case AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      console.log('[AUTH REDUCER] | SIGN OUT SUCCESS');
      return {
        ...state,
        error: null,
        isAuth: false,
        status: STATUS.SUCCES,
        username: null,
      };
    }

    case AUTH_ACTION_TYPES.SIGN_OUT_FAILURE: {
      const { error } = action.payload;
      console.log('[AUTH REDUCER] | SIGN OUT ERROR', error);
      return {
        ...state,
        error,
        status: STATUS.FAILURE,
      };
    }

    default: {
      return { ...state };
    }
  }
};
