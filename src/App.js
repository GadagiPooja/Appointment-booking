import React, { useState } from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const updateAppointment = (updatedAppointment) => {
    setAppointments(appointments.map((appointment) =>
      appointment === currentAppointment ? updatedAppointment : appointment
    ));
    setCurrentAppointment(null);
  };

  const editAppointment = (appointment) => {
    setCurrentAppointment(appointment);
  };

  const deleteAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Appointment Booking</h1>
      <AppointmentForm
        addAppointment={addAppointment}
        currentAppointment={currentAppointment}
        updateAppointment={updateAppointment}
      />
      <AppointmentList
        appointments={appointments}
        onEdit={editAppointment}
        onDelete={deleteAppointment}
      />
    </div>
  );
};

export default App;
