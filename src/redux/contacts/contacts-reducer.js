import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterReducer } from 'redux/filter/filter-reducer';
import { SAVE_CONTACT, DELETE_CONTACT } from './contacts-actionTypes';
import addContact from 'utils/add-contact';
import deleteContact from 'utils/delete-contact';

// export const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case SAVE_CONTACT:
//       const isContactExisting = state.some(
//         ({ name, number }) =>
//           name === payload.name || number === payload.number,
//       );
//       if (isContactExisting) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       }
//       return [...state, payload];

//     case DELETE_CONTACT:
//       const updatedContacts = state.filter(({ number }) => payload !== number);
//       return [...updatedContacts];
//     default:
//       return state;
//   }
// };

export const itemsReducer = createReducer([], {
  [SAVE_CONTACT]: (state, { payload }) => addContact(state, payload),
  [DELETE_CONTACT]: (state, { payload }) => deleteContact(state, payload),
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
