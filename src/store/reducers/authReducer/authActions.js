export const AUTH_ACTION_TYPES = {
  SET_IS_AUTH: 'SET_IS_AUTH',
  SET_SHOW_LOGIN_FORM: 'SET_SHOW_LOGIN_FORM',
  SET_USERNAME: 'SET_USERNAME',
};

export const AUTH_ACTION_CREATORS = {
  setIsAuth: isAuth => ({
    type: AUTH_ACTION_TYPES.SET_IS_AUTH,
    payload: { isAuth },
  }),
  setShowLoginForm: showLoginForm => ({
    type: AUTH_ACTION_TYPES.SET_IS_AUTH,
    payload: { showLoginForm },
  }),
  setUsername: username => ({
    type: AUTH_ACTION_CREATORS.SET_USERNAME,
    payload: { username },
  }),
};
