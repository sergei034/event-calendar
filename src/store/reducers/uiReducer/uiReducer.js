import { UI_ACTION_TYPES } from './uiActions';

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  FAILURE: 'failure',
  SUCCESS: 'success',
};

const initialState = {
  status: STATUS.IDLE,
  error: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_ACTION_TYPES.SET_ERROR: {
      const { error } = action.payload;

      return { ...state, error };
    }

    case UI_ACTION_TYPES.SET_STATUS: {
      const { status } = action.payload;

      return { ...state, status };
    }

    default: {
      return { ...state };
    }
  }
};
