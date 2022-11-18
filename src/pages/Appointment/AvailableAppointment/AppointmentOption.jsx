import React from 'react';

const AppointmentOption = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary text-center">{name}</h2>
                <p>
                    {slots.length > 0 ? slots[0] : 'Try Another Day'}
                </p>
                <p>
                    {slots.length } spaces avialable
                </p>
                <div className="card-actions justify-end">
                    
                    <label 
                    htmlFor="booking-modal" 
                    className="btn btn-primary"
                    onClick={()=>setTreatment(appointment)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;