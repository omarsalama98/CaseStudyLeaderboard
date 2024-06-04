import {rankUsers, sortUsers, sort_by_type} from '../data/users_data_helper';
import {RankedUser} from '../features/Leaderboard/types';
import {action_type} from './actions';

const users_data = require('../data/leaderboard.json');

export type users_state_type = {
  ranked_users: RankedUser[];
  sorted_users: undefined | RankedUser[];
  sort_by: sort_by_type;
};

const initialState: users_state_type = {
  ranked_users: rankUsers(Object.values(users_data)),
  sorted_users: undefined,
  sort_by: {field: 'bananas', type: 'desc'},
};

export default function usersReducer(
  state = initialState,
  action: action_type,
) {
  let sort_by: sort_by_type = initialState.sort_by;
  switch (action.type) {
    case 'sortUsers/name:asc':
      sort_by = {
        field: 'name',
        type: 'asc',
      };
      break;
    case 'sortUsers/name:desc':
      sort_by = {
        field: 'name',
        type: 'desc',
      };
      break;
    case 'sortUsers/bananas:asc':
      sort_by = {
        field: 'bananas',
        type: 'asc',
      };
      break;
    case 'sortUsers/bananas:desc':
      sort_by = {
        field: 'bananas',
        type: 'desc',
      };
      break;
    default:
      return state;
  }
  return {
    ...state,
    sorted_users: sortUsers(state.ranked_users, sort_by),
    sort_by: sort_by,
  };
}
