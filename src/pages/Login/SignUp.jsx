import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleRegister = (data) => {
        console.log(data);
    }
    return (
        <div className='h-[800px]  flex justify-center items-center' >
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center' >Login</h2>
                <form onSubmit={handleSubmit( handleRegister)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text" {...register("name",
                                { required: "Name  Is Required" }
                            )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text" {...register("email",
                                { required: "Email Address Is Required" }
                            )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password" {...register("password",
                                {
                                    required: "Password Is Required",
                                    minLength: {value:6, message: 'Password must be 6 character or be longer'}
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value={'Login'} type="submit" />
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/login">Already Have An Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;