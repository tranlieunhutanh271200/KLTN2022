import { AuthReducer } from './auth.reducer'
import { combineReducers } from 'redux'
import { CustomizeReducer } from './customize.reducer';
const rootReducer = combineReducers({
    auth: AuthReducer,
    customize: CustomizeReducer
})
export {rootReducer};