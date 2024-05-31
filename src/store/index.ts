import {createStore} from 'redux';
import usersReducer from './users_reducer';

const store = createStore(usersReducer);

export default store;
