import {
  TOGGLE_FILTER,
  CLEAR_SEARCH,
  SEARCH_GUEST,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  EDIT_GUEST,
  CLEAR_EDIT,
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case EDIT_GUEST:
      return {
        ...state,
        editAble: payload,
      };

    case CLEAR_EDIT:
      return {
        ...state,
        editAble: null,
      };

    case UPDATE_GUEST:
      return {
        ...state,
        guests: state.guests.map((guest) =>
          guest.id === payload.id ? payload : guest
        ),
      };

    case REMOVE_GUEST:
      return {
        ...state,
        guests: state.guests.filter((guest) => guest.id !== payload),
      };

    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, payload],
      };

    case TOGGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest,
      };

    case SEARCH_GUEST:
      const reg = new RegExp(`${payload}`, 'gi');
      return {
        ...state,
        search: state.guests.filter((guest) => guest.name.match(reg)),
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    default:
      return state;
  }
};
