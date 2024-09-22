import React from 'react';
import AppointmentRow from './AppointmentRow';
import '../styles/list.css';

const AppointmentList = ({ appointments, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Doctor</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <AppointmentRow
            key={index}
            appointment={appointment}
            onEdit={onEdit}
            onDelete={onDelete}
            index={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentList;
