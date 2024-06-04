import React from 'react';
import {sort_by_type} from '../data/users_data_helper';
import ArrowDown from '../assets/ArrowDown';
import ArrowUp from '../assets/ArrowUp';

export default function Arrow(props: {
  sort_by: sort_by_type;
  column_field: 'name' | 'bananas';
}) {
  return props.sort_by.field === props.column_field ? (
    props.sort_by.type === 'asc' ? (
      <ArrowDown width={20} height={20} color={'black'} />
    ) : (
      <ArrowUp width={20} height={20} color={'black'} />
    )
  ) : (
    <ArrowDown width={20} height={20} color={'rgb(200, 200, 200)'} />
  );
}
