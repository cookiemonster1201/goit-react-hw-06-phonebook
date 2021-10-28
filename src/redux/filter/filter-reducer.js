import { createReducer } from '@reduxjs/toolkit';
import { UPDATE_FILTER } from './filter-actionTypes';

// export const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case UPDATE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer('', {
  [UPDATE_FILTER]: (_, { payload }) => payload,
});
