/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const OrderItems = ({ order }) => {
    const { id, title, image, description, } = order || {};
    AOS.init()
    return (
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
            <div className="w-full">
                <div className="card bg-base-100 mt-8 h-[520px] m-5 lg:m-0 md:m-0 shadow border">
                    <figure className="">
                        <img src={image} alt="image" className="rounded-xl hover:scale-110 cursor-pointer transition ease-in w-full h-[290px]" />
                    </figure>

                    <div className="card-body py-0 px-5 items-center text-center">
                        <h2 className="card-title py-2">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions w-full">
                            <Link to={`/serviceId/${id}`} className="btn w-full btn-primary text-white capitalize text-xl mb-5"><button>Show Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItems;