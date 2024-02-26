import { useState } from 'react';
import certificate from '../../assets/certificate.png';
import './certificate.css'

const Certificate = () => {
    const [name,setName] = useState('');
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5">Here is Certificate comming</h1>
            <div>
                <h1 className="text-xl font-bold text-center my-5">Please Write Your Name</h1>
                <div onSubmit={handleSubmit} className='flex items-center justify-center gap-3 my-5'>
                    <input onChange={()=> setName(event.target.value)} type="text" placeholder='enter your name...' className='input input-success' />
                    <button className='btn btn-success'>Download</button>
                </div>
            </div>
            <div className='w-[80%] mx-auto h-[750px] certificate relative'>
                <h1 className='absolute top-96 md:top-[350px] left-0 right-0 text-5xl lg:text-6xl font-bold capitalize text-center'>{name}</h1>
                <img src={certificate} alt="certificate" className='w-full h-full' />
                <h1 className='absolute top-[350px] left-0 right-0 text-3xl md:text-4xl lg:text-6xl font-bold capitalize text-center'></h1>
            </div>
        </div>
    );
};

export default Certificate;