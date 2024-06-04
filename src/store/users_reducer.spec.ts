import {rankUsers, sortUsers} from '../data/users_data_helper';
import usersReducer from './users_reducer';
const users_data = require('../data/leaderboard.json');

describe('usersReducer reducer', () => {
  it('should handle initial state', () => {
    const ranked_users = rankUsers(Object.values(users_data));
    expect(usersReducer(undefined, {type: 'None'})).toEqual({
      ranked_users: ranked_users,
      sorted_users: undefined,
      sort_by: {field: 'bananas', type: 'desc'},
    });
  });

  it('should handle sort by name ascendingly', () => {
    const ranked_users = rankUsers(Object.values(users_data));
    const sorted_users = sortUsers(ranked_users, {
      field: 'name',
      type: 'asc',
    });
    expect(
      usersReducer(undefined, {
        type: 'sortUsers/name:asc',
      }),
    ).toEqual({
      ranked_users: ranked_users,
      sorted_users: sorted_users,
      sort_by: {field: 'name', type: 'asc'},
    });
  });

  it('should handle sort by name descendingly', () => {
    const ranked_users = rankUsers(Object.values(users_data));
    const sorted_users = sortUsers(ranked_users, {
      field: 'name',
      type: 'desc',
    });
    expect(
      usersReducer(undefined, {
        type: 'sortUsers/name:desc',
      }),
    ).toEqual({
      ranked_users: ranked_users,
      sorted_users: sorted_users,
      sort_by: {field: 'name', type: 'desc'},
    });
  });

  it('should handle sorting by bananas ascendinlgy', () => {
    const ranked_users = rankUsers(Object.values(users_data));
    const sorted_users = sortUsers(ranked_users, {
      field: 'bananas',
      type: 'asc',
    });
    expect(
      usersReducer(undefined, {
        type: 'sortUsers/bananas:asc',
      }),
    ).toEqual({
      ranked_users: ranked_users,
      sorted_users: sorted_users,
      sort_by: {field: 'bananas', type: 'asc'},
    });
  });
});

it('should handle sorting by bananas descendinlgy', () => {
  const ranked_users = rankUsers(Object.values(users_data));
  const sorted_users = sortUsers(ranked_users, {
    field: 'bananas',
    type: 'desc',
  });
  expect(
    usersReducer(undefined, {
      type: 'sortUsers/bananas:desc',
    }),
  ).toEqual({
    ranked_users: ranked_users,
    sorted_users: sorted_users,
    sort_by: {field: 'bananas', type: 'desc'},
  });
});
