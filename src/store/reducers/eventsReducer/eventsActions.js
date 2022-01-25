export const EVENTS_ACTION_TYPES = {
  GET_EVENTS_REQUEST: 'GET_EVENTS_REQUEST',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_FAILURE: 'GET_EVENTS_FAILURE',

  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',

  ADD_EVENT_REQUEST: 'ADD_EVENT_REQUEST',
  ADD_EVENT_SUCCESS: 'ADD_EVENT_SUCCESS',
  ADD_EVENT_FAILURE: 'ADD_EVENT_FAILURE',
};

export const EVENTS_ACTION_CREATORS = {
  getEventsRequest: () => ({
    type: EVENTS_ACTION_TYPES.GET_EVENTS_REQUEST,
  }),

  getEventsSuccess: events => ({
    type: EVENTS_ACTION_TYPES.GET_EVENTS_SUCCESS,
    // TODO: check if it's fine for Array
    payload: { events },
  }),

  getEventsFailure: () => ({
    type: EVENTS_ACTION_TYPES.GET_EVENTS_FAILURE,
  }),

  getUsersRequest: () => ({
    type: EVENTS_ACTION_TYPES.GET_USERS_REQUEST,
  }),

  getUsersSuccess: users => ({
    type: EVENTS_ACTION_TYPES.GET_USERS_SUCCESS,
    // TODO: check if it's fine for Array
    payload: { users },
  }),

  getUsersFailure: () => ({
    type: EVENTS_ACTION_TYPES.GET_USERS_FAILURE,
  }),

  addEventRequest: () => ({
    type: EVENTS_ACTION_TYPES.ADD_EVENT_REQUEST,
  }),

  addEventSuccess: event => ({
    type: EVENTS_ACTION_TYPES.ADD_EVENT_SUCCESS,
    payload: { event },
  }),

  addEventFailure: error => ({
    type: EVENTS_ACTION_TYPES.ADD_EVENT_FAILURE,
    payload: { error },
  }),
};
