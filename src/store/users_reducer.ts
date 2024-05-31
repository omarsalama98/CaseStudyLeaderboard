import {rankUsers, sortUsers} from '../data/users_data_helper';
import {RankedUser} from '../features/Leaderboard/types';
import {action_type} from './actions';

const users_data = require('../data/leaderboard.json');

export type users_state_type = {
  ranked_users: RankedUser[];
  sorted_users: undefined | RankedUser[];
};

const initialState: users_state_type = {
  ranked_users: rankUsers(Object.values(users_data)),
  sorted_users: undefined,
};

export default function usersReducer(
  state = initialState,
  action: action_type,
) {
  switch (action.type) {
    case 'sortUsers/name':
      return {
        ...state,
        sorted_users: sortUsers(state.ranked_users, 'name'),
      };

    case 'sortUsers/bananas':
      return {
        ...state,
        sorted_users: sortUsers(state.ranked_users, 'bananas'),
      };
    default:
      return state;
  }
}
