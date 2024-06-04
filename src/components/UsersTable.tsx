import React, {useCallback} from 'react';
import {RankedUser} from '../features/Leaderboard/types';
import {StyleSheet, View} from 'react-native';
import TableHeader from './DataTable/TableHeader';
import TableEntry from './DataTable/TableEntry';

const CELL_WEIGHTS = [3, 1.5, 2];

const UsersTable = (props: {
  table_entries: RankedUser[];
  selected_user_index: number;
}) => {
  const formatUserName = useCallback((user_name: string) => {
    const split_user_name = user_name.split(' ');
    const first_name = split_user_name[0];
    const last_name =
      split_user_name.length > 1 ? split_user_name.slice(-1) : '';

    return `${first_name} ${last_name}`;
  }, []);

  return props.table_entries.length > 0 ? (
    <View style={styles.container}>
      <TableHeader cell_weights={CELL_WEIGHTS} />

      {props.table_entries.map((user_entry, index) => {
        return (
          <TableEntry
            table_entry_values={[
              formatUserName(user_entry.name),
              user_entry.rank.toString(),
              user_entry.bananas.toString(),
            ]}
            num_columns={3}
            highlighted_columns={
              index === props.selected_user_index ? [0] : undefined
            }
            cell_weights={CELL_WEIGHTS}
            key={index}
          />
        );
      })}
    </View>
  ) : null;
};

export default UsersTable;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
