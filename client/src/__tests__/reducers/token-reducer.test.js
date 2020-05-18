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

  test('setting token should successfuly update the state of accessToken', () => {
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

  test('setting userName should successfully update the state of the username', () => {
    const username = "everythingisweird"
    action = {
      type: c.SET_USERNAME, 
      username
    }

    expect(tokenReducer(defaultState, action)).toEqual({
      username: "everythingisweird", 
      accessToken: null
    })
  })

  
})