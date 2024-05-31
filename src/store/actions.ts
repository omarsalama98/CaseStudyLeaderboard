export type action_type = {
  type: 'sortUsers/name' | 'sortUsers/bananas';
};

export const sortUsersByName = (): action_type => {
  return {
    type: 'sortUsers/name',
  };
};

export const sortUsersByBananas = (): action_type => {
  return {
    type: 'sortUsers/bananas',
  };
};
