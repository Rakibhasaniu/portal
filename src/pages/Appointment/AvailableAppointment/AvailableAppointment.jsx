import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointment, setAppointment] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const {data:appointment =[]} = useQuery({
        queryKey: ['appointment'],
        queryFn: async() => {
          const res =  fetch('http://localhost:5000/appointment');
          const data = await res.json();
          return data;
        }
        
    })
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointment')
    //         .then(res => res.json())
    //         .then(data => setAppointment(data))
    // }, [])
    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointment.map(option =>  <AppointmentOption
                    key={option._id}
                    appointment={option}
                    setTreatment={setTreatment}
                    >

                    </AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            ></BookingModal>
            }
        </section >
    );
};

export default AvailableAppointment;