// import React, { useState } from 'react';
// import certificateImage from '../../assets/certificate.png';
// import './certificate.css'
// // import { saveAsPng } from 'save-html-as-image';
// import { exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

import MyComponent from "./MyComponent";




const Certificate = () => {
    // const [name, setName] = useState('');

    // const componentRef = React.createRef()
    // const handleSubmit = async () => {
    //     await exportComponentAsPNG(componentRef)
    // }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5">Here is Certificate comming</h1>
            {/* <div>
                <h1 className="text-xl font-bold text-center my-5">Please Write Your Name</h1>
                <div className='flex items-center justify-center gap-3 my-5'>
                    <input onChange={() => setName(event.target.value)} type="text" placeholder='enter your name...' className='input input-success' />
                    <button onClick={handleSubmit} className='btn btn-success'>Download</button>
                </div>
            </div> */}
            {/* <React.Fragment>
                <div ref={this.componentRef}>Hello World</div>
                <button onClick={() => exportComponentAsPDF(this.componentRef)}>
                    Export As PDF
                </button>
                <button onClick={() => exportComponentAsPNG(this.componentRef)}>
                    Export As PNG
                </button>
            </React.Fragment> */}
            {/* <div id='certificate' ref={componentRef} className='w-[80%] mx-auto h-[750px] certificate relative'>
                <h1 className='absolute top-96 md:top-[350px] left-0 right-0 text-5xl lg:text-6xl font-bold capitalize text-center'>{name}</h1>
                <img src={certificateImage} alt="certificate" className='w-full h-full' />
                <h1 className='absolute top-[350px] left-0 right-0 text-3xl md:text-4xl lg:text-6xl font-bold capitalize text-center'></h1>
            </div> */}
            <MyComponent />
        </div>
    );
};

export default Certificate;