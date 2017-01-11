import expect from 'expect';
import charactersReducer from '../reducer';
import { fromJS } from 'immutable';

describe('charactersReducer', () => {
  it('returns the initial state', () => {
    expect(charactersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
