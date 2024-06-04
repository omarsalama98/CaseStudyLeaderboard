export type User = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
};

export type RankedUser = User & {rank: number};

export type action_type = {
  type:
    | 'sortUsers/name:asc'
    | 'sortUsers/name:desc'
    | 'sortUsers/bananas:asc'
    | 'sortUsers/bananas:desc'
    | 'None';
};
