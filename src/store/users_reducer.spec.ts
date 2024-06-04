import {rankUsers, sortUsers} from '../data/users_data_helper';
import usersReducer from './users_reducer';
const users_data = require('../data/leaderboard.json');

describe('usersReducer reducer', () => {
  it('should handle initial state', () => {
    const ranked_users = rankUsers(Object.values(users_data));
    expect(usersReducer(undefined, {type: 'None'})).toEqual({
      ranked_users: ranked_users,
      sorted_users: undefined,
    });
  });

  it('should handle sort by name', () => {
    const ranked_users = rankUsers(Object.values(users_data));
    const sorted_users = sortUsers(ranked_users, 'name');
    expect(
      usersReducer(undefined, {
        type: 'sortUsers/name',
      }),
    ).toEqual({
      ranked_users: ranked_users,
      sorted_users: sorted_users,
    });
  });

  it('should handle sorting by bananas', () => {
    const ranked_users = rankUsers(Object.values(users_data));
    const sorted_users = sortUsers(ranked_users, 'bananas');
    expect(
      usersReducer(undefined, {
        type: 'sortUsers/bananas',
      }),
    ).toEqual({
      ranked_users: ranked_users,
      sorted_users: sorted_users,
    });
  });
});
