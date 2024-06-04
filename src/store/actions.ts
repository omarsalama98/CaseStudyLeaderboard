import {action_type} from '../features/Leaderboard/types';

export const sortUsersByName = (
  sort_type: 'asc' | 'desc' = 'asc',
): action_type => {
  return {
    type: `sortUsers/name:${sort_type}`,
  };
};

export const sortUsersByBananas = (
  sort_type: 'asc' | 'desc' = 'desc',
): action_type => {
  return {
    type: `sortUsers/bananas:${sort_type}`,
  };
};
