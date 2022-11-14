import React from 'react';
import icon from '../../../assets/icons/quote.svg';
import pl1 from '../../../assets/images/people1.png';
import pl2 from '../../../assets/images/people2.png';
import pl3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testomonial = () => {
    const reviewData = [
        {
            _id:1,
            name:'Winson Henry',
            img: pl1,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint nemo rem sit voluptates!',
            location:'California'
        },
        {
            _id:2,
            name:'Winson Henry',
            img: pl3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint nemo rem sit voluptates!',
            location:'California'
        },
        {
            _id:2,
            name:'Winson Henry',
            img: pl2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint nemo rem sit voluptates!',
            location:'California'
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between '>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says </h2>
                </div>
                <figure>
                    <img className=' w-24 lg:w-48' src={icon}  alt=""  />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewData.map(reviews => <Review
                        key={reviews._id}
                        reviews={reviews}
                    ></Review>)
                }
            </div>
            
        </section>
    );
};

export default Testomonial;