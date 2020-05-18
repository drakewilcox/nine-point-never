import tokenReducer from '../../reducers/tokenReducer';
import * as c from './../../actions/ActionTypes';

describe('parksReducer', () => {

  let action;
  
  const defaultState = {
    username: null, 
    accessToken: null
  };

  test('should successfully return default state if no action is passed into it', () => {
    expect(tokenReducer(defaultState, {type: null})).toEqual(
      {
        username: null, 
        accessToken: null, 
      }
    );
  });

  test('requesting token should successfuly update the state of username and accessToken', () => {
    const token = "12345"
    action = {
      type: c.SET_TOKEN,
      token
    };

    expect(tokenReducer(defaultState, action)).toEqual({
      username: null,
      accessToken: "12345"
    })
  })

  
})