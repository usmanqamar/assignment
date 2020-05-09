import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetail = state => state.detail || initialState;

const makeSelectImage = () =>
  createSelector(
    selectDetail,
    detailState => detailState.image,
  );

const makeSelectError = () =>
  createSelector(
    selectDetail,
    detailState => detailState.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectDetail,
    detailState => detailState.loading,
  );

export { selectDetail, makeSelectImage, makeSelectError, makeSelectLoading };
