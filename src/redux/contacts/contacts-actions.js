import { SAVE_CONTACT, DELETE_CONTACT } from './contacts-actionTypes';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// export const saveContact = ({ name, number }) => ({
//   type: SAVE_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

export const saveContact = createAction(SAVE_CONTACT, ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

// export const deleteContact = number => ({
//   type: DELETE_CONTACT,
//   payload: number,
// });

export const deleteContact = createAction(DELETE_CONTACT);
