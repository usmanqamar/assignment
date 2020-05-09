import {
  FETCH_IMAGE,
  FETCH_IMAGE_ERROR,
  FETCH_IMAGE_SUCCESS,
} from './constants';

export function loadImage(id) {
  return {
    type: FETCH_IMAGE,
    id,
  };
}

export function imageLoaded(payload) {
  return {
    type: FETCH_IMAGE_SUCCESS,
    payload,
  };
}

export function imageLoadingError(err) {
  return {
    type: FETCH_IMAGE_ERROR,
    err,
  };
}
