import React from 'react';

const AppointmentOption = ({ appointment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary text-center">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;