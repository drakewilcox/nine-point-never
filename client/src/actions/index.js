import * as c from '.ActionTypes';

export const setToken = (token) => ({
    type: c.SET_TOKEN,
    token
});

export const setUsername = (username) => ({
  type: c.SET_USERNAME, 
  username
});

export const makeApiCaall = (id, token) => {
  return dispatch => {
    return fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/images`)
    .then(response => response.json())
    .then((jsonifiedResponse) => {
      dispatch(getImageSuccess(jsonifiedResponse));
    })
    .catch((error) => {
      dispatch(getImageFailure(error));
    });
  }
}

