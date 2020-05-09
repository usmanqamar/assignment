import produce from 'immer';
import {
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR,
  FETCH_IMAGE,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  image: [],
};

/* eslint-disable default-case, no-param-reassign */
const detailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_IMAGE:
        draft.loading = true;
        break;

      case FETCH_IMAGE_SUCCESS:
        draft.loading = false;
        draft.image = action.payload.data;
        draft.error = null;
        break;

      case FETCH_IMAGE_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.image = {};
        break;
    }
  });

export default detailReducer;
