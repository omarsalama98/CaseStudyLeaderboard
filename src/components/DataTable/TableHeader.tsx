import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TableHeader = (props: {
  column_titles: string[];
  cell_weights: number[];
}) => {
  return props.column_titles.length > 0 ? (
    <View style={[styles.container]}>
      {props.column_titles.map((title, index) => {
        return (
          <View
            style={[
              styles.cell,
              {flex: props.cell_weights[index]},
              index < 2 ? styles.border_end : {},
            ]}
            key={index}>
            <Text style={styles.title}>{title}</Text>
          </View>
        );
      })}
    </View>
  ) : null;
};

export default TableHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 100)',
    borderBottomWidth: 1,
  },
  cell: {
    justifyContent: 'center',
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
