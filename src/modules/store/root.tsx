import { combineReducers } from 'redux';

import { settings } from './settings';
import { account } from './account';

export const rootReducer = combineReducers({ settings, account });
