import { EVENTS_ACTION_TYPES } from './eventsActions';
import { STATUS } from '../../../utils/constants';

const initialState = {
  error: null,
  events: [],
  status: STATUS.IDLE,
  users: [],
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_ACTION_TYPES.GET_EVENTS_REQUEST: {
      return {
        ...state,
        error: null,
        events: [],
        status: STATUS.LOADING,
      };
    }

    case EVENTS_ACTION_TYPES.GET_EVENTS_SUCCESS: {
      const { events } = action.payload;

      return {
        ...state,
        error: null,
        events,
        status: STATUS.SUCCESS,
      };
    }

    case EVENTS_ACTION_TYPES.GET_EVENTS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        events: [],
        status: STATUS.FAILURE,
      };
    }

    case EVENTS_ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        error: null,
        status: STATUS.LOADING,
        users: [],
      };
    }

    case EVENTS_ACTION_TYPES.GET_USERS_SUCCESS: {
      const { users } = action.payload;

      return {
        ...state,
        error: null,
        status: STATUS.SUCCESS,
        users,
      };
    }

    case EVENTS_ACTION_TYPES.GET_USERS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        status: STATUS.FAILURE,
        users: [],
      };
    }

    case EVENTS_ACTION_TYPES.ADD_EVENT_REQUEST: {
      return {
        ...state,
        error: null,
        status: STATUS.LOADING,
      };
    }

    case EVENTS_ACTION_TYPES.ADD_EVENT_SUCCESS: {
      const { event } = action.payload;

      return {
        ...state,
        error: null,
        events: { ...state.events, event },
        status: STATUS.SUCCESS,
      };
    }

    case EVENTS_ACTION_TYPES.ADD_EVENT_FAILURE: {
      const { error } = action.payload;

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
