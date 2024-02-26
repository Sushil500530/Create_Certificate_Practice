import React, { useState } from 'react';
import certificateImage from '../../assets/certificate.png';
import './certificate.css'
import { saveAsPng } from 'save-html-as-image';
import PDF from '../pdf/PDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Certificate = () => {
    const [name, setName] = useState('');
    const componentRef = React.createRef()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const common = document.querySelector("#certificate")
        localStorage.setItem('name', name)
        await saveAsPng(common)
    }

    return (
        <div className='mb-20 p-5'>
            <h1 className="text-2xl font-bold text-center my-5">Here is Certificate comming</h1>
            <PDFDownloadLink document={<PDF/>} fileName='certificate.pdf'>
                {
                    (({ loading }) => loading ? <button>Loading....</button> : <button className='btn btn-success'>Fast Download Now</button>)
                }
            </PDFDownloadLink>
            <div>
                <h1 className="text-xl font-bold text-center my-5">Please Write Your Name</h1>
                <form className='flex items-center justify-center gap-3 my-5'>
                    <input onChange={() => setName(event.target.value)} type="text" placeholder='enter your name...' className='input input-success' />
                    <button onClick={handleSubmit} type='submit' className='btn btn-success'>Download</button>
                </form>
            </div>
            <div id='certificate' ref={componentRef} className='w-full h-full certificate relative'>
                <h1 className='absolute top-24 md:top-[232px] lg:top-[300px] xl:top-[400px] 2xl:top-[500px] left-0 right-0 text-2xl md:text-5xl lg:text-6xl font-bold capitalize text-center'>{name}</h1>
                <img src='https://i.ibb.co/3yMGWhT/certificate-new.png' alt="certificate" className='w-full h-full' />
                <h1 className='absolute top-[350px] left-0 right-0 text-3xl md:text-4xl lg:text-6xl font-bold capitalize text-center'></h1>
            </div>
        </div>
    );
};

export default Certificate;