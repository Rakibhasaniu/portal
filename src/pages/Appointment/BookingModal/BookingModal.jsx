import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='gris grid-cols-1 gap-3 mt-10 '>
                        <input type="text" disabled value={date} className="input input-bordered w-full  " />
                        <select className="select select-bordered w-full max-w-xs">
                           
                            {
                                slots.map(slot =>  <option  value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;