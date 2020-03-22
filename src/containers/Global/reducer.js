/*
 *
 * globalReducer
 *
 */

import merge from 'lodash.merge';
import { globalTypes } from './constants';

const initialState = {
  processing: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalTypes.GLOBAL_PROCESSING:
      return merge({}, state, { processing: action.payload.processing });
    default:
      return state;
  }
};

export default globalReducer;
