// src/redux/reducers.js
import {
    ADD_APPOINTMENT,
    UPDATE_APPOINTMENT,
    DELETE_APPOINTMENT,
    SET_CURRENT_APPOINTMENT
  } from './actions';
  
  const initialState = {
    appointments: [],
    currentAppointment: null
  };
  
  const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_APPOINTMENT:
        return {
          ...state,
          appointments: [...state.appointments, action.payload]
        };
      
      case UPDATE_APPOINTMENT:
        return {
          ...state,
          appointments: state.appointments.map(appointment =>
            appointment === state.currentAppointment ? action.payload : appointment
          ),
          currentAppointment: null
        };
      
      case DELETE_APPOINTMENT:
        return {
          ...state,
          appointments: state.appointments.filter((_, i) => i !== action.payload)
        };
  
      case SET_CURRENT_APPOINTMENT:
        return {
          ...state,
          currentAppointment: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default appointmentReducer;
  