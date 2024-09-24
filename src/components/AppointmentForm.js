// import React, { useState, useEffect } from 'react';
// import '../styles/form.css';

// const AppointmentForm = ({ addAppointment, currentAppointment, updateAppointment }) => {
//   const [appointment, setAppointment] = useState({
//     name: '',
//     date: '',
//     time: '',
//     doctor: ''
//   });

//   useEffect(() => {
//     if (currentAppointment) {
//       setAppointment(currentAppointment);
//     }
//   }, [currentAppointment]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointment((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currentAppointment) {
//       updateAppointment(appointment);
//     } else {
//       addAppointment(appointment);
//     }
//     setAppointment({ name: '', date: '', time: '', doctor: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Patient Name"
//         value={appointment.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="date"
//         value={appointment.date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="time"
//         name="time"
//         value={appointment.time}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="doctor"
//         placeholder="Doctor Name"
//         value={appointment.doctor}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">
//         {currentAppointment ? 'Update Appointment' : 'Book Appointment'}
//       </button>
//     </form>
//   );
// };

// export default AppointmentForm;



//using reducers

// src/components/AppointmentForm.js
import React, { useState, useEffect } from 'react';
import '../styles/form.css';

const AppointmentForm = ({ addAppointment, currentAppointment, updateAppointment }) => {
  const [appointment, setAppointment] = useState({
    name: '',
    date: '',
    time: '',
    doctor: ''
  });

  useEffect(() => {
    if (currentAppointment) {
      setAppointment(currentAppointment);
    }
  }, [currentAppointment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAppointment) {
      updateAppointment(appointment);
    } else {
      addAppointment(appointment);
    }
    setAppointment({ name: '', date: '', time: '', doctor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Patient Name"
        value={appointment.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={appointment.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={appointment.time}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="doctor"
        placeholder="Doctor Name"
        value={appointment.doctor}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {currentAppointment ? 'Update Appointment' : 'Book Appointment'}
      </button>
    </form>
  );
};

export default AppointmentForm;
