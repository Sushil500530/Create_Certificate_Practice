/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../Header/Navbar/Navbar';
import { AuthContext } from '../../firebase/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signInUser, googleSignIn, gitHubSignIn } = useContext(AuthContext)
    const [terms, setTerms] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
   
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsConditions = e.target.checkbox.checked;
        setTerms('');
        setPasswordError('');


        signInUser(email, password)
            .then(result => {
                // console.log(result.user);
                navigate(location?.state ? location.state : "/")
                return toast.success('log in successfully...!', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(() => {
                setPasswordError("invalid password!")
            })

        if (!termsConditions) {
            return setTerms("Please select terms and conditions")
        }
    
    }

    const handleGoogleSignIn = (e) => {
        googleSignIn(e)
            .then(() => {
                // console.log(result.user);
                navigate(location?.state ? location.state : "/")
                return toast.success('log in successfully...!', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        gitHubSignIn()
            .then(() => {
                // console.log(result.user);
                navigate(location?.state ? location.state : "/")
                 toast.success('log in successfully...!', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='bg-[#f3f3f3] pb-12'>
            <Navbar></Navbar>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                <div className=" w-full lg:w-[580px] mx-auto mt-12 bg-white pb-5">
                    <form onSubmit={handleLogin} className="space-y-8 p-8 border">
                        <h3 className="text-2xl font-semibold my-5">Login</h3>
                        <div className="relative z-0">
                            <input type="email" name="email" id="floating_standard" required className="block py-2.5 px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="absolute text-[18px] text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">Username or Email</label>
                        </div>
                        <div className="relative z-0">
                            <input type="password" name="password" id="floating_standard" className="block py-2.5 px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="absolute text-[18px] text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold">Password</label>
                        </div>
                        <p className='text-red-500 font-medium m-0'>{passwordError}</p>
                        <div className="flex items-center justify-between">
                            <span className="flex gap-3">
                                <input type="checkbox" name='checkbox' className=" w-5 h-5 cursor-pointer" />
                                <label className='font-medium'>Please accept our <a href='#' className='text-blue-600'>terms and conditions</a></label>
                            </span>
                            <p className="text-blue-600 underline"><Link to="#">Forget Password</Link></p>
                        </div>
                        <p className='font-medium text-red-500'>{terms}</p>
                        <button className="btn bg-blue-600 text-white hover:text-black text-[18px] w-full capitalize font-semibold">Login</button>
                        <h2 className="font-bold text-center">Don't have an account? <Link to='/resister' className="text-blue-600 hover:underline ">Create an account</Link></h2>
                    </form>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-400 border-0 dark:bg-black" />
                        <span className="absolute px-3 font-medium text-black -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black">Or</span>
                    </div>
                    <div className='w-full md:w-[466px] lg:w-full mx-auto p-5'>
                        <div onClick={handleGoogleSignIn} className="border-2 cursor-pointer hover:text-blue-500 transition ease-in rounded-full flex items-center md:gap-10 lg:gap-32 gap-3">
                            <p className="text-[38px] p-2"><FcGoogle></FcGoogle></p>
                            <h2 className="text-[18px] font-semibold">Continue With Google</h2>
                        </div>
                        <ToastContainer />
                        <div onClick={handleGithubSignIn} className="border-2 cursor-pointer hover:text-blue-500 transition ease-in rounded-full my-5 flex items-center md:gap-10 lg:gap-32 gap-3">
                            <p className="text-[38px] text-black p-2"><FaGithub></FaGithub></p>
                            <h2 className="text-[18px] font-semibold">Continue With Github</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;