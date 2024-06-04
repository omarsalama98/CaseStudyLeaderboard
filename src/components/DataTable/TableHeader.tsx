import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {users_state_type} from '../../store/users_reducer';
import {sort_by_type} from '../../data/users_data_helper';
import {sortUsersByBananas, sortUsersByName} from '../../store/actions';
import Arrow from '../Arrow';

const TableHeader = (props: {cell_weights: number[]}) => {
  const sort_by: sort_by_type = useSelector((state: users_state_type) => {
    return state.sort_by;
  });
  const dispatch = useDispatch();

  const sortByName = () => {
    if (sort_by.field !== 'name') {
      dispatch(sortUsersByName('asc'));
    } else {
      if (sort_by.type === 'asc') {
        dispatch(sortUsersByName('desc'));
      } else {
        dispatch(sortUsersByName('asc'));
      }
    }
  };

  const sortByRank = () => {
    if (sort_by.field !== 'bananas') {
      dispatch(sortUsersByBananas('desc'));
    } else {
      if (sort_by.type === 'asc') {
        dispatch(sortUsersByBananas('desc'));
      } else {
        dispatch(sortUsersByBananas('asc'));
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.cell, {flex: props.cell_weights[0]}, styles.border_end]}
        onPress={() => {
          sortByName();
        }}>
        <Text style={styles.title}>{'Name'}</Text>
        <Arrow sort_by={sort_by} column_field="name" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.cell, {flex: props.cell_weights[1]}, styles.border_end]}
        onPress={() => {
          sortByRank();
        }}>
        <Text style={styles.title}>{'Rank'}</Text>
        <Arrow sort_by={sort_by} column_field="bananas" />
      </TouchableOpacity>
      <View style={[styles.cell, {flex: props.cell_weights[2]}]}>
        <Text style={styles.title}>{'Number of bananas'}</Text>
      </View>
    </View>
  );
};

export default TableHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 100)',
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingStart: 5,
  },
  border_end: {
    borderEndWidth: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
});
