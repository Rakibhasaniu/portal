import React from 'react';
import baby from '../../../assets/images/treatment.png'

const Banner2 = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={baby} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='Banner Img' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus voluptatibus voluptas molestiae quos, illum odit ut atque blanditiis ipsa voluptate ratione alias nisi consequatur perspiciatis totam et voluptates modi. Neque repellat suscipit dicta totam ex.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;