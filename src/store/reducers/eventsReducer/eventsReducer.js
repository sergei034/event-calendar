import { EVENTS_ACTION_TYPES } from './eventsActions';

const initialState = {};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case EVENTS_ACTION_TYPES

    default: {
      return { ...state };
    }
  }
};
