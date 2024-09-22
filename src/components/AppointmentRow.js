import React from 'react';
import '../styles/button.css';

const AppointmentRow = ({ appointment, onEdit, onDelete, index }) => {
  return (
    <tr>
      <td>{appointment.name}</td>
      <td>{appointment.date}</td>
      <td>{appointment.time}</td>
      <td>{appointment.doctor}</td>
      <td>
        <button className="action-button" onClick={() => onEdit(appointment)}>Update</button>
        <button className="action-button delete-button" onClick={() => onDelete(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default AppointmentRow;
