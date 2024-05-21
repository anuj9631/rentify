import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer'; // Ensure this file exists in src/reducers

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
});
