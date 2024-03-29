import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/login_register_images/register.jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast'
// import useToken from '../../Hooks/useToken';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [registerError, setRegisterError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handleRegister = data => {
        console.log(data);
        setRegisterError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Succesfully')

                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.account_type)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err.message);
                setRegisterError(err.message);
            })

    }
    const saveUser = (name, email, account_type) => {
        const user = { name, email, account_type };
        fetch('https://funio-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json)
            .then(data => {
                setCreatedUserEmail(email)
            })
    }

    return (
        <section className='my-28 block lg:flex justify-around'>
            <div className='md:w-full lg:w-1/2 mb-16 lg:mb-0'>
                <img className='md:mx-auto lg:mx-0' src={registerImage} alt="" />
            </div>
            <div className='w-[385px] h-[540px] shadow-xl  border px-[29px] py-[25px] mx-auto'>
                <h2 className='text-xl text-center text-black'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered border-slate-400 w-full max-w-xs text-black" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs text-black" />
                        {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text text-black">Select Account Type</span>
                        </label>
                        <select {...register("account_type")} className="select select-bordered w-full max-w-xs border-slate-400 mb-5 text-black">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>

                    <div>
                        {
                            registerError && <p className='text-red-700 mb-5'>{registerError}</p>
                        }
                    </div>

                    <button className=' bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-xl font-semibold w-full'>Register</button>
                    <p className='text-black'>Already have an account? <span className='text-primary'><Link to='/login'>Please Login</Link></span></p>

                </form>
            </div>
        </section>
    );
};

export default Register;