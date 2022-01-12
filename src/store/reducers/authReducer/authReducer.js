import { AUTH_ACTION_TYPES } from './authActions';

const initialState = {
  isAuth: false,
  showLoginForm: true,
  username: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_IS_AUTH: {
      const { isAuth } = action.payload;

      return { ...state, isAuth };
    }

    case AUTH_ACTION_TYPES.SET_USERNAME: {
      const { username } = action.payload;

      return { ...state, username };
    }

    case AUTH_ACTION_TYPES.SET_SHOW_LOGIN_FORM: {
      const { showLoginForm } = action.payload;

      return { ...state, showLoginForm };
    }

    default: {
      return { ...state };
    }
  }
};
