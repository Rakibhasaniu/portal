import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header className='my-6'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl lg:w-1/2" />
                    <div className='mr-6'>
                      <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                      >
                        {/* <p>You Have Selected Date: {format(selectedDate, 'PP')}</p> */}
                      </DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;