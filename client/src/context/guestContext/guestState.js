import React, { useReducer } from 'react';
import GuestContext from '../guestContext/guestContext';
import guestReducer from './guestReducer';
import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  EDIT_GUEST,
  CLEAR_EDIT,
} from '../types';

const GuestState = (props) => {
  const intialState = {
    filterGuest: false,
    search: null,
    editAble: null,
    guests: [
      {
        id: 1,
        name: 'Vamshi',
        phone: '7411 949 801',
        dietary: 'Vegan',
        isconfirmed: false,
      },
      {
        id: 2,
        name: 'Anirudh',
        phone: '0411 949 801',
        dietary: 'Non-Veg',
        isconfirmed: true,
      },
      {
        id: 3,
        name: 'Sai',
        phone: '4711 949 801',
        dietary: 'Vegetarian',
        isconfirmed: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(guestReducer, intialState);

  const addGuest = (guest) => {
    guest.id = Date.now();
    guest.isconfirmed = false;
    dispatch({
      type: ADD_GUEST,
      payload: guest,
    });
  };

  const removeGuest = (id) => {
    dispatch({
      type: REMOVE_GUEST,
      payload: id,
    });
  };

  const updateGuest = (guest) => {
    dispatch({
      type: UPDATE_GUEST,
      payload: guest,
    });
  };

  const editGuest = (guest) => {
    dispatch({
      type: EDIT_GUEST,
      payload: guest,
    });
  };

  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT,
    });
  };

  const toggleFilter = () => {
    dispatch({
      type: TOGGLE_FILTER,
    });
  };

  const searchGuest = (guest) => {
    dispatch({
      type: SEARCH_GUEST,
      payload: guest,
    });
  };

  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        editAble: state.editAble,
        search: state.search,
        toggleFilter,
        clearSearch,
        searchGuest,
        addGuest,
        removeGuest,
        updateGuest,
        editGuest,
        clearEdit,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
