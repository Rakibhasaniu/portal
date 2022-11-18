import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient:name,
            slot,
            email,
            phone,
        }
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='gris grid-cols-1 gap-3 mt-10 '>
                        <input type="text" disabled value={date} className="input input-bordered w-full  " />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                           
                            {
                                slots.map((slot,i) =>  <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;