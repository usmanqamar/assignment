import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_IMAGE } from './constants';
import { API_BASE } from '../../utils/constants';
import { imageLoaded, imageLoadingError } from './actions';

export function* getImage({ id }) {
  const requestURL = `${API_BASE}/gallery/${id}`;

  try {
    const image = yield call(request, requestURL);
    yield put(imageLoaded(image));
  } catch (err) {
    yield put(imageLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(FETCH_IMAGE, getImage);
}
