import * as c from './ActionTypes';

export const setToken = (token) => ({
    type: c.SET_TOKEN,
    token
});

export const setUsername = (username) => ({
  type: c.SET_USERNAME, 
  username
});

export const requestImage = () => ({
  type: c.REQUEST_IMAGE
});

export const getImageSuccess = (image) => ({
  type: c.GET_IMAGE_SUCCESS, 
  image
});

export const getImageFailure = (error) => ({
  type: c.GET_IMAGE_FAILURE, 
  error
});

export const makeApiCall = (id, token) => {
  return dispatch => {
    dispatch(requestImage);
    return fetch(`https://api.spotify.com/v1/playlists/${id}/images`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + token
      })
    })
    .then(response => response.json())
    .then((jsonifiedResponse) => {
      dispatch(getImageSuccess(jsonifiedResponse));
    })
    .catch((error) => {
      dispatch(getImageFailure(error));
    });
  }
}

