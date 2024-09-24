// import React, { useState } from 'react';
// import AppointmentForm from './components/AppointmentForm';
// import AppointmentList from './components/AppointmentList';
// import './App.css';

// const App = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [currentAppointment, setCurrentAppointment] = useState(null);

//   const addAppointment = (appointment) => {
//     setAppointments([...appointments, appointment]);
//   };

//   const updateAppointment = (updatedAppointment) => {
//     setAppointments(appointments.map((appointment) =>
//       appointment === currentAppointment ? updatedAppointment : appointment
//     ));
//     setCurrentAppointment(null);
//   };

//   const editAppointment = (appointment) => {
//     setCurrentAppointment(appointment);
//   };

//   const deleteAppointment = (index) => {
//     setAppointments(appointments.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h1>Appointment Booking</h1>
//       <AppointmentForm
//         addAppointment={addAppointment}
//         currentAppointment={currentAppointment}
//         updateAppointment={updateAppointment}
//       />
//       <AppointmentList
//         appointments={appointments}
//         onEdit={editAppointment}
//         onDelete={deleteAppointment}
//       />
//     </div>
//   );
// };

// export default App;


//for reducers

// src/App.js
import React from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, updateAppointment, deleteAppointment, setCurrentAppointment } from './redux/actions';

const App = () => {
  const appointments = useSelector(state => state.appointments);
  const currentAppointment = useSelector(state => state.currentAppointment);
  const dispatch = useDispatch();

  const handleAddAppointment = (appointment) => {
    dispatch(addAppointment(appointment));
  };

  const handleUpdateAppointment = (appointment) => {
    dispatch(updateAppointment(appointment));
  };

  const handleEditAppointment = (appointment) => {
    dispatch(setCurrentAppointment(appointment));
  };

  const handleDeleteAppointment = (index) => {
    dispatch(deleteAppointment(index));
  };

  return (
    <div className="container">
      <h1>Appointment Booking</h1>
      <AppointmentForm
        addAppointment={handleAddAppointment}
        currentAppointment={currentAppointment}
        updateAppointment={handleUpdateAppointment}
      />
      <AppointmentList
        appointments={appointments}
        onEdit={handleEditAppointment}
        onDelete={handleDeleteAppointment}
      />
    </div>
  );
};

export default App;
