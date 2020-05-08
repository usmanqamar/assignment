import {
  FETCH_IMAGES,
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES_SUCCESS,
} from './constants';

export function loadImages() {
  return {
    type: FETCH_IMAGES,
  };
}

export function imagesLoaded(payload) {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload,
  };
}

export function imagesLoadingError(err) {
  return {
    type: FETCH_IMAGES_ERROR,
    err,
  };
}
