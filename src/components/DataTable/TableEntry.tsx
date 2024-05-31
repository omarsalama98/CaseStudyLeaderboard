import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TableEntry = (props: {
  table_entry_values: string[];
  num_columns: number;
  highlighted_columns?: number[];
  cell_weights: number[];
}) => {
  return props.table_entry_values.length <= props.num_columns ? (
    <View style={styles.container}>
      {props.table_entry_values.map((entry, index) => {
        return (
          <View
            style={[
              styles.cell,
              {flex: props.cell_weights[index]},
              index < 2 ? styles.border_end : {},
            ]}
            key={index}>
            <Text
              style={
                props.highlighted_columns?.includes(index)
                  ? styles.highlighted_cell_text
                  : styles.cell_text
              }>
              {entry}
            </Text>
          </View>
        );
      })}
    </View>
  ) : null;
};

export default TableEntry;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(240, 255, 240)',
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
  cell_text: {
    fontSize: 20,
    color: 'black',
  },
  highlighted_cell_text: {
    fontSize: 20,
    color: 'red',
  },
});
