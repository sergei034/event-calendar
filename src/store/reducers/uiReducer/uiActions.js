export const UI_ACTION_TYPES = {
  SET_STATUS: 'SET_STATUS',
  SET_ERROR: 'SET_ERROR',
};

export const UI_ACTION_CREATORS = {
  setStatus: status => ({
    type: UI_ACTION_TYPES.SET_STATUS,
    payload: { status },
  }),
  setError: error => ({
    type: UI_ACTION_TYPES.SET_ERROR,
    payload: { error },
  }),
};
