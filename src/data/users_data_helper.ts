import {RankedUser, User} from '../features/Leaderboard/types';

export type sort_by = 'name' | 'bananas';

export function rankUsers(users: User[]): RankedUser[] {
  const sorted_users = [...users].sort((user_1, user_2) => {
    const difference = user_2.bananas - user_1.bananas;
    if (difference === 0) {
      return user_1.name > user_2.name ? 1 : -1;
    } else {
      return difference;
    }
  });
  const ranked_users = sorted_users.map((user, index) => {
    return {...user, rank: index + 1};
  });
  return ranked_users;
}

export function sortUsers(
  users: RankedUser[],
  sort_by_field: sort_by,
): RankedUser[] {
  switch (sort_by_field) {
    case 'name':
      return [...users].sort((user_1, user_2) =>
        user_1.name > user_2.name ? 1 : -1,
      );
    case 'bananas':
      return [...users].sort((user_1, user_2) => user_1.rank - user_2.rank);
  }
}

// A function that receives the list of users, and a search query and returns the index
//  of the first user that matches with first name, last name or both.
// If no user matched with above we return the last matching user that contains the search
//  string anywhere in their name.
// If both matching techniques weren't successful we return -1.

export function searchForUser(users: RankedUser[], search_query: string) {
  // Convert search query to lower case
  const search_query_lower = search_query.toLowerCase();

  let matching_index = -1;

  // Find the first match where the search query matches
  //    the first part of a user's first or last name or both
  const found_user_index = users.findIndex((user, index) => {
    // Check if user name contains the search query in any part
    const name_includes_search_query = user.name
      .toLowerCase()
      .includes(search_query_lower);
    if (name_includes_search_query) {
      // Save the index of the user
      matching_index = index;
    }
    const split_user_name = user.name.split(' ');
    const first_name = split_user_name[0].toLowerCase();
    const last_name =
      split_user_name.length > 1
        ? split_user_name.slice(-1)[0].toLowerCase()
        : '';
    return (
      first_name === search_query_lower ||
      last_name === search_query_lower ||
      `${first_name} ${last_name}` === search_query_lower
    );
  });
  // In case no matching first_name, last_name or both,
  //     we return the latest user that has the query as a substring

  return found_user_index > -1 ? found_user_index : matching_index;
}
