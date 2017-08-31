import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export const reducer = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
