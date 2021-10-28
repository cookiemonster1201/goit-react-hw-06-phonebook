import { createAction } from '@reduxjs/toolkit';

import { UPDATE_FILTER } from './filter-actionTypes';

// export const updateFilter = value => ({
//   type: UPDATE_FILTER,
//   payload: value,
// });

export const updateFilter = createAction(UPDATE_FILTER);
