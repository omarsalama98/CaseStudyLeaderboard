import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import UsersTable from '../../components/UsersTable';
import {RankedUser} from './types';
import SearchIcon from '../../assets/SearchIcon';
import {useDispatch, useSelector} from 'react-redux';
import {sortUsersByName, sortUsersByBananas} from '../../store/actions';
import {users_state_type} from '../../store/users_reducer';
import {searchForUser} from '../../data/users_data_helper';

export default function LeaderboardScreen() {
  const [entries, setEntries] = useState<RankedUser[] | undefined>(undefined);
  const [search_query, setSearchQuery] = useState('');
  const [selected_user_index, setSelectedUserIndex] = useState<number>(-1);
  const dispatch = useDispatch();

  const sorted_users = useSelector((state: users_state_type) => {
    return state.sorted_users;
  });

  const submitSearch = useCallback(
    (search_string: string) => {
      if (sorted_users !== undefined) {
        const user_index = searchForUser(sorted_users, search_string);
        if (user_index > 9) {
          const new_entries = [...sorted_users];
          new_entries[9] = sorted_users[user_index];
          setEntries(new_entries.slice(0, 10));
          setSelectedUserIndex(9);
        } else {
          setSelectedUserIndex(user_index);
          if (user_index === -1) {
            Alert.alert(
              'This user name does not exist!',
              'Please specify an existing user name!',
            );
            setEntries(sorted_users.slice(0, 10));
          }
        }
      } else {
        dispatch(sortUsersByBananas());
      }
    },
    [sorted_users, dispatch],
  );

  const resetSearch = useCallback(() => {
    if (sorted_users !== undefined) {
      setEntries(sorted_users.slice(0, 10));
    } else {
      dispatch(sortUsersByBananas());
    }
  }, [sorted_users, dispatch]);

  useEffect(() => {
    if (sorted_users !== undefined) {
      setEntries(sorted_users.slice(0, 10));
    } else {
      dispatch(sortUsersByBananas());
    }
  }, [sorted_users, dispatch]);

  return (
    <View>
      <View style={styles.search_main_container}>
        <View style={styles.search_input_container}>
          <SearchIcon width={28} height={28} />
          <TextInput
            style={styles.search_input}
            placeholder="User name..."
            onChangeText={text => setSearchQuery(text)}
            autoCorrect={false}
          />
        </View>
        <View style={styles.search_button_container}>
          <Button
            title={search_query !== '' ? 'Search' : 'Reset'}
            onPress={
              search_query !== ''
                ? () => submitSearch(search_query)
                : () => resetSearch()
            }
          />
        </View>
      </View>
      <View style={styles.leaderboard_table_container}>
        {entries !== undefined && entries.length === 10 ? (
          <UsersTable
            table_entries={entries}
            selected_user_index={selected_user_index}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search_main_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '15%',
  },
  leaderboard_table_container: {
    height: '85%',
  },
  search_input_container: {
    width: '55%',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'rgb(255, 230, 230)',
    height: '60%',
    alignItems: 'center',
    padding: 5,
  },
  search_input: {
    fontSize: 18,
    marginStart: 10,
    flex: 1,
  },
  search_button_container: {
    width: '40%',
    height: '60%',
    borderColor: 'black',
    backgroundColor: 'rgb(230, 230, 255)',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
