import React, { useReducer } from 'react';
import GuestContext from '../guestContext/guestContext';
import guestReducer from './guestReducer';

const GuestState = (props) => {
  const intialState = {
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
  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
