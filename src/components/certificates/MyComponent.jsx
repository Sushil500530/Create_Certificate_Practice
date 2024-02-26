// import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import  React, { Component} from 'react';
import certificateImage from '../../assets/certificate.png';
class MyComponent extends Component{
   componentRef = React.createRef()
  state ={
    Name:''
  }

    
   
  render (){
    return (
      <div>
           <div>
                <h1 className="text-xl font-bold text-center my-5">Please Write Your Name</h1>
                <div className='flex items-center justify-center gap-3 my-5'>
                    <input onChange={() => this.setState(event.target.value)} type="text" placeholder='enter your name...' className='input input-success' />
                    <button onClick={(e)=> {
                      e.preventDefault();

                    }} className='btn btn-success'>Download</button>
                </div>
            </div>
           
            <div id='certificate' ref={this.componentRef} className='w-[80%] mx-auto h-[750px] certificate relative'>
                <h1 className='absolute top-96 md:top-[350px] left-0 right-0 text-5xl lg:text-6xl font-bold capitalize text-center'>{this.state.Name}</h1>
                <img src={certificateImage} alt="certificate" className='w-full h-full' />
                <h1 className='absolute top-[350px] left-0 right-0 text-3xl md:text-4xl lg:text-6xl font-bold capitalize text-center'></h1>
            </div>
      </div>
    )
  }
}

export default MyComponent;