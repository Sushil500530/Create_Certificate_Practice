/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FaAppleAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import { AuthContext } from '../../firebase/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';


const Resister = () => {
    const { createUser } = useContext(AuthContext)
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordShow2, setPasswordShow2] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [terms, setTerms] = useState('');
    const navigate = useNavigate()

    const handleResister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.password2.value;
        const termsConditions = e.target.checkbox.checked
        setPasswordError(" ");
        setTerms("");
        setPasswordShow('')
        
        if (password.length < 6) {
            return setPasswordError("password should be at least 6 character or longer")
        }
        else if (!/[A-Z]/.test(password)) {
            return setPasswordError('your password should have at least one uppercase characters.')
        }

        // eslint-disable-next-line no-useless-escape
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]/.test(password)) {
            return setPasswordError("you should be at least one special character")
        }

        else if (!termsConditions) {
            return setTerms("Please select terms and conditions")
        }

        createUser(email, password)
            .then(result => {

                if (password === rePassword) {
                    toast.success('Create successfully...!', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    console.log("log in successfully");
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: "https://i.ibb.co/Jt0tPSh/user.png"
                    })
                        .then(() => {
                            toast.success('Create successfully...!', {
                                position: toast.POSITION.TOP_CENTER
                            })
                        })
                        .catch(error => console.error(error))
                    return navigate("/login")

                }

            })
            .catch(() => {
                if (password !== rePassword) {
                    return setPasswordShow("invalid password!")
                }
                else {
                    toast.error('Already Existed This Course...!', {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            })
    }

    return (
        <div className='bg-[#f3f3f3] pb-12'>
            <Navbar></Navbar>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                <div className="lg:w-[580px] w-full m-5 bg-white mx-auto mt-12">
                    <form onSubmit={handleResister} className="space-y-8 p-8 border">
                        <h3 className="text-2xl font-semibold my-5">Create an account</h3>
                        <div className="relative z-0">
                            <input type="text" name="name" id="floating_standard" className="block bg-[#f3f3f3] py-2.5 px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="absolute  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[18px] font-semibold">Full Name</label>
                        </div>
                        <div className="relative z-0">
                            <input type="email" required name="email" id="floating_standard" className="block py-2.5 bg-[#f3f3f3] px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="absolute text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[18px] font-semibold">Email Address</label>
                        </div>
                        <div className="relative z-0">
                            <input type={passwordShow ? "text" : "password"} name='password' required id="floating_standard" className="block py-2.5 px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="absolute text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[18px] font-semibold">Password</label>
                            <span onClick={() => setPasswordShow(!passwordShow)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer">
                                {
                                    passwordShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            <p className='text-red-500 font-medium'>{passwordError}</p>
                        </div>
                        <div className="relative z-0">
                            <input type={passwordShow2 ? "text" : "password"} name='password2' required id="floating_standard" className="block py-2.5 px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="absolute text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[18px] font-semibold">Confirm Password</label>
                            <span onClick={() => setPasswordShow2(!passwordShow2)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer">
                                {
                                    passwordShow2 ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            <p className='text-red-500 font-medium'>{passwordShow}</p>
                        </div>
                        <span className="flex gap-3">
                            <input type="checkbox" className=" w-5 h-5 cursor-pointer" name='checkbox' />
                            <label className='text-base font-semibold'>Please accept our <a href='#' className='text-blue-600 cursor-pointer'>terms and conditions</a></label>
                        </span>
                        <p className='text-red-500 font-medium'>{terms}</p>
                        <button className="btn bg-blue-600 text-[18px] text-white hover:text-black w-full capitalize font-semibold">Create an account</button>
                        <h2 className="font-bold text-center">Already have an account? <Link to='/login' className="text-blue-600 hover:underline transition ease-in ">Please Login</Link></h2>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Resister;