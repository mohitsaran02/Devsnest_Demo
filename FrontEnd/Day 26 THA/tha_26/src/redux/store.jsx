import {createStore} from 'redux';
import { userFormReducer } from './userFormReducer';

const store = createStore(userFormReducer);

export default store;