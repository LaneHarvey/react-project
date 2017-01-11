import { createSelector } from 'reselect';

/**
 * Direct selector to the characters state domain
 */
const selectCharactersDomain = () => (state) => state.get('characters');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Characters
 */

const selectCharacters = () => createSelector(
  selectCharactersDomain(),
  (substate) => substate.toJS()
);

export default selectCharacters;
export {
  selectCharactersDomain,
};
