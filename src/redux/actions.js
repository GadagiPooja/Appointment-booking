// src/redux/actions.js
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const SET_CURRENT_APPOINTMENT = 'SET_CURRENT_APPOINTMENT';

export const addAppointment = (appointment) => ({
  type: ADD_APPOINTMENT,
  payload: appointment
});

export const updateAppointment = (appointment) => ({
  type: UPDATE_APPOINTMENT,
  payload: appointment
});

export const deleteAppointment = (index) => ({
  type: DELETE_APPOINTMENT,
  payload: index
});

export const setCurrentAppointment = (appointment) => ({
  type: SET_CURRENT_APPOINTMENT,
  payload: appointment
});
