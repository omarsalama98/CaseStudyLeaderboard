export type action_type = {
  type:
    | 'sortUsers/name:asc'
    | 'sortUsers/name:desc'
    | 'sortUsers/bananas:asc'
    | 'sortUsers/bananas:desc'
    | 'None';
};

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
