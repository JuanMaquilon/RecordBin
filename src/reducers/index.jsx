import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { notificationReducer } from './notificationReducer';
import { recordReducer } from './recordReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  notificationSystem: notificationReducer,
  record: recordReducer
});

export default rootReducer;
