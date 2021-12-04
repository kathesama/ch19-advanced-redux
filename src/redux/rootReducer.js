import { combineReducers } from '@reduxjs/toolkit';

import userAuthReducer from './userAuthentication/userAuthSlice';

const rootReducer = combineReducers({
  userAuthentication: userAuthReducer,
});

export default rootReducer;
