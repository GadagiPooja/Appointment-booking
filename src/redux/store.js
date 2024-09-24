import { createStore } from 'redux';
import appointmentReducer from './reducers';

const store = createStore(
  appointmentReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For Redux DevTools
);

export default store;
