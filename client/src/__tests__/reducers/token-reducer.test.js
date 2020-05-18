import tokenReducer from '../../reducers/tokenReducer';
// import * as c from './../../actions/ActionTypes';

describe('parksReducer', () => {
  
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

  
})